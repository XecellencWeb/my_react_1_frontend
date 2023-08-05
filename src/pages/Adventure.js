import Game from "../components/Game"
import FetchGame from "./Admin/fetch/FetchGame"

function Adventure() {
  const adventure = FetchGame()
  let games
  if(adventure){
   games = adventure.filter((game)=>{
      return game.categories.includes('Adventure')
  })
  
}
  return (
    < div className="game-container">
     {
      games && games.map(game =>(
        <Game picture={game.pictures[0]} value={game.name} expected={`/game?id=${game._id}`} thegame={game}/>
      ))
     }
      
    </div>
  )
}

export default Adventure
