<script setup>
import MoisFestivals from '@/components/MoisFestivals.vue';
</script>
    
<template>
    <div>
        <h2 class="">Nombre de festivals en Bourgogne-Franche-Comté par mois</h2>
        <p class="pt-4 pb-2">
            Ce graphique représente le nombres de festivals qui sont organisés tout les mois en Bourgogne-Franche-Comté.
        </p>
        <p class="pb-2">
            Grâce à ce graphique les utilisateurs pourrons voir s'il y a beaucoup de festivals <br>
            ou non le mois ou ils ont potentiellement des vacances, week-end...
        </p>
        <div class="pb-8">
            <p>
                Ce graphique à été choisit pour la simplicité à le lire. <br>
                Il nous montre correctement et simplement le nombre de festivals par mois en BFC.
            </p>
        </div>
        <div class="container w-3/4 ">
            <MoisFestivals></MoisFestivals>
        </div>
    </div>
</template>