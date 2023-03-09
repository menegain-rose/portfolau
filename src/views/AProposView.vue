<script setup lang="ts">

</script>

<template>
<section class="grid grid-cols-2">
    <div class="flex justify-center">
        <img src="/public/images/PortraitPhoto.jpg" class="w-80" alt="">
    </div>
    <div class="flex items-center">
        <h2>Rose Menegain</h2> 
        <h4 class="text-brown">
            Etudiante en BUT MMI 
        </h4>
        <p>
            
            https://sae203.rmenegain.fr/ <br>
                https://rearts.leopold-ohnimus.fr/ <br>
                https://dazzling-lebkuchen-42612d.netlify.app <br>

                https://www.behance.net/gallery/160577691/MMI-InternationalMobility
        </p>
    </div>
</section>


<form class="bg-clearbrown p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="name">Nom</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Votre nom">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Votre email">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 font-bold mb-2" for="message">Message</label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Votre message"></textarea>
    </div>
    <div class="flex justify-end">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Envoyer</button>
    </div>
  </form>



</template>

<script>
export default {
  methods: {
    submitForm() {
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const message = document.getElementById('message').value
      
      console.log(`Nom: ${name}`)
      console.log(`Email: ${email}`)
      console.log(`Message: ${message}`)
    }
  }
}
</script>
