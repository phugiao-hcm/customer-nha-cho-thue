<template>
    <div
        v-if="!ui.isLoading && property"
        class="max-w-6xl mx-auto mt-6 px-4 md:px-0 grid gap-4 sm:grid-cols-1 md:grid-cols-3"
    >
        <!-- Bên trái: Hình ảnh và thông tin -->
        <div class="md:col-span-2 space-y-4">
            <div class="w-full mx-auto overflow-hidden grid grid-cols-1 gap-4">
                <!-- Main Swiper -->
                <swiper
                    class="w-full rounded-lg overflow-hidden"
                    :space-between="10"
                    :loop="true"
                    :navigation="true"
                    :pagination="{ clickable: true }"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :modules="modules"
                    :breakpoints="{
                        0: { slidesPerView: 1, spaceBetween: 0 },
                        640: { slidesPerView: 1, spaceBetween: 5 },
                        768: { slidesPerView: 1, spaceBetween: 8 },
                        1024: { slidesPerView: 1, spaceBetween: 10 },
                    }"
                >
                    <swiper-slide
                        v-for="(img, i) in property.photos"
                        :key="i"
                        class="box-border"
                    >
                        <img
                            :src="img"
                            class="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-scale-down"
                            @click="showLightbox(i)"
                        />
                    </swiper-slide>
                </swiper>

                <!-- Thumbnails -->
                <swiper
                    @swiper="setThumbsSwiper"
                    :loop="true"
                    :space-between="10"
                    :slides-per-view="4.5"
                    :freeMode="true"
                    :watchSlidesProgress="true"
                    :modules="modules"
                    class="w-full"
                >
                    <swiper-slide
                        v-for="(img, i) in property.photos"
                        :key="'thumb-' + i"
                    >
                        <img
                            :src="img"
                            class="w-full h-16 sm:h-20 object-cover rounded cursor-pointer"
                        />
                    </swiper-slide>
                </swiper>

                <!-- Lightbox popup -->
                <VueEasyLightbox
                    :visible="visible"
                    :imgs="property.photos.map((x) => x)"
                    :index="currentIndex"
                    @hide="visible = false"
                    :moveDisabled="true"
                />
            </div>

            <!-- Tiêu đề -->
            <h1
                class="text-xl sm:text-lg md:text-xl font-bold text-gray-800 mt-2"
            >
                {{ property.title }}
            </h1>

            <!-- Giá + diện tích -->
            <div class="flex flex-wrap items-center gap-3 mt-2">
                <p class="text-red-600 text-2xl sm:text-xl font-semibold">
                    {{ formatPriceVND(property.price) }} /tháng
                </p>

                <div class="flex items-center gap-1">
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-4 w-4 h-4 text-gray-500 mr-1"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                            />
                        </svg>
                    </p>
                    <p class="text-sm text-gray-600">
                        {{ property.square }}m²
                        <!-- <span v-if="property.viewRoom">
                            ·
                            {{ SET_TEXT_DIRECTION_ROOM(property.viewRoom) }}
                        </span> -->
                    </p>
                </div>
            </div>

            <div class="mb-1 flex flex-wrap">
                <span class="text-sm text-gray-600 mr-2"
                    >Tiện ích xung quanh:</span
                >
                <span
                    v-for="(label, index) in facilityTexts(property.facility)"
                    :key="index"
                    class="bg-blue-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm mb-1"
                    >{{ label }}</span
                >
            </div>

            <!-- Địa chỉ -->
            <div
                class="flex items-center text-gray-600 mt-2 text-sm sm:text-xs md:text-sm"
            >
                <P>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-4 w-4 h-4 text-gray-500 mr-1"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>
                </P>
                <p class="text-sm text-gray-800">
                    {{ property.houseNo }}
                </p>
            </div>

            <!-- MÔ TẢ CHI TIẾT -->
            <div class="bg-white rounded-lg shadow p-4 mt-4 md:mt-6">
                <h2 class="font-bold text-lg mb-3">Mô tả chi tiết</h2>
                <div
                    class="text-gray-700 whitespace-pre-line leading-relaxed"
                    v-html="property.content"
                />
                <div
                    v-if="property.authorMobile"
                    class="mt-4 flex flex-wrap items-center gap-2"
                >
                    <span class="font-semibold">SĐT Liên hệ:</span>
                    <span
                        class="bg-gray-100 px-3 py-1 rounded-lg text-gray-700"
                    >
                        {{ maskedPhone }}
                    </span>
                    <button
                        class="text-blue-600 font-semibold"
                        @click="showPhone = true"
                    >
                        Hiện SĐT
                    </button>
                </div>
            </div>

            <!-- Section Google Maps -->
            <div class="w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <iframe
                    :src="`https://www.google.com/maps?q=${property.latitude},${property.longitude}&hl=vi&z=15&output=embed`"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>

        <!-- Bên phải: Liên hệ -->
        <div class="md:col-span-1">
            <div
                class="bg-white rounded-lg shadow p-4 md:sticky md:top-20 space-y-3 hidden"
            >
                <!-- Liên hệ -->
                <div class="flex items-center gap-3 mb-3">
                    <img
                        src="https://placehold.co/60x60"
                        alt="avatar"
                        class="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h3 class="font-semibold text-sm sm:text-xs md:text-sm">
                            Căn hộ dịch vụ Cao Cấp (Đang câp nhạt)
                        </h3>
                        <p class="text-sm text-gray-500">Môi giới</p>
                    </div>
                </div>

                <button
                    class="w-full bg-orange-500 text-white py-2 rounded-lg mb-2 hover:bg-orange-600 text-sm sm:text-xs md:text-sm"
                >
                    Chat ngay
                </button>
                <button
                    class="w-full border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50 text-sm sm:text-xs md:text-sm"
                >
                    Gọi: 093770xxxx
                </button>
            </div>
        </div>
    </div>

    <News class="hidden" />
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { usePhongTroDetail } from "~/apis/posts";
import VueEasyLightbox from "vue-easy-lightbox";
const { $amplitude } = useNuxtApp();

import { useRoute } from "vue-router";
const route = useRoute();

definePageMeta({
    alias: ["/phong-tro/:slug"], // URL phụ
});

useHead({
    link: [
        {
            rel: "canonical",
            href: "https://trodayroi.vn/phong-tro/" + route.params.slug,
        },
    ],
});

const ui = reactive({
    isLoading: false,
});

// modules Swiper
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Swiper thumbs sync
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];

// Lightbox state
const visible = ref(false);
const currentIndex = ref(0);

const showLightbox = (index) => {
    currentIndex.value = index;
    visible.value = true;
};

// dữ liệu mẫu
const property = ref(null);

// ẩn hiện số điện thoại
const showPhone = ref(false);
const maskedPhone = computed(() =>
    showPhone.value ? property.value.authorMobile : "**** *** ***"
);

// slug = "nha-tro-tan-thanh-123"
const slug = route.params.slug;
// Tách ID (sau dấu "-" cuối cùng)
const id = 41242;

onMounted(() => {
    $amplitude.track("view_room_detail", {
        label: "Xem chi tiết phòng",
    });

    fetchProjects();
});

const fetchProjects = async () => {
    try {
        ui.isLoading = true;
        const { data, pending, error } = await usePhongTroDetail(id);
        property.value = data.value.data;
    } catch (e) {
        console.error(e);
    } finally {
        ui.isLoading = false;
    }
};

const facilityTexts = (facilities) => {
    return SET_TEXT_FACILITY_ROOM.filter((item) =>
        facilities.includes(item.value)
    ).map((item) => item.label);
};

// const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${property.latitude},${property.longitude}`;
</script>

<style>
/* Highlight thumbnail active */
.swiper-slide-thumb-active img {
    border: 2px solid #f97316; /* Tailwind orange-500 */
}
</style>