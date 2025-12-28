<template>
    <NuxtLink
        :to="isAvailableRooms ? `/phong-tro/${setSlug}-${property.id}` : ''"
        @click="isAvailableRooms && onClickViewPostDetail()"
        class="relative rounded shadow transition cursor-pointer"
        :class="
            isAvailableRooms
                ? 'hover:shadow-lg bg-white'
                : 'bg-gray-100 opacity-70 cursor-not-allowed pointer-events-none'
        "
    >
        <!-- Ảnh -->
        <img
            :src="property.thumbnail || '/images/og-image.png'"
            alt="property"
            class="w-full h-52 sm:h-56 object-cover rounded-t"
        />

        <!-- Badge -->
        <span
            class="absolute top-2 left-2 text-white text-xs font-semibold px-2 py-1 rounded"
            :class="isAvailableRooms ? 'bg-green-600' : 'bg-red-600'"
        >
            {{ isAvailableRooms ? `Còn phòng` : "Hết phòng" }}
        </span>

        <!-- Nội dung -->
        <div class="p-4">
            <h3 class="text-lg font-semibold mb-3">
                {{ property.title }}
            </h3>

            <!-- Địa chỉ -->
            <div class="flex mb-2 gap-1 items-center">
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
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>
                </p>
                <p
                    class="text-sm text-gray-800 truncate overflow-hidden whitespace-nowrap"
                >
                    {{ property.houseNo }}
                </p>
            </div>

            <!-- Diện tích -->
            <div class="flex items-center gap-1 mb-1">
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

            <!-- Giá + còn phòng -->
            <div class="flex items-center justify-between gap-1 mt-4">
                <div class="flex items-center gap-1">
                    <p class="text-orange-600 font-bold text-lg">
                        {{ formatPriceVND(property.price) }}
                    </p>
                </div>

                <!-- chỉ hiển thị khi còn phòng -->
                <div
                    v-if="isAvailableRooms"
                    class="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded"
                >
                    <p class="text-xs text-gray-500">Chỉ còn 1 phòng</p>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>


<script setup lang="ts">
import { formatPriceVND, slugify } from "~/utils/format";
import { DIRECTION_ROOM } from "~/utils/const";
const { $amplitude } = useNuxtApp();
import { computed } from "vue";

const props = defineProps({
    property: {
        type: Object,
        required: true,
    },
});

const onClickViewPostDetail = () => {
    $amplitude.track("button_clicked_view_post_detail", {
        label: "(Home) - Chọn Xem chi tiết phòng",
    });
};

// const isAvailableRooms = computed(() => props.property.numORoomAvailable);
const isAvailableRooms = computed(() => true);
const setSlug = computed(() => slugify(props.property.title));
</script>
