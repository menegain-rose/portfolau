<script setup>
defineProps({
    href: {
        type: String,
        default: '',
    },
});
</script>
<template>
    <button
        class="bg-mediumgreen hover:bg-darkgreen font-raleway font-normal text-whiteb text-lg py-2 px-10 rounded-xs"
    >
        <a :href="href" v-if="href !== ''">
            <slot />
        </a>
        <slot v-else />
    </button>
</template>