import { useContext } from "react"
import { Important } from "../../App"
import { PersonFill, PlayCircleFill } from "react-bootstrap-icons";



function Main() {
  const {usersCount,gamesCount} = useContext(Important)

  console.log({usersCount,gamesCount});

  return (
    <div className='admin-container main'>
        <div className="items">
          <p>Number of Users</p>
          <PersonFill size={200} className="main-ico"/>
          <p>{usersCount}</p>
        </div>
        <div className="items">
          <p>Number of Games</p>
          <PlayCircleFill size={200} className="main-ico"/>
          <p>{gamesCount}</p>
        </div>
    </div>
  )
}

export default Main
