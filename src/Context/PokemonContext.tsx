import { createContext, useReducer, ReactNode } from 'react'

interface Cards {
  name: string
  number: number
}

interface Action {
  type: string
  payload?: Cards
}

export interface Deck {
  name: string
  image: string
}

export type PokemonDeck = {
  image: Deck
}

export interface PokemonContextInterface {
  tries: number
  winner: boolean
  loading: boolean
  dispatch: (arg: Action) => void
  firstCard: Cards
  secondCard: Cards
  shuffleArray: (arg: Deck[]) => PokemonDeck[]
}

const cardInitial = {
  name: '',
  number: 0
}

const initialState = {
  tries: 0,
  winner: false,
  loading: true,
  dispatch: () => {},
  firstCard: cardInitial,
  secondCard: cardInitial,
  shuffleArray: () => []
}

export const PokemonContext = createContext<PokemonContextInterface>(initialState)

const PokemonReducer = (state: PokemonContextInterface, action: Action) => {
  if (action.type === 'UPDATE_TRIES') {
    return {
      ...state,
      tries: state.tries + 1
    }
  }

  if (action.type === 'UPDATE_LOADING') {
    return {
      ...state,
      loading: false
    }
  }

  if (action.type === 'UPDATE_WINNER') {
    return {
      ...state,
      winner: true
    }
  }

  if (action.type === 'RESET_CARDS') {
    return {
      ...state,
      firstCard: null,
      secondCard: null
    }
  }

  if (action.type === 'RESET_GAME') {
    return initialState
  }

  if (action.type === 'UPDATE_FIRST_CARD') {
    return {
      ...state,
      firstCard: action.payload
    }
  }

  if (action.type === 'UPDATE_SECOND_CARD') {
    console.log(state, 'desde el reducer')
    return {
      ...state,
      secondCard: action.payload
    }
  }

  return state
}

export const PokemonContextProvider = ({ children }: { children: ReactNode }) => {
  const [{ tries, winner, loading, firstCard, secondCard }, dispatch] = useReducer(PokemonReducer, initialState)

  const shuffleArray = (deck: Deck[]) => {
    let pokemonDeck: PokemonDeck[] = []

    while (pokemonDeck.length < 40) {
      const index = Math.floor(Math.random() * deck.length)
      const carta = {
        image: deck.splice(index, 1)[0]
      }
      const newDeck = [...pokemonDeck, carta]
      newDeck.push({ ...carta })
      pokemonDeck = [...newDeck as PokemonDeck[]]
    }

    for (let i = pokemonDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = pokemonDeck[i]
      pokemonDeck[i] = pokemonDeck[j]
      pokemonDeck[j] = temp
    }

    // setBaraja(pokemonDeck)
    return pokemonDeck
  }

  return (
    <PokemonContext.Provider value={{
      tries,
      winner,
      loading,
      dispatch,
      firstCard,
      secondCard,
      shuffleArray
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
