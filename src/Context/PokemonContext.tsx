import { createContext, useReducer, useState, ReactNode } from 'react'
import { pokemonsData } from '../Info/pokemonContent.json'
import { PokemonContextInterface } from '../Interfaces/PokemonContextInterface'
import { shuffleArray } from '../Utils/shuffleArray'
import { PokemonReducer } from '../Reducers/PokemonReducer'
import { initialState } from '../contants'

export const PokemonContext = createContext<PokemonContextInterface>(initialState)

export const PokemonContextProvider = ({ children }: { children: ReactNode }) => {
  const [
    { showForm, matches, showRanking, tries, winner, loading, firstCard, secondCard },
    dispatch
  ] = useReducer(PokemonReducer, initialState)
  const [deck, setDeck] = useState(() => shuffleArray(pokemonsData))

  return (
    <PokemonContext.Provider value={{
      tries,
      winner,
      loading,
      showRanking,
      firstCard,
      secondCard,
      deck,
      matches,
      showForm,
      dispatch,
      setDeck
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
