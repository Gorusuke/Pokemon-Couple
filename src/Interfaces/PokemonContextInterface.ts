import { SyntheticEvent, Dispatch } from 'react'
export interface Cards {
  name: string
  number: number
}

export type Action = { type: string, payload: Cards }

export interface Deck {
  name: string
  image: string
}

export type CardNumber = [number, number]

export interface PokemonContextInterface {
  matches: number
  tries: number
  winner: boolean
  loading: boolean
  firstCard: Cards
  secondCard: Cards
  deck: Deck[]
  dispatch: Dispatch<Action>
  setDeck: (arg: Deck[]) => void
  showRanking: boolean
  showForm: boolean
}

export interface CardProps {
  number: number
  pokemon: Deck
  flipCard: (name: string, number: number) => number
  unflippedCards: CardNumber
}

export interface ButtonProps {
  handleClick: (event?: SyntheticEvent | undefined) => void,
  text: string,
  showClassName?: boolean
}
