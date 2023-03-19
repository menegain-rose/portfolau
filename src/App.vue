<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "@/components/Icons/menu.vue";
import { ref } from "vue";
</script>

<template>

<header class="bg-whiteb p-3 flex justify-between">
  <div>
    <router-link to="/">
      <img src="/public/logo/logo_noir.svg" class="w-20 h-auto" alt="Logo Rose MENEGAIN">
    </router-link>
  </div>

  <div>
    <button
      @click="openMenu = !openMenu" 
      class="bg-whiteb fixed bottom-8 right-8 flex h-[50px] w-[50px] flex-col items-center justify-center gap-2 rounded-full bg-primary-200 shadow-card lg:hidden z-50"
      >
      <span
          class="block h-[2px] w-1/2 bg-blackgreen transition-transform"
          :class="{
              'translate-y-2.5 rotate-45': openMenu,
          }"
      ></span>
      <span class="block h-[2px] w-1/2 bg-blackgreen transition-opacity" :class="{ 'opacity-0': openMenu }"></span>
      <span
          class="block h-[2px] w-1/2 bg-blackgreen transition-transform"
          :class="{
              '-translate-y-2.5 -rotate-45': openMenu,
          }"
      ></span>
    </button>

    
      <nav class="fixed top-0 left-0 bg-whiteb h-full w-full justify-center lg:justify-end items-center z-40  lg:relative"
          :class="{
              'flex': openMenu,
              'hidden lg:flex': !openMenu,
          }">
        <ul class="flex flex-col lg:flex-row text-center gap-5 lg:gap-0">
          <li class="mr-10"> 
            <router-link @click="openMenu=false" to="/APropos">
              <h3>
                A PROPOS
              </h3>
            </router-link>
          </li>
          <li class="mr-10"> 
            <router-link @click="openMenu=false" to="/Design">
              <h3>
                Design
              </h3>
            </router-link>
          </li>
          <li class="mr-10"> 
            <router-link @click="openMenu=false" to="/Developpement">
              <h3>
                Développement
              </h3>
            </router-link>
          </li>
        </ul>
      </nav>

    </div>



</header>


<main class="bg-whiteb">
  <RouterView />
</main>

<footer class=" p-14">
  <div class="flex justify-center">
    <router-link to="/">
      <img src="/public/logo/logo_noir.svg" class="w-20 h-auto" alt="Logo Rose MENEGAIN">
    </router-link>
  </div>

  <div class="flex mt-2 sm:mt-5 items-center justify-center">
      <a href="https://github.com/menegain-rose">
          <img src="/public/Icons/Github.svg" class="w-8 mr-5 hover:bg-clearbrown hover:bg-opacity-30 hover:rounded-sm hover:p-1 " alt="Logo GitHub">
      </a>
      <a href="https://www.instagram.com/eiku_s/">
          <img src="/public/Icons/Instagram.svg" class="w-8 mr-5 hover:bg-clearbrown hover:bg-opacity-30 hover:rounded-sm hover:p-1" alt="Logo Instagram">
      </a>
      <a href="https://www.linkedin.com/in/rose-menegain/">
          <img src="/public/Icons/Linkedin.svg" class="w-8 mr-5 hover:bg-clearbrown hover:bg-opacity-30 hover:rounded-sm hover:p-1" alt="Logo Linkedin">
      </a>
  </div>

</footer>


</template>


<script>
  const openMenu = ref(false);
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