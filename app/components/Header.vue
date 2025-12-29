<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div
            class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
        >
            <!-- Logo -->
            <NuxtLink
                to="/"
                class="text-2xl font-bold text-blue-500 flex items-center space-x-2"
            >
                <img
                    src="/images/og-image.png"
                    alt="Logo"
                    class="h-10 inline"
                />
                <span class="hidden md:block">trodayroi.vn</span>
            </NuxtLink>

            <!-- Hamburger Icon for Mobile -->
            <div class="md:flex items-center space-x-4">
                <!-- Đăng tin miễn phí button -->
                <button
                    class="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 active:scale-95 transition"
                    @click="setAvailable"
                >
                    Còn phòng
                </button>
                <button
                    class="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 active:scale-95 transition"
                    @click="setHidden"
                >
                    Hết phòng
                </button>
            </div>
        </div>

        <!-- Toast -->
        <transition name="fade">
            <div
                v-if="toast.show"
                :class="[
                    'fixed top-20 right-5 px-4 py-3 rounded-lg shadow-lg z-50 text-white',
                    toast.type === 'success' ? 'bg-green-600' : 'bg-gray-700',
                ]"
            >
                {{ toast.message }}
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";

const toast = reactive({
    show: false,
    message: "",
    type: "success", // success | hidden
});

const showToast = (message, type = "success") => {
    toast.message = message;
    toast.type = type;
    toast.show = true;

    setTimeout(() => {
        toast.show = false;
    }, 2500);
};

const setAvailable = () => {
    showToast("🎉 Phòng của bạn đã đăng lại thành công", "success");
};

const setHidden = () => {
    showToast("⏸️ Phòng của bạn đã tạm ẩn trên hệ thống", "hidden");
};
</script>
