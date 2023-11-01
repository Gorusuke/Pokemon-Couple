import { useContext, useState, SyntheticEvent } from 'react'
import { Button } from '../Button'
import { PokemonContext } from '../../Context/PokemonContext'
import { db } from '../../firebase/firebaseConfig'
import { ACTIONS, ENTER } from '../../contants'
import { addScoreInFirebase } from '../../firebase/utils'

import './styles.css'

const RankingForm = () => {
  const { tries, dispatch } = useContext(PokemonContext)
  const [error, setError] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const authentication = async (evt: SyntheticEvent | undefined) => {
    evt!.preventDefault()
    if (!inputValue) {
      setError(true)
      return
    }
    if (db) {
      await addScoreInFirebase({ name: inputValue, score: tries })
      dispatch({ type: ACTIONS.SHOW_RANKING, payload: { name: '', number: 0 } })
      setError(false)
    }
  }

  const handlePressKey = (evt: KeyboardEvent | SyntheticEvent): void => {
    const { key } = evt as KeyboardEvent
    if (key === ENTER) {
      authentication(evt as SyntheticEvent)
    }
  }

  const handleInput = ({ target }: { target: HTMLInputElement }) => setInputValue(target.value)

  return (
    <div className='form-container'>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Fill this data</h2>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="Type your name..."
          onChange={handleInput}
          onKeyDown={handlePressKey}
        />
        {error && <span>Name is required!</span>}
        <p> You made <b>{tries}</b> attempts. </p>
      </form>
      <Button text='Send' handleClick={(evt) => authentication(evt)} />
    </div>
  )
}

export default RankingForm
