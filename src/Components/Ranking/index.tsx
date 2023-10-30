import { useState } from 'react'
import { Button } from '../Button'
// import ListaRankings from './ListaRankings'
// import firebase from '../firebase/firebase'
// import 'firebase/firestore'
// import Spinner from './Spinner'

import './styles.css'

const Ranking = () => {
  // const db = firebase.firestore()
  const [arreglos] = useState(['vulpix', 'paras', 'gloom', 'nidoran-f', 'machop', 'nidoking', 'alakazam', 'venomoth', 'metapod', 'graveler'])
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
        <h2>Ranking De Los Mejores</h2>
        <ul>
          {arreglos.map((arreglo, i) => (
            <div key={i}>
              <li className="winner-container">
                {i + 1}. {arreglo}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <Button />
    </div>
  )
}

export default Ranking
