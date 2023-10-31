import { useContext } from 'react'
import Header from './Components/Header'
import Board from './Components/Board'
import Ranking from './Components/Ranking'
import WinnerModal from './Components/WinnerModal'
import RankingForm from './Components/RankingForm'
import { Button } from './Components/Button'
import { PokemonContext } from './Context/PokemonContext'

import './App.css'

function App () {
  const { showRanking, winner, dispatch, showForm } = useContext(PokemonContext)

  return (
    <>
      {!winner && !showRanking && !showForm &&
        <>
          <Header />
          <Board />
          <Button text='Show Ranking' handleClick={() => dispatch({ type: 'SHOW_RANKING' })} />
        </>
      }
      {winner && !showRanking && !showForm && <WinnerModal />}
      {showRanking && !winner && !showForm && <Ranking />}
      {showForm && !winner && !showRanking && <RankingForm />}
    </>
  )
}

export default App
