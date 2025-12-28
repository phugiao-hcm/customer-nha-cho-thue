<template>
    <div>
        <HeroSection />
        <PostListSection />
        <FeaturedSlider class="hidden" />
    </div>
</template>

<script setup>
import HeroSection from "../components/home/HeroSection.vue";
import PostListSection from "../components/home/PostListSection.vue";
import FeaturedSlider from "../components/home/FeaturedSlider.vue";
</script>
