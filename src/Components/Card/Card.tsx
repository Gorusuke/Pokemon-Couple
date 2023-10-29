import { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { CardNumber, Deck } from '../Board'
import './styles.css'

interface CardProps {
  number: number
  pokemon: {
    image: Deck
  }
  flipCard: (name: string, number: number) => number
  unflippedCards: CardNumber
  disabledCards: CardNumber
}

const Card = ({ number, pokemon, flipCard, unflippedCards, disabledCards }: CardProps) => {
  const { image, name } = pokemon.image
  const [isFlipped, setIsFlipped] = useState(false)
  const [hasEvent, setHasEvent] = useState(true)

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 1000)
    }
    // eslint-disable-next-line
  }, [unflippedCards])

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false)
    }
    // eslint-disable-next-line
  }, [disabledCards])

  const handleClick = () => {
    if (hasEvent) {
      const value = flipCard(name, number)
      if (value !== 0) {
        setIsFlipped(true)
      }
    }
  }

  return (
    <div className="carta" onClick={handleClick}>
      <ReactCardFlip isFlipped={isFlipped}>
        <div className="front"></div>
        <div className="back">
          <img src={image} className="img" alt={name} />
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default Card
