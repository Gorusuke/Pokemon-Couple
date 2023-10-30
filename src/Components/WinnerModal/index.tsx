import { useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'
import { Button } from '../Button'
import { shuffleArray } from '../../Utils/shuffleArray'
import { pokemonsData } from '../../Info/pokemonContent.json'

import './styles.css'

const WinnerModal = () => {
  const { tries, dispatch, setBaraja } = useContext(PokemonContext)
  return (
    <div className="container">
      <div className="modal">
        <div className="image">
          <img
            src="https://www.awai.com/_img/content/2019/08/members-master-an-in-demand-skill-and-win-1500/001.jpg"
            className="img"
            alt="Winner"
          />
        </div>
        <p className="text">
          You made <b>{tries}</b> attempts.
        </p>
        <div className="buttons-container">
          <Button
            showClassName
            text='Save Score'
            handleClick={() => { }}
          />
          <div className='container-buttons'>
            <Button
              showClassName
              text='Show Ranking'
              handleClick={() => dispatch({ type: 'SHOW_RANKING' })} />
            <Button
              showClassName
              text='Play Again'
              handleClick={() => {
                setBaraja(shuffleArray(pokemonsData))
                dispatch({ type: 'RESET_GAME' })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinnerModal
