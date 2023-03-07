<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>

<header class="bg-whiteb p-3">
<img src="/public/logo/logo_noir.svg" class="w-20 h-auto" alt="">
</header>

<main>
  <RouterView />
</main>

<footer>
  
</footer>
</template>


<script>
export default {
  data() {
    return {
      isDark: true,
    };
  },
  components: {
    
  },
};
</script>