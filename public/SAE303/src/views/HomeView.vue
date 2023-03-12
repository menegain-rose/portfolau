<script setup>
import bouton from "@/components/bouton.vue"
import MapFestivals from '@/components/MapFestivals.vue';
import MapMusees from '@/components/MapMusees.vue';

</script>

<template>
    <div class="mb-16 text-MainGreen">
        <div>
            <h2 class="flex justify-center">
                 Bienvenue !
            </h2>
            <h3 class="flex justify-center">
                Cette application est dédié à une SAE d'étudiant MMI en 2ème année.
            </h3>

        </div>
    </div>

    <div class="">
        <p class="text-center mb-4">
            Recherchez un festival ou un musée directement sur la carte de Bourgogne-Franche-Comté !
        </p>
        <div class="grid grid-cols-2 gap-14 mb-20">
            <RouterLink class="dropdown-item text-lg bg-transparent text-white" to="/MapMusees">
                <MapMusees></MapMusees>
                <div class="text-center mt-4">
                    <bouton>Découvrir</bouton>
                </div>
            </RouterLink>
            <RouterLink class="dropdown-item text-lg bg-transparent text-white" to="/MapFestivals">
                <img class="h-[590px]" src="/public/images/Cartefestival.png" alt="">
                <div class="text-center mt-4">
                    <bouton>Découvrir</bouton>
                </div>
            </RouterLink>
        </div>

    </div>


    <div class="grid grid-cols-2 gap-14 mb-14 items-center">
        <img src="public/images/Festivals.jpg" alt="">
        <div>
            <h3 class="pb-3">
                Nos festivals
            </h3>
            <p>
                Sur ce site vous allez pouvoir rechercher les festivals en Bourgogne-Franche-Comté <br> <br>
                Et nous mettons également en place deux graphiques vous montrant les genres de festivals les plus fais dans notre région, <br>
                et le deuxième qui est le nombre de festivals organiser par mois de l'année.
            </p>
            <div class="text-center mt-4">
                <RouterLink class="dropdown-item text-lg bg-transparent text-white" to="/ThemeFest">
                    <div class="text-center mt-4">
                        <bouton>Découvrir</bouton>
                    </div>
                </RouterLink>
            </div>
        </div>    
    </div>

    <div class="grid grid-cols-2 gap-14 items-center">
        <div>
            <h3 class="pb-3">
                Nos musées
            </h3>
            <p>
                Sur ce site vous allez également pouvoir rechercher les musées en Bourgogne-Franche-Comté <br> <br>
                Et nous mettons aussi en place deux graphiques vous montrant la fréquence des musées par année, <br>
                et le deuxième qui est le nombre de musées par département.
            </p>
            <RouterLink class="dropdown-item text-lg bg-transparent text-white" to="/FreqMusees">
                <div class="text-center mt-4">
                    <bouton>Découvrir</bouton>
                </div>
            </RouterLink>
        </div>
        <img src="public/images/Musees.jpg" alt="">
        
    </div>

    

</template>
