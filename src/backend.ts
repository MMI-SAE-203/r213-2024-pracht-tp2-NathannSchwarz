import pocketbase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new pocketbase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information

export async function allFavori() {
  const allMaisonFavori = await pb.collection('Maison').getFullList({ filter: 'Favori=true' })
  return allMaisonFavori
}

export async function allMaisons() {
  const records = await pb.collection('Maison').getFullList()
  return records
}

export async function allMaisonSorted() {
  const records = await pb.collection('maison').getFullList({ sort: '+prix' })
  return records
}

export async function oneID(id) {
  const record = await pb.collection('maison').getOne(id)
  return record
}
