import Game from "../components/Game"
import FetchGame from "./Admin/fetch/FetchGame"


function Homepage() {
  const games = FetchGame()
  return (
    <div className="game-container">
      {games && games.map(game=>(
        <Game picture={game.pictures[0]} value={game.name} expected={`/game/${game._id}`} thegame={game}/>
      ))}
    </div>
  )
}

export default Homepage
