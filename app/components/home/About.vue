<template>
    <section class="min-h-screen bg-white text-gray-800 py-16">
        <div class="max-w-6xl mx-auto px-4">
            <!-- Tiêu đề -->
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-blue-600">Về Chúng Tôi</h1>
                <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Trọ Đây Rồi - Kết nối nhà Trọ Đây Rồi uy tín, minh bạch và
                    tận tâm.
                </p>
            </div>

            <!-- Giới thiệu -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <img
                    :src="imageUrl"
                    alt="Giới thiệu"
                    class="rounded-2xl shadow-md"
                />
                <div>
                    <h2 class="text-2xl font-semibold mb-3 text-blue-500">
                        Chúng tôi là ai?
                    </h2>
                    <p class="text-gray-700 leading-relaxed">
                        Trọ Đây Rồi là đơn vị chuyên môi giới nhà đất, đất nền,
                        đất vườn, đất thổ cư tại khu vực huyện Phú Giáo, tỉnh
                        Bình Dương. Với đội ngũ tư vấn tận tâm và kinh nghiệm,
                        chúng tôi cam kết mang lại giải pháp phù hợp và an toàn
                        nhất cho khách hàng.
                    </p>
                </div>
            </div>

            <!-- Tầm nhìn & Sứ mệnh -->
            <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-blue-50 p-6 rounded-xl shadow-md">
                    <h3 class="text-xl font-semibold text-blue-600 mb-2">
                        Tầm nhìn
                    </h3>
                    <p class="text-gray-700">
                        Trở thành đơn vị bất động sản hàng đầu tại Phú Giáo,
                        mang lại giá trị thực cho từng mảnh đất và từng khách
                        hàng.
                    </p>
                </div>
                <div class="bg-blue-50 p-6 rounded-xl shadow-md">
                    <h3 class="text-xl font-semibold text-blue-600 mb-2">
                        Sứ mệnh
                    </h3>
                    <p class="text-gray-700">
                        Cung cấp thông tin minh bạch, dịch vụ tận tâm và hỗ trợ
                        khách hàng đầu tư, an cư hiệu quả nhất.
                    </p>
                </div>
            </div>

            <!-- Ưu điểm nổi bật -->
            <div class="mt-20">
                <h2
                    class="text-2xl font-semibold text-center text-blue-600 mb-6"
                >
                    Tại sao chọn chúng tôi?
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div
                        class="bg-white p-6 shadow-md rounded-xl text-center border"
                    >
                        <i
                            class="i-lucide-shield-check text-4xl text-blue-500 mb-2"
                        ></i>
                        <h4 class="font-semibold mb-1">Uy tín hàng đầu</h4>
                        <p class="text-gray-600 text-sm">
                            Minh bạch pháp lý – hỗ trợ từ A đến Z.
                        </p>
                    </div>
                    <div
                        class="bg-white p-6 shadow-md rounded-xl text-center border"
                    >
                        <i
                            class="i-lucide-users text-4xl text-blue-500 mb-2"
                        ></i>
                        <h4 class="font-semibold mb-1">Tư vấn tận tâm</h4>
                        <p class="text-gray-600 text-sm">
                            Đội ngũ am hiểu thị trường, hỗ trợ chu đáo.
                        </p>
                    </div>
                    <div
                        class="bg-white p-6 shadow-md rounded-xl text-center border"
                    >
                        <i
                            class="i-lucide-map-pin text-4xl text-blue-500 mb-2"
                        ></i>
                        <h4 class="font-semibold mb-1">Sản phẩm phong phú</h4>
                        <p class="text-gray-600 text-sm">
                            Đa dạng đất vườn, thổ cư, chính chủ tại Phú Giáo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
const base = useRuntimeConfig().app.baseURL;
const imageUrl = `${base}images/1.png`;
</script>
