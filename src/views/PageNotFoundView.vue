<template>
    <div class="items-center text-center p-5 py-52">
        <p class="m-5">
            Page non trouvée. La page que vous avez demandée n'a pas été trouvée
        </p>
        <p class="m-5">
            Page not found. The page you requested was not found
        </p>
        <router-link to="/">
            <Bouton type="Bouton" @click="redirectMe()" class=""> 
                Retour à l'accueil 
            </Bouton>
        </router-link>
    </div>
</template>

<script>
import Bouton from '/src/components/bouton.vue'

export default {
    name: "PageNotFound",
    methods: {
        redirectMe(){
            this.$router.push({ name: 'Accueil'})
        }
    },
    components: { 
        Bouton,
    }
}
</script>
