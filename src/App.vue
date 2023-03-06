<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>

<header>

</header>

<main>
  <RouterView />
</main>

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