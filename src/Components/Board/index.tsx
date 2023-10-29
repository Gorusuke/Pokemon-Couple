import { useState, useEffect, useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'
import { images } from '../../Info/pokemonContent'
import './styles.css'
import Card from '../Card/Card'

export interface Deck {
  name: string
  image: string
}

// interface Cards {
//   name: string,
//   number: number
// }

export type CardNumber = [number, number]

export type PokemonDeck = {
  image: Deck
}

const Board = () => {
  const { dispatch, firstCard, secondCard, shuffleArray } = useContext(PokemonContext)
  const [baraja, setBaraja] = useState<PokemonDeck[]>([])
  // const [firstCard, setFirstCard] = useState<Cards>({} as Cards)
  // const [secondCard, setSecondCard] = useState<Cards>({} as Cards)
  const [unflippedCards, setUnflippedCards] = useState<CardNumber>([] as unknown as CardNumber)
  const [disabledCards, setDisabledCards] = useState<CardNumber>([] as unknown as CardNumber)
  const [aciertos, setAciertos] = useState(0)

  // const shuffleArray = (deck: Deck[]) => {
  //   let pokemonDeck: PokemonDeck[] = []

  //   while (pokemonDeck.length < 40) {
  //     const index = Math.floor(Math.random() * deck.length)
  //     const carta = {
  //       image: deck.splice(index, 1)[0]
  //     }
  //     const newDeck = [...pokemonDeck, carta]
  //     newDeck.push({ ...carta })
  //     pokemonDeck = [...newDeck as PokemonDeck[]]
  //   }

  //   for (let i = pokemonDeck.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * i)
  //     const temp = pokemonDeck[i]
  //     pokemonDeck[i] = pokemonDeck[j]
  //     pokemonDeck[j] = temp
  //   }

  //   setBaraja(pokemonDeck)
  //   return pokemonDeck
  // }

  // useEffect(() => {
  //   if (shuffleArray(images)) dispatch({ type: 'UPDATE_LOADING' })
  // }, [resetGame])

  useEffect(() => {
    // TODO: Aqui es la vuelta
    if (shuffleArray(images).length) {
      setBaraja(shuffleArray(images))
      dispatch({ type: 'UPDATE_LOADING' })
    }
  }, [])

  useEffect(() => {
    checkForMatch()
    acierto()
    // eslint-disable-next-line
  }, [secondCard])

  const cardFlip = (name: string, number: number) => {
    if (firstCard?.name === name && firstCard.number === number) return 0
    if (!firstCard?.name) dispatch({ type: 'UPDATE_FIRST_CARD', payload: { name, number } })
    else if (!secondCard?.name) dispatch({ type: 'UPDATE_SECOND_CARD', payload: { name, number } })
    // console.log(firstCard, 'desde dcsddsfdsfa')
    return 1
  }

  const checkForMatch = () => {
    // console.log(firstCard)
    if (firstCard?.name && secondCard?.name) {
      dispatch({ type: 'UPDATE_TRIES' })
      const match = firstCard.name === secondCard.name
      match ? disabledCard() : unflipCard()
    }
  }

  const acierto = () => {
    if (firstCard?.name && secondCard?.name) {
      const hola = firstCard.name === secondCard.name
      if (hola) setAciertos(aciertos + 1)
      if (aciertos === 19) dispatch({ type: 'UPDATE_WINNER' })
    }
  }

  const disabledCard = () => {
    setDisabledCards([firstCard.number, secondCard.number])
    dispatch({ type: 'RESET_CARDS' })
  }

  const unflipCard = () => {
    setUnflippedCards([firstCard.number, secondCard.number])
    dispatch({ type: 'RESET_CARDS' })
  }

  return (
    <div className="table">
      {baraja.map((pokemon, index) => (
        <Card
          key={`${pokemon.image.name}-${index}`}
          number={index}
          pokemon={pokemon}
          flipCard={cardFlip}
          unflippedCards={unflippedCards}
          disabledCards={disabledCards}
        />
      ))}
    </div>
  )
}

export default Board
