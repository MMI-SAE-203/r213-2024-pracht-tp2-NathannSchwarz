<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'

import { allMaisons } from '@/backend'
import { pb } from '@/backend'

// const maisonsListe = await allMaisons()
const maisonsListe = await pb.collection('Maison').getFullList()

console.log('toutes les maisonq', maisonsListe)
</script>

<template>
  <h1 class="text-2xl">Liste de liens</h1>

  <!-- <MaisonCard v-for="maison in maisonsListe" :key="maison.nomMaison" v-bind="maison" /> -->

  <ul>
    <li v-for="uneMaison of maisonsListe" :key="uneMaison.id">
      <RouterLink
        :to="{
          name: '/offres/[id]',
          params: {
            id: uneMaison.id
          }
        }"
        class="text-red-400 hover:text-red-600"
      >
        {{ uneMaison.Nom }}
      </RouterLink>
    </li>
  </ul>
</template>
