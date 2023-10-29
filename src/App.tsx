import Header from './Components/Header'
import Board from './Components/Board'
import './App.css'

function App () {
  // const [count, setCount] = useState(0)
  // const {intentos, winner, loading, playAgain, setIntentos, setWinner} = useContext(PokemonContext)
  return (
    <>
      <Header />
      <Board />
    </>
  )
}

export default App
