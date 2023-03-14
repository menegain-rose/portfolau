<script setup>
import Bouton from "@/components/bouton.vue"

</script>

<template>

    <section class="pt-8 sm:pt-20 overflow-hidden">
        <div class="flex justify-between">
            <h2 class="px-4 sm:px-20 text-center sm:text-left">Développement</h2>
            <img src="/public/images/Design/PlantesTombantesLongues.svg" class="rotate-90 w-[200px] -my-[1200px] hidden sm:block" alt="Dessin Plantes Tombantes">
        </div>
        <div>
            <h3 class="my-6 sm:my-10 px-4 sm:px-20 py-2 sm:py-4 text-center sm:text-left bg-cleargreen">
                OpenStreetMap & Utilisations d'API
            </h3>
            <div class="sm:grid sm:grid-cols-2">
                <div class="px-4 sm:px-20">
                    <div class="flex justify-center items-center flex-col mt-6 sm:mt-10">
                        <a href="https://github.com/menegain-rose/303/archive/refs/heads/main.zip">
                            <img src="/public/images/Développement/Openstreetmap.png" class="h-auto w-2/3 sm:w-auto" alt="Interface Openstreetmap">
                        </a>
                    </div>
                    <div class="flex justify-center items-center flex-col mt-6 sm:mt-10">
                        <img src="/public/images/Développement/Graph.png" class="h-auto w-2/3 sm:w-auto " alt="Visuel sur un graphique">
                    </div>
                    <div class="text-center mt-6 sm:mt-10">
                        <Bouton class="my-4 sm:my-10">
                            <a href="https://github.com/menegain-rose/303/archive/refs/heads/main.zip">
                            Télécharger
                            </a>
                        </Bouton>
                        </div>
                </div>
                    <div class="bg-clearbeige p-20">
                        <h4 class="mb-5">
                            SAE303
                        </h4>
                        <p>
                            Durant cette SAE, j'ai pu mettre en pratique les compétences que j'avais acquises durant les mois précédents. <br>
                            Bien que j'étais seule pour cette SAE, j'ai pu profiter de l'occasion pour renforcer mes compétences en autonomie et en organisation. <br> 
                            Puisque j'ai dù planifier et gérer chaque étape sur trois jours, en prenant en compte les priorités des étapes. <br>
                            En travaillant seule, j'ai également pu me concentrer sur mes propres points faibles et les améliorer. <br>
                        </p>

                        <h5 class="mt-5">
                            Dates
                        </h5>
                        <p>
                            07/11/2022 → 09/11/2022 
                        </p>
                        <h5 class="mt-5">
                            Sujet
                        </h5>
                        <p>
                            Chaque étudiant doit sélectionner une ou plusieurs thématiques, parmi celles proposées. <br>
                            Une thématique de géographie est commune à l'ensemble des autres, permettant si besoin de créer une cartographie, ou une représentation géographique par le biais d'un graphe. <br>
                            Thématique géographique, Thématique énergie , Thématique culture et Thématique enseignements supérieur. <br>
                            Choisissez un graphe ou plusieurs pour expliquer votre représentation, et quel intérêt elle apporte en termes de data visualisation. <br>
                            Décrire textuellement les données que vous utilisez et que vous affichez. <br> 
                            L'intérêt d'avoir sélectionné celles-ci. Une conclusion de votre représentation.
                        </p>
                        <h5 class="mt-5">
                            Outils
                        </h5>
                        <p>
                            HTML5, CSS3, Tailwind, Vuejs.
                        </p>
                        <div class="flex">
                            <p>
                                OpenStreetMap, et les API ont été récupéré sur le site :  
                            </p>
                            <a href="https://geo.api.gouv.fr" class="underline ml-1">
                                <p>
                                    geo.api.gouv
                                </p>
                            </a>

                        </div>
                    </div>
                    
                </div>
            </div>

    </section>

    <section class="pt-8 sm:pt-20 overflow-hidden">
        <div>
            <h3 class="my-6 sm:my-10 px-4 sm:px-20 py-2 sm:py-4 text-center sm:text-left bg-cleargreen">
                TikTak et son Back-End par Supabase
            </h3>
            <div class="sm:grid sm:grid-cols-2">
                    <div class="bg-clearbeige p-20">
                        <h4 class="mb-5">
                            TikTak
                        </h4>
                        <p>
                            TikTak est un site que nous avons dû imaginer et confectionné durant une SAE en BUT MMI. <br> 
                            Le concept était donc de créer un configurateur de produit pour une montre connectée. <br>
                            L'objectif était d'impliquer l'utilisateur dans la création de son modèle et de lui offrir une expérience utilisateur originale. <br>
                            Et donc nous devions créer 
                        </p>
                        <h5 class="mt-5">
                            Dates
                        </h5>
                        <p>
                            24/10/2022 → 27/10/2022
                        </p>
                        <h5 class="mt-5">
                            Objectifs
                        </h5>
                        <p>
                            Créé une maquette, E-marketing, nudge marketing ..., mise en place d'un Back-End avec Supabase, <br>
                            Développement Front-End avec Vuejs et Tailwind, et enfn mise en page des pages du site avec les grilles CSS ou Flex.
                        </p>
                        <h5 class="mt-5">
                            Outils
                        </h5>
                        <p>
                            HTML5, CSS3, Tailwind, Supabase, Figma. <br>
                            Visual Studio Code, Github, Netlify.

                        </p>
                        <h5 class="mt-5">
                            Mon rôle
                        </h5>
                        <p>
                            En quatre jours, j'ai répondu aux demandes en mettant en place un Back-End avec Supabase.<br>
                            J'ai alors intégré une fonctionnalité permettant à l'utilisateur de se connecter avec son compte Google ou Facebook <br>
                            De plus, j'ai développé une fonctionnalité de prévisualisation qui permet à l'utilisateur de personnaliser sa montre selon ses préférences avant de la sauvegarder. <br>
                            Et pour finir, une fois que l'utilisateur a sauvegardé sa personnalisation, il peut accéder à tous ses modèles sur la page "Vos modèles". <br>                      
                            Au final, je suis satisfaite de ce que j'ai réalisé en si peu de temps, et c'est un projet que je pourrais réutiliser plus tard pour m'améliorer.
                        </p>
                    </div>
                    <div class="px-4 sm:px-20">
                    <div class="flex justify-center items-center flex-col mt-6 sm:mt-10">
                        <a href="https://dazzling-lebkuchen-42612d.netlify.app/">
                            <img src="/public/images/Design/TikTak.png" class="h-64 sm:h-96 w-auto" alt="Interface TikTak">
                        </a>
                    </div>
                    <div class="flex justify-center items-center flex-col mt-6 sm:mt-10">
                        <img src="/public/images/Développement/PageConnect°.png" class="h-64 sm:h-96 w-auto" alt="Page connection TikTak">
                    </div>
                    <div class="text-center mt-6 sm:mt-10">
                        <Bouton class="my-4 sm:my-10">
                            <a href="https://dazzling-lebkuchen-42612d.netlify.app/">
                            Découvrir
                            </a>
                        </Bouton>
                    </div>
                </div>
                </div>
                
            </div>

    </section>

    <section class="pt-8 sm:pt-20 overflow-hidden">
        <div>
            <h3 class="my-6 sm:my-10 px-4 sm:px-20 py-2 sm:py-4 text-center sm:text-left bg-cleargreen">
                Réarts et son Back-End par Firebase
            </h3>
            <div class="sm:grid sm:grid-cols-2">
                <div class="px-4 sm:px-20">
                    <div class="flex justify-center items-center flex-col mt-6 sm:mt-10">
                            <img src="/public/images/Développement/Réarts.png" class="h-64 sm:h-96 w-auto" alt="Interface Réarts">
                    </div>
                    <div class="flex justify-center items-center mt-6 sm:mt-10">
                        <div class="flex flex-col items-center mr-6">
                            <img src="/public/images/Développement/RéartsConnect°.png" class="h-64 sm:h-96 w-auto mb-10" alt="Page connection  Réarts">
                        </div>
                        <div class="flex flex-col items-center">
                            <img src="/public/images/Développement/RéartsArtiste.png" class="h-64 sm:h-96 w-auto" alt="Page Artiste">
                        </div>
                    </div>
                    <div class="text-center mt-6 sm:mt-10">
                        <Bouton class="my-4 sm:my-10">
                            <a href="https://rearts.leopold-ohnimus.fr/">
                            Découvrir
                            </a>
                        </Bouton>
                    </div>

                </div>
                    <div class="bg-clearbeige p-20">
                        <h4 class="mb-5">
                            Réarts
                        </h4>
                        <p>
                            Le projet consiste à permettre aux parents de donner vie aux dessins de leurs enfants en les faisant reproduire par des artistes talentueux. <br> 
                            Il suffit de le prendre en photo et de l'envoyer à un artiste de Réarts. <br> 
                            Grâce à cette photo, l'artiste pourra reproduire le dessin dans son propre style artistique, pour créer une version 2.0 du dessin de l'enfant. <br>
                            Nous avons donc mis en place un Back-End avec Firebase pour permettre aux utilisateurs de se connecter avec une adresse mail, <br>
                            mais également de contacter les artistes, puisque il y a également une messagerie d'installé. <br>
                            Ce projet est mobile first.
                        </p>
                        <h5 class="mt-5">
                            Acteurs
                        </h5>
                        <div class="flex">
                            <p class="underline mr-2">
                            Prestataires :
                            </p>
                            <p>
                                CANTE Maxence, OHNIMUS Léopold, et moi même.
                            </p>
                        </div>

                        <h5 class="mt-5">
                            Dates
                        </h5>
                        <p>
                            10/02/2022 → 09/06/2022
                        </p>
                        <h5 class="mt-5">
                            Outils
                        </h5>
                        <p>
                            HTML5, CSS3, Tailwind, Javascript. <br>
                            Figma, et Illustrator. <br>
                            Visual Studio Code, Github, Firebase, et Infomaniak.

                        </p>
                        <h5 class="mt-5">
                            Mon rôle
                        </h5>
                        <p>
                            Mon rôle a été de créer l'aspect visuel du site (logo, intentions graphiques, harmonie colorée..). <br> 
                            Mais également de créé la maquette Figma et une grande partie du développement Front-End.
                        </p>
                    </div>
                </div>
                
            </div>

    </section>


</template>

<script>

</script>
