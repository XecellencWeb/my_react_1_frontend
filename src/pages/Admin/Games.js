import React, { useContext } from 'react'
import FetchGame from './fetch/FetchGame'
import { Link } from 'react-router-dom'
import { Important } from '../../App'
import { Delete } from '../../components/functionComponents/reuseables'
import { PenFill , Trash} from 'react-bootstrap-icons'

function Games() {
  const {user} = useContext(Important)
  const games = FetchGame()
  



  return(
    <div className="admin-container games">
      <div>
        {games && games.map(game =>(
          <div className='uploaded-game' key={game._id}>
            <div className='image-div'><img src={game.pictures[0]} alt={game.name}/></div>
            <div className='game-content'>
            <h3>{game.name}</h3>
            <p>{(game.description).slice(0,250)+'..........'}</p>
            <div className="likesNumber">{games.likesNumber}</div> 
            <div className='game-button'>
            <Link to={`/editgame?id=${game._id}`}><PenFill/>Edit Game</Link>
            <button onClick={()=>Delete('/games/delete',game._id,user.token)}><Trash/>Delete Game</button></div>  
            <p>Likes Number: {game.likesNumber}</p>
            </div> 
               
          </div>
        ))}
    </div>
    </div>
        )
}

export default Games
