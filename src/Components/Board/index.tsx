import { useState, useEffect, useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'
import { CardNumber } from '../../Interfaces/PokemonContextInterface'
import Card from '../Card'

import './styles.css'

const Board = () => {
  const { dispatch, firstCard, secondCard, deck, matches } = useContext(PokemonContext)
  const [unflippedCards, setUnflippedCards] = useState<CardNumber>([] as unknown as CardNumber)

  useEffect(() => {
    checkForMatch()
    getAttempts()
    // eslint-disable-next-line
  }, [secondCard])

  const cardFlip = (name: string, number: number) => {
    if (firstCard.name === name && firstCard.number === number) return 0
    if (!firstCard.name) dispatch({ type: 'UPDATE_FIRST_CARD', payload: { name, number } })
    else if (!secondCard.name) dispatch({ type: 'UPDATE_SECOND_CARD', payload: { name, number } })
    return 1
  }

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      dispatch({ type: 'UPDATE_TRIES' })
      const hasMatch = firstCard.name === secondCard.name
      hasMatch ? dispatch({ type: 'RESET_CARDS' }) : unflipCard()
    }
  }

  const getAttempts = () => {
    if (firstCard.name && secondCard.name) {
      const hasMatch = firstCard.name === secondCard.name
      if (hasMatch) dispatch({ type: 'UPDATE_MATCHES' })
      if (matches === 19) dispatch({ type: 'UPDATE_WINNER' })
    }
  }

  const unflipCard = () => {
    setUnflippedCards([firstCard.number, secondCard.number])
    dispatch({ type: 'RESET_CARDS' })
  }

  return (
    <div className="table">
      {deck.map((pokemon, index) => (
        <Card
          key={`${pokemon.name}-${index}`}
          number={index}
          pokemon={pokemon}
          flipCard={cardFlip}
          unflippedCards={unflippedCards}
        />
      ))}
    </div>
  )
}

export default Board
