<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'

import { allFavori } from '@/backend'

const maisonsListe = await allFavori()

console.log(maisonsListe)

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>

  <MaisonCard v-for="maison in maisonsListe" :key="maison.nomMaison" v-bind="maison" />

</template>