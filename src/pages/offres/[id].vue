<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'

import { allFavori, oneID } from '@/backend'
 import { useRoute } from 'vue-router/auto'
const maisonsListe = await allFavori()

console.log(maisonsListe)

 const route = useRoute('/offres/[id]')
    console.log('id :', route.params.id)

    const uneMaison = await oneID(route.params.id)

</script>

<template>

    <div>
        <h1 class="text-xl">Une maison</h1>
        <MaisonCard v-bind="uneMaison" />
    </div>
    


</template>