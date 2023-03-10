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

  <nav class="flex justify-end items-center">
    <ul class="flex">
      <li class="mr-10"> 
        <router-link to="/APropos">
          <h3>
            A PROPOS
          </h3>
        </router-link>
      </li>
      <li class="mr-10"> 
        <router-link to="/Design">
          <h3>
            Design
          </h3>
        </router-link>
      </li>
      <li class="mr-10"> 
        <router-link to="/Developpement">
          <h3>
            Développement
          </h3>
        </router-link>
      </li>
    </ul>
  </nav>

</header>


<main class="bg-whiteb">
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