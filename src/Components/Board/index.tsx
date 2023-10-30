import { useState, useEffect, useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'
import { CardNumber } from '../../Interfaces/PokemonContextInterface'
import Card from '../Card'

import './styles.css'

const Board = () => {
  const { dispatch, firstCard, secondCard, baraja, winner } = useContext(PokemonContext)
  const [unflippedCards, setUnflippedCards] = useState<CardNumber>([] as unknown as CardNumber)
  const [disabledCards, setDisabledCards] = useState<CardNumber>([] as unknown as CardNumber)
  const [aciertos, setAciertos] = useState(0)

  useEffect(() => {
    checkForMatch()
    acierto()
    // eslint-disable-next-line
  }, [secondCard])

  const cardFlip = (name: string, number: number) => {
    if (firstCard?.name === name && firstCard?.number === number) return 0
    if (!firstCard?.name) dispatch({ type: 'UPDATE_FIRST_CARD', payload: { name, number } })
    else if (!secondCard?.name) dispatch({ type: 'UPDATE_SECOND_CARD', payload: { name, number } })
    console.log(firstCard?.name === name, firstCard?.number === number)
    return 1
  }

  console.log({ firstCard, secondCard, winner })

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
      const match = firstCard.name === secondCard.name
      if (match) setAciertos(prev => prev + 1)
      if (aciertos === 1) dispatch({ type: 'UPDATE_WINNER' })
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
          key={`${pokemon.name}-${index}`}
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
