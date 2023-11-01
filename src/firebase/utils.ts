import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from './firebaseConfig'
import { AddScore } from '../Interfaces/PokemonContextInterface'

export const addScoreInFirebase = async ({ name, score }: AddScore) => {
  try {
    await addDoc(collection(db, 'Ranking'), { name, score })
  } catch (error) {
    throw new Error(`Error adding document: ${error}`)
  }
}

export const getScoreFromFirebase = async () => {
  if (db) {
    const { docs } = await getDocs(collection(db, 'Ranking'))
    const scoreData = [...docs]
      .map(doc => ({ ...doc.data() }))
      .sort((x, y) => x.score - y.score)
      .slice(0, 10)
    return scoreData
  }
}
