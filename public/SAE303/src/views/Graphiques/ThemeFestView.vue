<script setup>
import ThemeFest from '@/components/ThemeFest.vue';
</script>
    
<template>
    <div>
        <h2 class="">Thêmes festivals</h2>
        <div>
            <p class="pt-4 pb-2">
                Ce graphique représente les genres de festivals qui sont les plus ou moins organisés en Bourgogne-Franche-Comté.
            </p>
            <p class="pb-2">
                Avec ce graphique les utilisateurs pourrons voir si des festivals en lien avec ce qu'ils aiment <br> 
                ou leurs passions sont plus ou moins récurent dans la région. <br>
            </p>
            <p class="pb-2">
                Ce qui fait qu'ils pourrons rapidement savoir si leurs recherches vont être longues, <br>
                ou s'ils vont devoir chercher dans une autre région.
            </p>
                <p class="pb-8">
                    Ce graphique est très simple à lire, <br>
                    et l'utilisateur comprend directement les données qu'il cherche sans réflexion derrière.
                </p>
            <div class="container w-3/4 ">
                <MoisFestivals></MoisFestivals>
            </div>
        </div>
        <ThemeFest></ThemeFest>
    </div>
</template>