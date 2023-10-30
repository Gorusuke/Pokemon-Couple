import ReactCardFlip from 'react-card-flip'
import { useEffect, useState } from 'react'
import { CardProps } from '../../Interfaces/PokemonContextInterface'
import './styles.css'

const Card = ({ number, pokemon, flipCard, unflippedCards }: CardProps) => {
  const { image, name } = pokemon
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 800)
    }
    // eslint-disable-next-line
  }, [unflippedCards])

  const handleClick = () => {
    const value = flipCard(name, number)
    if (value !== 0) {
      setIsFlipped(true)
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
