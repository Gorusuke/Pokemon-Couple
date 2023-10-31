import { useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'
import { pokemonsData } from '../../Info/pokemonContent.json'
import { shuffleArray } from '../../Utils/shuffleArray'

import './styles.css'

const Header = () => {
  const { tries, dispatch, setDeck } = useContext(PokemonContext)

  return (
    <header>
      <button
        className="button-reset"
        onClick={() => {
          setDeck(shuffleArray(pokemonsData))
          dispatch({ type: 'RESET_GAME' })
        }}
      >
        Reset Game
      </button>
      <h2 className="title">Pokemon - Couple</h2>
      <span className="try">Attempts: <b>{tries}</b></span>
    </header>
  )
}

export default Header
