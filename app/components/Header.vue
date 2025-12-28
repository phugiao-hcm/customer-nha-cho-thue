<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div
            class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
        >
            <!-- Logo -->
            <NuxtLink
                to="/"
                @click="onClickHomeLogo"
                class="text-2xl font-bold text-blue-500"
            >
                <img
                    src="/images/og-image.png"
                    alt="Logo"
                    class="h-10 inline"
                />
                trodayroi.vn
            </NuxtLink>

            <!-- Desktop Navigation + Button -->
            <div class="hidden md:flex items-center space-x-4">
                <!-- Đăng tin miễn phí button -->
                <NuxtLink
                    to="/about"
                    @click="onClickPostFree"
                    class="ml-4 bg-white hover:bg-blue-100 border text-blue-600 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                    Đăng tin miễn phí
                </NuxtLink>
            </div>

            <!-- Hamburger Icon for Mobile -->
            <button
                @click="isOpen = !isOpen"
                class="md:hidden text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
            >
                <svg
                    v-if="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2 text-gray-700">
            <NuxtLink
                to="/"
                @click="onClickHome"
                class="block hover:text-blue-600 transition-colors"
                >Trang chủ</NuxtLink
            >
            <NuxtLink
                to="/posts"
                @click="onClickPosts"
                class="block hover:text-blue-600 transition-colors"
                >Phòng trọ</NuxtLink
            >
            <NuxtLink
                to="/news"
                @click="onClickNews"
                class="block hover:text-blue-600 transition-colors"
                >Tin tức</NuxtLink
            >
            <NuxtLink
                to="/about"
                @click="onClickAboutUs"
                class="block hover:text-blue-600 transition-colors"
                >Về chúng tôi</NuxtLink
            >

            <!-- Mobile Đăng tin miễn phí button -->
            <NuxtLink
                to="/about"
                @click="onClickPostFree"
                class="block mt-2 bg-white hover:bg-blue-100 border text-blue-600 font-semibold py-2 px-4 rounded-lg text-center transition-colors"
            >
                Đăng tin miễn phí
            </NuxtLink>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
const { $amplitude } = useNuxtApp();

const isOpen = ref(false);

const onClickPostFree = () => {
    isOpen.value = false;
    $amplitude.track("button_header_clicked_post_free", {
        label: "(Header) - Liên hệ - Đăng tin miễn phí",
    });
    window.open(
        "https://phugiao-hcm.github.io/admin-dang-tin-thue-tro-x1/post/create",
        "_blank"
    );
};

const onClickNews = () => {
    isOpen.value = false;
    $amplitude.track("button_header_clicked_news", {
        label: "(Header) - Tin tức",
    });
};
const onClickAboutUs = () => {
    isOpen.value = false;
    $amplitude.track("button_header_clicked_about_us", {
        label: "(Header) - Về chúng tôi",
    });
};
const onClickPosts = () => {
    isOpen.value = false;
    $amplitude.track("button_header_clicked_post", {
        label: "(Header) - Phòng trọ",
    });
};

const onClickHome = () => {
    isOpen.value = false;
    $amplitude.track("button_header_clicked_home", {
        label: "(Header) - Trang chủ",
    });
};

const onClickHomeLogo = () => {
    isOpen.value = false;
    $amplitude.track("button_header_clicked_home_logo", {
        label: "(Header) - Trang chủ (Logo)",
    });
};
</script>
