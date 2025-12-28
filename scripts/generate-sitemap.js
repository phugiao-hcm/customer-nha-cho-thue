import fs from "fs";
import fetch from "node-fetch";

const BASE_URL = "https://trodayroi.vn";
const API_URL =
    "https://api.kongricsstudio.com/api/v1/phongtro/getPhongTroList?page=1&provinceId=28&wardId&price&square&areaId&facility&limit=1000&keyword&roomType";

// 👉 Hàm bỏ dấu & thêm gạch nối
function slugifyTitle(title = "") {
    return title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // xoá dấu tiếng Việt
        .replace(/[^a-zA-Z0-9\s-]/g, "") // xoá ký tự đặc biệt
        .trim()
        .replace(/\s+/g, "-") // thay khoảng trắng bằng gạch nối
        .toLowerCase();
}

// 👉 Chuyển ngày sang chuẩn ISO 8601
function formatISO(dateStr) {
    if (!dateStr) return new Date().toISOString(); // fallback
    const d = new Date(dateStr);
    return d.toISOString(); // ví dụ: 2025-10-24T03:33:00.000Z
}

const generateSitemap = async () => {
    try {
        const res = await fetch(API_URL, {
            headers: {
                Accept: "application/json",
                Origin: "https://trodayroi.vn",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
            },
        });

        const json = await res.json();
        const rooms = json?.data?.phongTroList || [];

        if (!Array.isArray(rooms) || rooms.length === 0) {
            console.error("❌ Không có dữ liệu phòng trọ trong API:", json);
            return;
        }

        const urls = rooms
            .map(
                (r) => `
  <url>
    <loc>${BASE_URL}/phong-tro/${slugifyTitle(r.title)}-${r.id}</loc>
    <lastmod>${formatISO(r.createTime)}</lastmod>
    <priority>0.9</priority>
  </url>`
            )
            .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${urls}
</urlset>`;

        fs.writeFileSync("./public/sitemap.xml", xml);
        console.log("✅ sitemap.xml generated successfully!");
    } catch (err) {
        console.error("❌ Lỗi khi tạo sitemap:", err);
    }
};

generateSitemap();
