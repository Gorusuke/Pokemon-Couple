import { useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'

import './styles.css'
import { images } from '../../Info/pokemonContent'

const Header = () => {
  const { tries, dispatch, shuffleArray } = useContext(PokemonContext)

  return (
    <header>
      <div className="reset-button">
        <button
          className="button-reset"
          onClick={() => {
            // TODO: modificar barajas por eso no funciona! (Board)
            shuffleArray(images)
            dispatch({ type: 'RESET_GAME' })
          }}
        >
          Reiniciar
        </button>
      </div>
      <div className="title">React - Parejas</div>
      <div className="try">
        tries: <b>{tries}</b>
      </div>
    </header>
  )
}

export default Header
