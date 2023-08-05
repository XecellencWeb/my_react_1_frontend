
import {NavLink ,Outlet} from 'react-router-dom'
import { PersonFill, Plus , Database , PlayFill } from 'react-bootstrap-icons'


function AdminNav() {
  const user = JSON.parse(localStorage.getItem('user'))
 
        if(!user || user.state !== 200) window.location.href = '/'
  
        const icosize = 20
      const whenActive =  {
            textDecoration: 'underline',
            fontWeight:'350'
        }
  
  return (
    <div className='all-admins'>
    <div className='menu'>
      <div><PersonFill size={25}/>{user.fullName}</div>
    <NavLink to=' ' style={({isActive})=>{return isActive ? whenActive : {}}}><Database size={icosize}/>Main </NavLink>
    <NavLink to='Users' style={({isActive})=>{return isActive ? whenActive : {}}} ><PersonFill size={icosize}/> Users</NavLink>
    <NavLink to='Games' style={({isActive})=>{return isActive ? whenActive : {}}} ><PlayFill size={icosize}/>Games</NavLink>
    <NavLink to='AddGame' style={({isActive})=>{return isActive ? whenActive : {}}} ><Plus size={icosize}/>Add A new Game</NavLink>
  </div>

  <Outlet/>
  </div>
  )
}

export default AdminNav
