<script setup>
import Filtre from '@/components/Filtre.vue';
</script>
    
<template>
    <div>
        <h2 class="">Filtre</h2>
        <div>
            <p class="pt-4 pb-2">
                Ce filtre va donc servir à rechercher un musée avec son nom, <br>
                le nom qui à potentiellement été trouver précédement avec la carte des musées.
            </p>
            <p class="pb-8">
                Et donc par la suite l'utilisateur va pouvoir savoir quelle est l'adresse du musée <br>
                et si ce musée fait partie de quel département et donc s'il y a beaucoup de musées en plus de lui.
            </p>

        </div>
        <div class="container w-3/4 ">
            <Filtre></Filtre>
        </div>
    </div>
</template>