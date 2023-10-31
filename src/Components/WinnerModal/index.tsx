import { useContext } from 'react'
import { PokemonContext } from '../../Context/PokemonContext'
import { Button } from '../Button'
import { shuffleArray } from '../../Utils/shuffleArray'
import { pokemonsData } from '../../Info/pokemonContent.json'

import './styles.css'
import { ACTIONS } from '../../contants'

const WinnerModal = () => {
  const { tries, dispatch, setDeck } = useContext(PokemonContext)
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
            handleClick={() => dispatch({ type: ACTIONS.SHOW_FORM })}
          />
          <div className='container-buttons'>
            <Button
              showClassName
              text='Show Ranking'
              handleClick={() => dispatch({ type: ACTIONS.SHOW_RANKING })} />
            <Button
              showClassName
              text='Play Again'
              handleClick={() => {
                setDeck(shuffleArray(pokemonsData))
                dispatch({ type: ACTIONS.RESET_GAME })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WinnerModal
