<script setup>
import Bouton from "@/components/bouton.vue"

</script>

<template>

<section class="my-10 sm:my-20 grid grid-cols-1 sm:grid-cols-2">
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

        </div>
    </section>

</template>