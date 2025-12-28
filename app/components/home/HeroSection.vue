<template>
    <section
        class="relative h-[40vh] flex items-center justify-center text-white bg-cover bg-center"
        :style="{ backgroundImage: 'url(images/hero.png)' }"
    >
        <!-- Overlay tối -->
        <div class="absolute inset-0 bg-black/50"></div>

        <!-- Nội dung chính -->
        <div class="relative z-10 text-center px-4 max-w-3xl">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">
                Tìm Phòng Phù Hợp Của Bạn
            </h1>
            <p class="text-lg md:text-xl mb-6">
                Khám phá những căn phòng đầy đủ tiện nghi.
            </p>
            <NuxtLink
                to="/posts"
                @click="onClickViewRoom"
                class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
                Xem Phòng
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
const { $amplitude } = useNuxtApp();

const onClickViewRoom = () => {
    isOpen.value = false;
    $amplitude.track("button_hero_section_clicked_view_room", {
        label: "(HeroSection) - Xem phòng",
    });
};
</script>
