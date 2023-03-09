<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>

<header class="bg-whiteb p-3 flex justify-between">
  <div>
    <router-link to="/">
      <img src="/public/logo/logo_noir.svg" class="w-20 h-auto" alt="">
    </router-link>
  </div>


<nav>
  <ul class="flex">
    <li class=""> 
      <router-link to="/APropos">
        <h3>
          A PROPOS
        </h3>
      </router-link>
    </li>
  </ul>
</nav>


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