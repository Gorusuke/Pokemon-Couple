import { useContext, useState, SyntheticEvent } from 'react'
import { Button } from '../Button'
import { PokemonContext } from '../../Context/PokemonContext'
// import firebase from '../firebase/firebase'
// import 'firebase/firestore'

import './styles.css'
import { ACTIONS } from '../../contants'

const RankingForm = () => {
  const { tries, dispatch } = useContext(PokemonContext)
  const [error, setError] = useState(false)
  const [inputValue, setInputValue] = useState('')
  // const db = firebase.firestore()

  const authentication = (evt: SyntheticEvent | undefined) => {
    evt!.preventDefault()
    if (!inputValue) {
      setError(true)
      return
    }
    dispatch({ type: ACTIONS.SHOW_RANKING, payload: { name: '', number: 0 } })
    setError(false)
  }

  const handleInput = ({ target }: { target: HTMLInputElement }) => setInputValue(target.value)

  return (
    <div className='form-container'>
      <form>
        <h2>Fill this data</h2>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="Type your name..."
          onChange={handleInput}
        />
        {error && <span>Name is required!</span>}
        <p> You made <b>{tries}</b> attempts. </p>
      </form>
      <Button text='Send' handleClick={(evt) => authentication(evt)} />
    </div>
  )
}

export default RankingForm
