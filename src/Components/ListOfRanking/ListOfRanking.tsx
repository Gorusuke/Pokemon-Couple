import { ListOfRankingProps } from '../../Interfaces/PokemonContextInterface'

const ListOfRanking = ({ listOfRanking }: ListOfRankingProps) => {
  return (
    <>
      {listOfRanking.length
        ? <>
            <h2 className='score'>Best scores</h2>
            <ul>
              {listOfRanking.map((user, index) => (
                <div key={`${user}-${index}`}>
                  <li className="winner-container">
                    {index + 1}. {user.name} <b>{user.score}</b>
                  </li>
                </div>
              ))}
            </ul>
          </>
        : <h2 className='no-score'>No scores yet</h2>
      }
    </>
  )
}

export default ListOfRanking
