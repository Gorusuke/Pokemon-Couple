import { useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'
import { pokemonsData } from '../../Info/pokemonContent.json'
import { shuffleArray } from '../../Utils/shuffleArray'

import './styles.css'

const Header = () => {
  const { tries, dispatch, setBaraja } = useContext(PokemonContext)

  return (
    <header>
      <div className="reset-button">
        <button
          className="button-reset"
          onClick={() => {
            setBaraja(shuffleArray(pokemonsData))
            dispatch({ type: 'RESET_GAME' })
          }}
        >
          Reset Game
        </button>
      </div>
      <div className="title">Pokemon - Couple</div>
      <div className="try">
        Attempts: <b>{tries}</b>
      </div>
    </header>
  )
}

export default Header
