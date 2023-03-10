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

<footer class=" p-14">
  <div class="flex justify-center">
    <router-link to="/">
      <img src="/public/logo/logo_noir.svg" class="w-20 h-auto" alt="">
    </router-link>
  </div>

  <div class="flex mt-2 sm:mt-5 items-center justify-center">
      <a href="https://github.com/menegain-rose">
          <img src="/public/Icons/Github.svg" class="w-8 mr-5 " alt="">
      </a>
      <a href="https://www.instagram.com/eiku_s/">
          <img src="/public/Icons/Instagram.svg" class="w-8 mr-5" alt="">
      </a>
      <a href="https://www.linkedin.com/in/rose-menegain/">
          <img src="/public/Icons/Linkedin.svg" class="w-8 mr-5" alt="">
      </a>
  </div>

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