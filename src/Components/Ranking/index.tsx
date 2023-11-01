import { useState, useContext, useEffect } from 'react'
import { Button } from '../Button'
import { ACTIONS } from '../../contants'
import { shuffleArray } from '../../Utils/shuffleArray'
import ListOfRanking from '../ListOfRanking/ListOfRanking'
import { getScoreFromFirebase } from '../../firebase/utils'
import { PokemonContext } from '../../Context/PokemonContext'
import { pokemonsData } from '../../Info/pokemonContent.json'
import { AddScore } from '../../Interfaces/PokemonContextInterface'

import './styles.css'

const Ranking = () => {
  const { dispatch, setDeck } = useContext(PokemonContext)
  const [listOfRanking, setListOfRanking] = useState<AddScore[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getScoreFromFirebase()
      .then(res => setListOfRanking(res as AddScore[]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='ranking-background'>
      <div className="ranking-position">
        {loading && <div className='loader-container'><span className="loader" /></div>}
        {!loading && <ListOfRanking listOfRanking={listOfRanking} />}
      </div>
      <Button
        text='Exit'
        handleClick={() => {
          setDeck(shuffleArray(pokemonsData))
          dispatch({ type: ACTIONS.RESET_GAME, payload: { name: '', number: 0 } })
        }}
      />
    </div>
  )
}

export default Ranking
