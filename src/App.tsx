import { useContext } from 'react'
import Header from './Components/Header'
import Board from './Components/Board'
import Ranking from './Components/Ranking'
import WinnerModal from './Components/WinnerModal'
import { Button } from './Components/Button'
import { PokemonContext } from './Context/PokemonContext'

import './App.css'

function App () {
  const { showRanking, winner, dispatch } = useContext(PokemonContext)

  return (
    <>
      <Header />
      <Board />
      <Button text='Ranking' handleClick={() => dispatch({ type: 'SHOW_RANKING' })} />
      {!winner && <WinnerModal />}
      {showRanking && <Ranking />}
    </>
  )
}

export default App
