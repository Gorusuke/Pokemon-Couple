import { useState, useContext } from 'react'
import { Button } from '../Button'
import { pokemonsData } from '../../Info/pokemonContent.json'
import { shuffleArray } from '../../Utils/shuffleArray'
import { PokemonContext } from '../../Context/PokemonContext'
// import ListaRankings from './ListaRankings'
// import firebase from '../firebase/firebase'
// import 'firebase/firestore'
// import Spinner from './Spinner'

import './styles.css'
import { ACTIONS } from '../../contants'

const Ranking = () => {
  const { dispatch, setDeck, tries } = useContext(PokemonContext)
  const [listOfUsers] = useState(['vulpix', 'paras', 'gloom', 'nidoran-f', 'machop', 'nidoking', 'alakazam', 'venomoth', 'metapod', 'graveler'])
  // const [listOfUsers] = useState([])
  // const db = firebase.firestore()
  // const [blank, setBlank] = useState(false)
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   if (db) {
  //     const player = db
  //       .collection('Ranking')
  //       .orderBy('score', 'asc')
  //       .limit(10)
  //       .onSnapshot((querySnapshot) => {
  //         const data = querySnapshot.docs.map((doc) => ({
  //           ...doc.data(),
  //           id: doc.id
  //         }))
  //         limits(data)
  //         setLoading(false)
  //       })
  //     return player
  //   }
  // }, [db])

  // const limits = (arr) => {
  //   if (arr.length === 0) {
  //     setBlank(true)
  //     return
  //   }

  //   const ranked = arr.sort(function (x, y) {
  //     return x.score - y.score
  //   })

  //   if (ranked.length >= 11) {
  //     ranked.splice(ranked.length - 1, 1)
  //   }
  //   setArreglos(ranked)
  // }

  return (
    <div className='ranking-background'>
      <div className="ranking-position">
        {!listOfUsers.length
          ? <h2 className='no-score'>No scores yet</h2>
          : <>
            <h2 className='score'>Best scores</h2>
            <ul>
              {listOfUsers.map((user, index) => (
                <div key={`${user}-${index}`}>
                  <li className="winner-container">
                    {index + 1}. {user} <b>{tries}</b>
                  </li>
                </div>
              ))}
            </ul>
          </>
        }
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
