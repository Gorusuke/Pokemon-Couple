import { collection, addDoc } from 'firebase/firestore'
import { db } from './firebaseConfig'
import { AddScore } from '../Interfaces/PokemonContextInterface'

export const addScoreInFirebase = async ({ inputValue, tries }: AddScore) => {
  try {
    await addDoc(collection(db, 'Ranking'), {
      name: inputValue,
      score: tries
    })
  } catch (error) {
    throw new Error(`Error adding document: ${error}`)
  }
}
