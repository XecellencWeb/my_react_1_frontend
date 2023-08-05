
import Game from "../components/Game"
import FetchGame from "./Admin/fetch/FetchGame"

function Action() {
  const action = FetchGame()
  let games
  if(action){
   games = action.filter((game)=>{
      return game.categories.includes('Action')
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

export default Action
