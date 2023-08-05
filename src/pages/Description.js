import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router"
import FetchGame from "./Admin/fetch/FetchGame"
import Game from "../components/Game"
import { HeartFill } from "react-bootstrap-icons"
import { onLike , unLike} from "../components/functionComponents/reuseables"
import { Important } from "../App"


function Description() {
    const {user} = useContext(Important)
    const games = FetchGame()
 
    const {pathname} = useLocation()
    const gameId = pathname.split('/')[2]
    const [loading, setLoading] = useState(false)
    const [game, setGame] = useState()
    const [error, setError] = useState()

    const getGameById = async()=>{
        setLoading(true)
        try {
            //console.log(game)
            const {data} = await axios(`/games/games/${gameId}`)
           // console.log(data)
            setGame(data)
            console.log(game)
        } catch (err) {
            setError(err.response)
        }
        setLoading(false)
    }

    useEffect(()=>{
       gameId && getGameById()
    },[gameId])
    return(
       <div>
        {loading?
         <div>loading......</div>
          :error
        ?
        <div><h2>{error.status}</h2><p>{error.data}</p></div>
        :game && <div className="a-game"><div className="game-header"><div className="direction-shape"></div><div className="some-content"><h1>{game.name}</h1>
        <div className="game-likes"><HeartFill size={20} className={user && game.likedby.includes(user._id)?'red':'heart'} onClick={()=>{user && game.likedby.includes(user._id)?unLike(game._id,user._id):onLike(game._id,user._id)}}/><p>likes: {game.likesNumber}</p></div>
        </div></div>
        <div className="game-desc">{game.description}</div>
        <div className="game-images">
            {game.pictures.map((picture, index)=> (
               index !==0 && <img src={picture} alt={game.name}/>
            ))}
        </div>
        <h2>Related</h2>
        <div className="game-container relates-games">
            
        {games && games.filter((related)=>{return related.categories.includes(game.categories[0])}).map(relates => (
            
           relates._id !== gameId && <Game value={relates.name} expected={`/game/${relates._id}`} picture={relates.pictures[0]} thegame={relates} />
          
        ))}
        </div>
        </div>
    }
       </div>
    )
}

export default Description
