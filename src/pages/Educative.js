import Game from "../components/Game"
import FetchGame from "./Admin/fetch/FetchGame"

function Educative() {
  const Educative = FetchGame()
  let games
  if(Educative){
   games = Educative.filter((game)=>{
      return game.categories.includes('Educative')
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

export default Educative
