import image from "../images/game-pad.png"
import {Link , useLocation} from "react-router-dom"
import { BoxArrowInLeft, DoorOpen , PersonFill} from "react-bootstrap-icons";
import DarkMode from "./DarkMode";
import { useState, useRef , useContext} from "react";
import { Important } from "../App";
import { Delete } from "./functionComponents/reuseables";







function Header() {
 
  
  const important = useContext(Important)
  const {user} = important
  const {search}= useLocation()
  const [toggle,setToggle] = useState(true)
  const profile = useRef()
  const profileOption = useRef()
  const toggleProfile = ()=>{
    if(user){
    if(!user.state) window.location.href = '/'
    }
   if(toggle)profileOption.current.style.visibility = 'visible'
   else profileOption.current.style.visibility = 'hidden'
   setToggle(!toggle)
  }


  
  
 

  if(search === '?out'){localStorage.removeItem('user')
  window.location.href = '/'
}
    

  return (
    <div className="head-component">


        <div className="logo">
        <img src={image} alt="Page Logo"/>
        <h2>My React App</h2>
        </div>

        <div className="head-items">
          
            <DarkMode scale="1"/>
            {!user ?<><Link to='/login'><BoxArrowInLeft />Log In</Link> <Link to='/Signup'><DoorOpen/>Sign Up</Link></>:<><PersonFill size={30} className="profile" onClick={toggleProfile} ref={profile} />profile
            <div className="fixed-right profile-option" ref={profileOption}>
              
              <Link to='/Dashboard'>Dashboard</Link>
              {(user.state === 200) && <Link to='/AdminDashboard'>Admin Dashboard</Link>}
              <Link to='/?out' className="log-out">Logout</Link>
              <button className="btn-element delete-account" onClick={()=>Delete('/auth/delete',user._id,user.token)}> Delete your account</button>
            </div></>
}
        </div>
      
    </div>
  )
}

export default Header
