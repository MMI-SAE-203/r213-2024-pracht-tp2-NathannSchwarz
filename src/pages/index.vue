<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import type { MaisonRecord } from '@/types'

const maisonsListe: MaisonRecord[] = [
  {
    Adresse: '123 Rue des Fleurs, Villeville',
    Favori: true,
    NbSalledeBain: 3,
    Nbchambre: 4,
    Nom: 'Villa Belle Vue',
    Prix: 350000,
    Superficie: 250,
    collectionId: '8aiuqeekr60py09',
    collectionName: 'Maison',
    created: '2024-04-11 12:24:58.883Z',
    id: '8rznrvg8npv71zt',
    image: 'iwood_r5v8_xtc0ecg_unsplash_pCOQIfXvJM.jpg',
    updated: '2024-04-11 12:35:30.279Z'
  },
  {
    Adresse: '456 Avenue du Lac, Lacville',
    Favori: false,
    NbSalledeBain: 2,
    Nbchambre: 3,
    Nom: 'Maison du Lac',
    Prix: 250000,
    Superficie: 180.5,
    collectionId: '8aiuqeekr60py09',
    collectionName: 'Maison',
    created: '2024-04-11 12:26:01.041Z',
    id: 'm0k32ckxmhm5qwf',
    image: 'vinicius_amnx_amano_alp_ek_p29_eys_unsplash_GmbpsduxBT.jpg',
    updated: '2024-04-11 12:35:16.134Z'
  },
  {
    Adresse: '789 Chemin de la Montagne, Montagneville',
    Favori: true,
    NbSalledeBain: 4,
    Nbchambre: 5,
    Nom: 'Chalet Montagne',
    Prix: 450000,
    Superficie: 350.75,
    collectionId: '8aiuqeekr60py09',
    collectionName: 'Maison',
    created: '2024-04-11 12:26:54.473Z',
    id: 'u7wmtb2dbzz3mk5',
    image: 'spacejoy_yq_fz7_umm8q_e_unsplash_N97ZqNSiDY.jpg',
    updated: '2024-04-11 12:35:03.970Z'
  },
  {
    Adresse: '101 Rue des Familles, Familleville',
    Favori: false,
    NbSalledeBain: 2,
    Nbchambre: 3,
    Nom: 'Maison Familiale',
    Prix: 180000,
    Superficie: 150.25,
    collectionId: '8aiuqeekr60py09',
    collectionName: 'Maison',
    created: '2024-04-11 12:29:05.978Z',
    id: '90prca0no81a9zp',
    image: 'lotus_design_n_print_1v_mz2_mclr_m_unsplash_iM0tcsjrEd.jpg',
    updated: '2024-04-11 12:34:55.454Z'
  },
  {
    Adresse: '222 Boulevard Cosy, Cosyville',
    Favori: true,
    NbSalledeBain: 1,
    Nbchambre: 2,
    Nom: 'Appartement Cosy',
    Prix: 120000,
    Superficie: 100,
    collectionId: '8aiuqeekr60py09',
    collectionName: 'Maison',
    created: '2024-04-11 12:29:52.923Z',
    id: '2ap0mve8g4udp81',
    image: 'francesca_tosolini_xc_vm8mn7_num_unsplash_Y5lhoyOqcG.jpg',
    updated: '2024-04-11 12:34:44.980Z'
  }
]

console.log(maisonsListe)
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-bind="maisonsListe[0]" />
</template>
