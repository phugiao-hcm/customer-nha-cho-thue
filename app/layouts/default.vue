<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
        <Header class="md:block" />
        <main class="flex-grow pb-16 md:pb-0">
            <slot />
        </main>
        <!-- Footer: chỉ hiện desktop -->
        <Footer class="md:block" />

        <!-- Gọi điện liên hệ -->
        <Social />
    </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Social from "~/components/Social.vue";
</script>
