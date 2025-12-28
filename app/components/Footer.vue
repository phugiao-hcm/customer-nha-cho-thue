<template>
    <footer class="bg-gray-900 text-white py-10 mt-20">
        <div
            class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            <!-- Logo & giới thiệu -->
            <div>
                <h2 class="text-xl font-bold mb-2">Trọ Đây Rồi</h2>
                <p class="text-gray-400 text-sm">
                    Nơi kết nối nhà cho thuê tại Phú Giáo, KCN Tân Bình, Bắc Tân
                    Uyên. Uy tín - Minh bạch - Tận tâm phục vụ.
                </p>
                <p class="text-gray-400 text-sm mt-3">
                    <strong>Địa chỉ:</strong> Xã Phước Hòa, Huyện Phú Giáo, Tỉnh
                    Bình Dương
                </p>
            </div>

            <!-- Liên kết -->
            <div>
                <h3 class="font-semibold mb-3">Liên kết nhanh</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                    <li>
                        <NuxtLink to="/about" class="hover:text-blue-400">
                            Liên hệ
                        </NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Mạng xã hội -->
            <div>
                <h3 class="font-semibold mb-3">Kết nối với chúng tôi</h3>
                <div class="flex space-x-4">
                    <a
                        href="https://www.facebook.com/groups/1513290416777599"
                        class="hover:text-blue-400 flex items-center space-x-1"
                    >
                        <i class="i-lucide-facebook" /> <span>Facebook</span>
                    </a>
                </div>
                <p class="text-sm text-gray-400 mt-4">
                    Hotline/Zalo tư vấn:
                    <a
                        href="tel:0937704598"
                        class="text-blue-400 hover:underline"
                        >0937 704 598</a
                    >
                </p>
            </div>
        </div>

        <!-- Copyright -->
        <div
            class="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500"
        >
            &copy; 2025 Trọ Đây Rồi. All rights reserved.
        </div>
    </footer>
</template>

