import { useState, useEffect, useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'
import { CardNumber } from '../../Interfaces/PokemonContextInterface'
import confetti from 'canvas-confetti'
import Card from '../Card'

import './styles.css'
import { ACTIONS } from '../../contants'

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
    if (!firstCard.name) dispatch({ type: ACTIONS.UPDATE_FIRST_CARD, payload: { name, number } })
    else if (!secondCard.name) dispatch({ type: ACTIONS.UPDATE_SECOND_CARD, payload: { name, number } })
    return 1
  }

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      dispatch({ type: ACTIONS.UPDATE_TRIES, payload: { name: '', number: 0 } })
      const hasMatch = firstCard.name === secondCard.name
      hasMatch ? dispatch({ type: ACTIONS.RESET_CARDS, payload: { name: '', number: 0 } }) : unflipCard()
    }
  }

  const getAttempts = () => {
    if (firstCard.name && secondCard.name) {
      const hasMatch = firstCard.name === secondCard.name
      if (hasMatch) dispatch({ type: ACTIONS.UPDATE_MATCHES, payload: { name: '', number: 0 } })
      if (matches === 19) {
        dispatch({ type: ACTIONS.UPDATE_WINNER, payload: { name: '', number: 0 } })
        confetti()
        confetti()
        confetti()
      }
    }
  }

  const unflipCard = () => {
    setUnflippedCards([firstCard.number, secondCard.number])
    dispatch({ type: ACTIONS.RESET_CARDS, payload: { name: '', number: 0 } })
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
