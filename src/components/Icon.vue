<script setup>
defineProps({
    src: String,
    alt: String,
});
</script>

<template>
    <div
        class="rounded-sm h-20 mr-10 w-20 flex justify-center items-center transition group hover:bg-clearbeige hover:bg-opacity-25"
    >
        <img
            :src="src"
            :alt="alt"
            class="w-auto h-full transition transform group-hover:scale-75"
        />
    </div>
</template>
