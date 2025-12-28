<template>
    <nav
        class="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md bg-white/90 backdrop-blur rounded-2xl shadow-2xl border border-gray-100"
    >
        <ul ref="tabContainer" class="relative flex items-center px-2 h-16">
            <!-- Indicator -->
            <span class="indicator" :style="indicatorStyle"></span>

            <!-- Trang chủ -->
            <li class="flex-1 z-10">
                <NuxtLink
                    ref="tabRefs"
                    to="/"
                    class="tab-item"
                    :class="{ active: isActive('/') }"
                >
                    <Icon name="mdi:home-variant" size="22" />
                    <span>Trang chủ</span>
                </NuxtLink>
            </li>

            <!-- Tìm trọ -->
            <li class="flex-1 z-10">
                <NuxtLink
                    ref="tabRefs"
                    to="/posts"
                    class="tab-item"
                    :class="{ active: isActive('/posts') }"
                >
                    <Icon name="mdi:magnify" size="22" />
                    <span>Tìm trọ</span>
                </NuxtLink>
            </li>

            <!-- CTA GIỮA -->
            <li class="relative -mt-8 flex-1 flex justify-center z-20">
                <NuxtLink to="/" class="cta-btn">
                    <img
                        src="/images/og-image.png"
                        alt="Logo"
                        class="w-8 h-8 object-contain"
                    />
                </NuxtLink>
            </li>

            <!-- Tin tức -->
            <li class="flex-1 z-10">
                <NuxtLink
                    ref="tabRefs"
                    to="/news"
                    class="tab-item"
                    :class="{ active: isActive('/news') }"
                >
                    <Icon name="mdi:newspaper-variant-outline" size="22" />
                    <span>Tin tức</span>
                </NuxtLink>
            </li>

            <!-- Liên hệ -->
            <li class="flex-1 z-10">
                <NuxtLink
                    ref="tabRefs"
                    to="/about"
                    class="tab-item"
                    :class="{ active: isActive('/about') }"
                >
                    <Icon name="mdi:phone-outline" size="22" />
                    <span>Liên hệ</span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/**
 * Chỉ các TAB THẬT (KHÔNG BAO GỒM CTA)
 */
const tabs = ["/", "/posts", "/news", "/about"];

const tabRefs = ref([]);
const indicatorStyle = ref({
    left: "0px",
    width: "0px",
});

const isActive = (path) => route.path === path;

const updateIndicator = async () => {
    await nextTick();
    const index = tabs.indexOf(route.path);
    const el = tabRefs.value[index];

    if (el) {
        indicatorStyle.value = {
            left: el.offsetLeft + "px",
            width: el.offsetWidth + "px",
        };
    }
};

watch(() => route.path, updateIndicator);
onMounted(updateIndicator);
</script>

<style scoped>
/* TAB ITEM */
.tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #6b7280;
    transition: all 0.25s ease;
}

.tab-item span {
    margin-top: 4px;
}

.tab-item.active {
    color: #3b82f6; /* blue-500 */
    font-weight: 500;
}

.tab-item.active svg {
    transform: translateY(-2px) scale(1.05);
}

/* INDICATOR */
.indicator {
    position: absolute;
    bottom: 8px;
    height: 32px;
    background: #e7ecfc;
    border-radius: 14px;
    transition: all 0.3s ease;
    z-index: 0;
}

/* CTA BUTTON */
.cta-btn {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid white;
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.35);
    transition: transform 0.15s ease;
}

.cta-btn:active {
    transform: scale(0.95);
}
</style>
