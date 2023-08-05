import Game from "../components/Game"
import FetchGame from "./Admin/fetch/FetchGame"

function Arcade() {
  const Arcade = FetchGame()
  let games
  if(Arcade){
   games = Arcade.filter((game)=>{
      return game.categories.includes('Arcade')
  })
  
}
  return (
    < div className="game-container">
     {
      games && games.map(game =>(
        <Game picture={game.pictures[0]} value={game.name} expected={`/game/${game._id}`} thegame={game}/>
      ))
     }
    </div>
  )
}

export default Arcade
