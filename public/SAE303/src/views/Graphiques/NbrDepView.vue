<script setup>
import NbrDep from '@/components/NbrDep.vue';
</script>
    
<template>
    <div>
        <h2 class="">Nombre de musées par départements</h2>
        <p class="pt-4 pb-2">
            Ce graphique nous représente le nombre de musées par département en Bourgogne-Franche-Comté.
        </p>
        <p class="pb-2">
            Avec ce graphique les utilisateurs pourrons savoir s'il y a beaucoup de musées dans leurs département, <br> 
            et donc ils pourrons se renseigner si la recherche de musées va être longue ou non, <br>
            de plus, ils peuvent approfondir leurs recherches par la suite avec la carte <br>
        </p>
        <p class="pb-8">
            Ce graphique est simple à comprendre tout comme le graphique à barres<br>
        </p>
        <div class="container w-3/4 ">
            <NbrDep></NbrDep>
        </div>
    </div>
</template>
