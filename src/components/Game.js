import { useContext } from "react"
import { onLike, unLike } from "./functionComponents/reuseables"
import { HeartFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { Important } from "../App"



function Game(Props) {
  const {user} = useContext(Important)
  const{picture,value,expected,thegame} = Props
  
  return (
    <div className='game'>
        <img src={picture} alt={value}/>
        <div className="spaceBetween">
        <span className="value"><Link to={expected}>{value}</Link></span><HeartFill className={thegame.likedby.includes(user._id)?'red':'heart'} size={20} onClick={()=>{thegame.likedby.includes(user._id)?unLike(thegame._id,user._id):onLike(thegame._id,user._id)}}/>
        </div>
    </div>
  )
}

export default Game
