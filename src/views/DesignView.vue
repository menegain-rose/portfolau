<script setup>
import Bouton from "@/components/bouton.vue"

</script>

<template>

<section class="pt-8 sm:pt-20">
    <div class="flex justify-between">
        <h2 class="px-4 sm:px-20 text-center sm:text-left">Designs</h2>
        <img src="/public/images/Design/PlantesTombantesLongues.svg" class="rotate-90 w-[200px] -my-[1200px] hidden sm:block" alt="">
    </div>
    <div>
        <h3 class="my-6 sm:my-10 mx-4 sm:mx-20 text-center sm:text-left">
            Maquettes
        </h3>
        <div class="sm:grid sm:grid-cols-2">
            <div class="px-4 sm:px-20">
                <div class="flex justify-center items-center flex-col mt-6 sm:mt-10">
                    <a href="https://www.figma.com/proto/wd8j2PMyyL3Po6uiISYypJ/maquette-naknowledge?node-id=932%3A3515&scaling=scale-down&page-id=1%3A4&starting-point-node-id=932%3A3515&show-proto-sidebar=1">
                        <img src="/public/images/Design/Naknowledge02.png" class="h-64 sm:h-96 w-auto" alt="">
                    </a>
                </div>
                <div class="flex justify-center items-center flex-col mt-6 sm:mt-10">
                    <img src="/public/images/Design/MoodboardNkwg.png" class="h-auto w-2/3 sm:w-auto rounded-lg" alt="">
                    <img src="/public/logo/naknowledge.png" class="h-auto w-2/3 sm:w-auto rounded-lg mt-6 sm:mt-10" alt="">
                </div>
                <div class="text-center mt-6 sm:mt-10">
                    <Bouton class="my-4 sm:my-10">
                        <router-link to="/Design">
                            Découvrir
                        </router-link>
                    </Bouton>
                </div>
            </div>
                <div class="bg-clearbeige p-20">
                    <h4 class="mb-5">
                        Naknowledge
                    </h4>
                    <p>
                        Naknowledge est un site web destiné à l'apprentissage gratuit et ludique pour les étudiants. <br> 
                        Elle propose diverse nano-leçons sur un ensemble de sujets variés. <br> 
                        Ces leçons sont consultables à n'importe quel moment et peuvent être créé par l'utilisateur et déposer sur le site. <br>
                        Ces nano-leçons ont pour vocations de présenter un savoir/savoir-faire qui peuvent être obtenu et assimilé en quelques minutes, <br>
                        d'où le mot “nano” signifiant “petit”. <br>
                        Étant donné que Naknowledge propose du contenu ludique, <br> 
                        les nano leçons sontaccompagnées de liens vers d'autres nano leçons corrélées et similaires aux leçons précédemment étudiés.
                    </p>
                    <h5 class="mt-5">
                        Acteurs
                    </h5>
                    <div class="flex">
                        <p class="underline mr-2">
                            Commanditaires :
                        </p>
                        <p>
                            Pascal Chatonnay
                        </p>
                    </div>
                    <div class="flex">
                        <p class="underline mr-2">
                        Tuteur :
                        </p>
                        <p>
                            Lydia Dubois
                        </p>
                    </div>
                    <div class="flex">
                        <p class="underline mr-2">
                        Prestataires :
                        </p>
                        <p>
                            Mélina BOUCHELLEGHEM, David SARKISSIAN, <br>
                            Aurélie RUNSER, et moi même.
                        </p>
                    </div>

                    <h5 class="mt-5">
                        Dates
                    </h5>
                    <p>
                        06/09/2022 → 17/10/2022 → 17/01/2023
                    </p>
                    <h5 class="mt-5">
                        Objectifs
                    </h5>
                    <p>
                        - Créer un site web ergonomique et attractif pour l'apprentissage et le partage simple de nano-leçons . <br>
                        - Complètement opérationnelle. <br>
                        - Obtenir une vingtaine d'abonnement sur chaque réseau social. <br>
                        - Quelques réactions des personnes sur les réseaux sociaux (like/ partage/commentaires). <br>
                        - Proposer une cinquantaine (au moins) de nano-leçon au lancement du site. <br>
                        - Rendre le site “autonome” en contenus, alimenté par les utilisateurs eux-mêmes.
                    </p>
                    <h5 class="mt-5">
                        Outils
                    </h5>
                    <p>
                        HTML5, CSS3, Tailwind, Javascript, et PHP. <br>
                        Figma, Première Pro, et Illustrator. <br>
                        Visual Studio Code, Github, FileZilla, Wordpress, et Infomaniak.

                    </p>
                    <h5 class="mt-5">
                        Mon rôle
                    </h5>
                    <p>
                        Mon rôle a été de créer l'aspect visuel du site (logo, intentions graphiques, harmonie colorée..). <br> 
                        J'ai dû prêter attention à la maquette graphique en la rendant intuitive et ergonomique pour l'utilisateur.
                    </p>
                </div>
            </div>
         </div>

    </section>



</template>