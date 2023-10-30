export interface Cards {
  name: string
  number: number
}

export interface Action {
  type: string
  payload?: Cards
}

export interface Deck {
  name: string
  image: string
}

export type CardNumber = [number, number]

export interface PokemonContextInterface {
  tries: number
  winner: boolean
  loading: boolean
  firstCard: Cards
  secondCard: Cards
  baraja: Deck[]
  dispatch: (arg: Action) => void
  setBaraja: (arg: Deck[]) => void
  showRanking: boolean
}

export interface CardProps {
  number: number
  pokemon: Deck
  flipCard: (name: string, number: number) => number
  unflippedCards: CardNumber
  disabledCards: CardNumber
}
