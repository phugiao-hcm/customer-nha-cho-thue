export function formatPriceVND(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0, // bỏ phần lẻ
  }).format(price)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD") // tách dấu
    .replace(/[\u0300-\u036f]/g, "") // xóa dấu
    .replace(/[^a-z0-9\s-]/g, "") // bỏ ký tự đặc biệt
    .trim()
    .replace(/\s+/g, "-"); // khoảng trắng → gạch ngang
}
