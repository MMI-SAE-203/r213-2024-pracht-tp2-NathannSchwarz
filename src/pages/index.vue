<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'


</script>

<template>
  

  <MaisonCard v-for="maison in maisonsListe" :key="maison.nomMaison" v-bind="maison" />

</template>
