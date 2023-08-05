import Game from "../components/Game"
import FetchGame from "./Admin/fetch/FetchGame"
function Puzzle() {
  const puzzle = FetchGame()
  let games
  if(puzzle){
   games = puzzle.filter((game)=>{
      return game.categories.includes('puzzle')
  })
 
}
  return (
    < div className="game-container">
     {
      games && games.map(game =>(
        <Game picture={game.pictures[0]} value={game.name} expected={`/game/${game._id}`}/>
      ))
     }
    </div>
  )
}

export default Puzzle
