
import { useContext, useRef, useState } from "react"
import { NavLink , Link } from "react-router-dom"
import DarkMode from "./DarkMode"
import { BoxArrowInLeft } from "react-bootstrap-icons"
import { DoorOpen } from "react-bootstrap-icons"
import { Delete } from "./functionComponents/reuseables"
import { Important } from "../App"



function Navbar() {
    const{user} = useContext(Important)
    const ref = useRef(null)  
    const [value, setValue] = useState(true)

        const toggleMenu = ()=>{
            setValue(!value)
            if(value===false)ref.current.style.visibility = 'hidden'
            else ref.current.style.visibility = 'visible'
        }
    
  return (
      <><span className="menu-ico" onClick={toggleMenu} >
      <span className="gg-menu"></span>
</span>
    <div className='vertical-navbar fixed-left' ref={ref} >
        <DarkMode className='darkAndroid' scale='.8'/>
        {(!user) ? <><NavLink to='/login'><BoxArrowInLeft />Log In</NavLink> <NavLink to='/Signup'><DoorOpen/>Sign Up</NavLink></>:<>
              <NavLink to='/Dashboard' className='dashboard'>Dashboard</NavLink>
              {(user.state === 200) && <NavLink className='dashboard admin' to='/AdminDashboard'>Admin Dashboard</NavLink>}
              </>
}
        <NavLink to='/'><span className="gg-games"></span>Home</NavLink>
        <NavLink to='/Action'><span className="gg-crowdfire"></span>Action</NavLink>
        <NavLink to='/Adventure'><span className="gg-abstract"></span>Adventure</NavLink>
        <NavLink to='Arcade'><span className="gg-arrow-top-right-r"></span>Arcade</NavLink>
        <NavLink to='Puzzle'><span className="gg-arrows-breake-h"></span>Puzzle</NavLink>
        <NavLink to='Educative'><span className="gg-album"></span>Educative</NavLink>
        {(user) && <><Link to='/?out' className="log-out">Logout</Link><button className="btn-element delete-account" onClick={()=>Delete('/auth/delete',user._id,user.token)}> Delete your account</button></>}
    </div>
    </>
  )
}

export default Navbar
