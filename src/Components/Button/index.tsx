import { ButtonProps } from '../../Interfaces/PokemonContextInterface'
import './styles.css'

export const Button = ({ handleClick, text, showClassName }: ButtonProps) => {
  return (
    <div className={!showClassName ? 'home-button-container' : ''}>
      <button
        className="send-button"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  )
}
