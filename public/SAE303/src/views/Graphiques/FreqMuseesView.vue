<script setup>
import FreqMusees from '@/components/FreqMusees.vue';
</script>
    
<template>
    <div>
        <h2 class="">Fréquentation par année des musées de Bourgogne-Franche-Comté</h2>
        <p class="pt-4 pb-2">
            Ce graphique nous montre si les musées en Bourgogne-Franche-Comté sont beaucoup fréquenté en fonction des années.
        </p>
        <p class="pb-2">
            Avec ce graphique les utilisateurs pourrons voir si quand ils vont vouloir visiter un musée <br> 
            il y aura beaucoup de visiteurs avec eux ou non. <br>
            De plus ils peuvent remarquer qu'avec les années maintenant il y a une hausse de visiteurs <br> 
            et donc s'ils attendent l'année d'après pour faire ce qu'ils veulent ce sera peut être moins agréable, <br>
            puisque s'il y a plus de visiteur, l'attente sera plus longue et la visite moins tranquille.
        </p>
        <p class="pb-8">
            Avec ce graphique, nous pouvons suivre l'évolution des Fréquentation, <br>
            avec un graphique qui reste simple et rapide à comprendre.
        </p>
        <div class="container w-3/4 ">
            <FreqMusees></FreqMusees>
        </div>
    </div>
</template>