import { useState, useEffect} from "react"
import axios from 'axios'


function FetchGame() {
    const [games,setGames] = useState()
    useEffect(()=>{
        const fetchgames = async ()=>{
          try {
            const {data} = await axios.get(`/games/games`)
            console.log(data)
            setGames(data)
          } catch (err) {
            console.log(err.response)
          }
        }
        fetchgames()
      },[ ])
        return games    
}

export default FetchGame
