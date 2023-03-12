<script setup>
import { RouterLink, RouterView } from "vue-router";

import Facebook from "@/components/Icons/IconFacebook.vue"
import Instagram from "@/components/Icons/IconInstagram.vue"
import Youtube from "@/components/Icons/IconYoutube.vue"
import Pinterest from "@/components/Icons/IconPinterest.vue"


</script>


<template>
  <header class="bg-MainGreen text-white px-10 py-1 flex items-center">
    <div class="">
      <RouterLink class="dropdown-item text-lg bg-transparent text-white" to="/">
        <h1 class="text-lg">
          SAE-303
        </h1>
      </RouterLink>
    </div>

    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark justify-between">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">              
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/Explications">Explications</RouterLink>
                </li>

                <li class="nav-item">
                    <RouterLink class="nav-link" to="/Filtre">Filtre</RouterLink>
                </li>

                <li class="nav-item dropdown mr-0">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown01" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Cartes OSM
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdown01">
                    <RouterLink class="dropdown-item" to="/MapFestivals">Map Festivals</RouterLink>
                    <RouterLink class="dropdown-item" to="/MapMusees">Map Musées</RouterLink>
                    <RouterLink class="dropdown-item" to="/MapCinema">Map Cinema</RouterLink>
                  </div>
                </li>


                    
                <li class="nav-item dropdown mr-0">                            
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Graphiques
                    </a>
                      <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <RouterLink class="dropdown-item" to="MoisFestivals">Mois Festivals</RouterLink>
                        <RouterLink class="dropdown-item" to="ThemeFest">Thêmes Festivals</RouterLink>
                        <RouterLink class="dropdown-item" to="FreqMusees">Fréquentation Musées</RouterLink>
                        <RouterLink class="dropdown-item" to="NbrDep">Nombre musées par département</RouterLink>
                    </div>
                </li>
            </ul >
        </div>
      </nav>
    </div>

  </header>

  <main class="p-10">
      <RouterView />
  </main>

  <footer class="bg-MainGreen text-white mt-10 py-10">
  <section>
    <div class="flex justify-center">
      <RouterLink to="/" class="flex h-full items-center">
      <h1 class="text-lg">
        SAE-303
      </h1>
      </RouterLink>
    </div>

  <div class="grid grid-cols-2 mt-8 mx-48">
    <div>
      <h3>
        A PROPOS
      </h3>
      <h3>
        Mentions légales
      </h3>
      <h3>
        Conditions d’utilisation
      </h3>
      <h3>
        Politique de confidentialité
      </h3>
      <h3>
        Cookies
      </h3>
    </div>

    <div class="mx-48">
      <h3>
        SERVICE CLIENT
      </h3>
      <h3>
        Nous contacter
      </h3>
      <h3>
        Service retour
      </h3>
      <h3>
        Information sur la taille
      </h3>
      <h3>
        Bon d’achat
      </h3>
    </div>

  </div>

    </section>
</footer>
</template>
