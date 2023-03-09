<script setup>
import Bouton from "@/components/bouton.vue"

</script>

<template>

    <div class="bg-darkgreen flex flex-col items-center justify-start min-h-screen">
        <div class="bg-cleargreen pt-40 px-20 rounded-t-full">
            <H1 class="text-whiteb">Rose MENEGAIN</H1>
            <img src="/public/images/Portrait.png" class="w-72 sm:w-96 h-auto" alt="">
        </div>
    </div>

    <section class="my-10 sm:my-20 grid grid-cols-1 sm:grid-cols-2">
        <div class="bg-clearbeige px-8 py-14 sm:p-20">
            <h2>Mes travaux</h2>
            <p class="pt-10">
                Découvrez ici mes divers projets, ainsi que mes réalisations dans les domaines du design et du développement web.
            </p>
            <p class="pt-3">
                Je suis heureuse de vous présenter mes compétences dans ces différents domaines et j'espère que vous apprécierez mes différents travaux. <br>
            </p>
            <p class="pt-3">
                En parcourant mes projets vous allez pouvoir comprendre mes compétences en matière de design et de développement.
            </p>
            <p class="pt-3">
                Si vous souhaitez discuter de projets futurs et me poser des questions, je vous invite à me contacter sur mes différents réseaux ou par mail..
            </p>
            <div class="flex mt-2 sm:mt-5">
                <img src="/public/Icons/Discord.svg" class="w-8 mr-5" alt="">
                <a href="https://www.instagram.com/eiku_s/">
                    <img src="/public/Icons/Instagram.svg" class="w-8 mr-5" alt="">
                </a>
                <a href="https://www.linkedin.com/in/rose-menegain/">
                    <img src="/public/Icons/Linkedin.svg" class="w-8 mr-5" alt="">
                </a>
            </div>
        </div>
        
        <div class="mx-2 sm:mx-10">
            <router-link to="/Design">
                <div class="flex flex-col sm:flex-row items-center bg-brown my-10 py-5 px-5 rounded-lg">
                    <img src="/public/images/Design/Cassandre_RoseMENEGAIN_A2.svg" class="w-auto h-60 order-last sm:order-first" alt="">
                    <h2 class="text-whiteb mb-5 sm:ml-10">Designs</h2>
                </div>
            </router-link>
            <router-link to="/Developpement">
            <div class="flex flex-col sm:flex-row items-center bg-brown my-10 py-5 px-5 rounded-lg">
                <img src="/public/images/sae301.png" class="w-auto h-60 order-last sm:order-first" alt="">
                <h2 class="text-whiteb mb-5 sm:ml-10">Développement</h2>
            </div>
        </router-link>
        </div>
    </section>


    <section>
        <div class="bg-clearbrown px-8 py-14 sm:p-20 grid grid-cols-2">
            <div>
                <h2>Designs</h2>
    
                <h3 class="pt-5">Maquettes</h3>
                <p class="pt-2">
                    J'ai pu confectionner et imaginer différentes maquettes depuis le début de mes études en BUT MMI. <br>
                    Mes différentes maquettes vous offres des exemples de mon expérience en matière de conception d'interfaces utilisateur (UI) et d'expérience utilisateur (UX), <br>
                    Sur lequel j'ai pu m'adapter aux demandes des divers commanditaires et donc améliorer mes designs pour répondre aux demandes et surtout aux besoins des futures utilisateurs.
                </p>
    
                <h3 class="pt-10">Affiches</h3>
                <p class="pt-2">
                    J'ai également pu faire quelques affiches et cartes postales, que ce sois pour méxercer, ou lier avec le BUT. <br>
                    Ces projets m'ont aider à approfondir ma créativité et mes compétences en design graphiques.
                </p>
    
                <h3 class="pt-10">Logos</h3>
                <p class="pt-2">
                    J'ai également pu faire quelques affiches et cartes postales, que ce sois pour méxercer, ou lier avec le BUT. <br>
                    Ces projets m'ont aider à approfondir ma créativité et mes compétences en design graphiques.
                </p>
    
                <div class="text-center">
                    <Bouton class="mt-10">
                        <router-link to="/Design">
                            Voir plus
                        </router-link>
                    </Bouton>
                </div>
            </div>

            <div class="flex-col sm:flex-row">
                <img src="/public/images/Design/Bonyfest.png" class="w-auto h-60" alt="">
                <img src="/public/images/Design/Citadelle.svg" class="w-auto h-60" alt="">
            </div>

        </div>
    </section>

    <section>
        <div class="bg-clearbeige px-8 py-14 sm:p-20 mt-20">
            <h2>Développement</h2>

            <h3 class="pt-5">OpenStreetMap & Utilisations d'API</h3>
            <p class="pt-2">
                En utilisant OpenStreetMap et différentes API, il est possible, comme avec Google, de référencer différents lieux sur la carte de façon gratuite et fonctionnelle. <br>
                Cela est maintenant une compétence que j'ai acquise et dont je peux me servir dans différents projets. <br>
                J'ai également utilisé des API pour mettre en place des graphiques afin de visualiser les données de manière claire pour les utilisateurs.
            </p>

            <h3 class="pt-10">Bases de données</h3>
            <p class="pt-2">
                Durant ces deux années en BUT MMI, j'ai appris à utiliser Firebase et Supabase pour apporter à mes projets un Back-End. <br>
                Les fonctionnalités telles que l'authentification des utilisateurs, la gestion des données en temps réel et la sauvegarde automatique des données facilitent la mise en place de projets complets. <br>
                Cela permet de développer des applications Web et mobiles interactives, fiables et efficaces pour les utilisateurs.
            </p>

            <div class="text-center">
                <Bouton class="mt-10">
                    <router-link to="/Developpement">
                        Voir plus
                    </router-link>
                </Bouton>
            </div>
        </div>
    </section>


    <section class="bg-clearbrown px-8 py-14 sm:p-20 mt-20">
        <h2>Logiciels</h2>
        <div>
            
        </div>



    </section>

</template>
