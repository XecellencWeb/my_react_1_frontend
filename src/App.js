import { createContext, useEffect, useState} from "react"
import Navbar from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import Action from "./pages/Action"
import Adventure from "./pages/Adventure"
import Arcade from "./pages/Arcade"
import Puzzle from "./pages/Puzzle"
import Educative from "./pages/Educative"
import Heading from "./components/Heading"
import NotFound from "./pages/NotFound"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import axios from "axios"
import Dashboard from "./pages/Dashboard"
import Admin from "./pages/Admin/Main"
import Games from "./pages/Admin/Games"
import AddGame from "./pages/Admin/AddGame"
import Users from "./pages/Admin/Users"
import AdminNav from "./pages/Admin/AdminNav"
import Description from "./pages/Description"
import EditGame from "./pages/Admin/EditGame"

export const Important = createContext()


axios.defaults.baseURL = 'https://mygamereactapp.onrender.com'
axios.defaults.headers.common['Accept'] = 'application/json'

function App() {
  const[user,setUser] = useState()
  const [state, setState] = useState()
  const [usersCount,setUsersCount] = useState()
  const [gamesCount,setGamesCount] = useState()
  const userRaw = localStorage.getItem('user')
  
  
  useEffect(()=>{
    if(userRaw) setUser(JSON.parse(userRaw)) 
  },[])

  useEffect(()=>{
   if(user){
  const verifyAdmin = async()=>{
    
      try {
       const{status} = await axios(`/auth/isAdmin/${user.token}`)
       setState(status)
      
      } catch (error) {
        setState(error.response.status)
       
      }
      
       
      
  }
    verifyAdmin()
   
   const returnUsersCount = async()=>{
    try {
      const {data} = await axios('/auth/countUsers')
      setUsersCount(data)
    } catch (error) {
      console.log(error)
    }
   }
    returnUsersCount()

   const returnGamesCount = async()=>{
    try {
      const {data} = await axios('/games/countGames')
      setGamesCount(data)
    } catch (error) {
      console.log(error)
    }
   }
    returnGamesCount()
  }
  
}, [user])

console.log(user)
useEffect(()=>{
if(state){
const newUserRaw = {...user,state}
localStorage.setItem('user',JSON.stringify(newUserRaw))


}
},[state])





  return (
    
  <Important.Provider value={{user,gamesCount,usersCount}}>
      <Heading/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/Action' element={<Action/>}></Route>
      <Route  path='/Arcade' element={<Arcade/>}></Route>
      <Route  path='/Adventure' element={<Adventure/>}></Route>
      <Route path='/Puzzle' element={<Puzzle/>}></Route>
      <Route path='/Educative' element={<Educative/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/AdminDashboard' element={<AdminNav/>}>
        <Route index element={<Admin/>}/>
        <Route path='Users' element={<Users/>}/>
        <Route path='Games' element={<Games/>}/>
        <Route path='AddGame' element={<AddGame/>}/>
      </Route>
      <Route path='editgame' element={<EditGame/>}/>
      <Route path="/game/:id" element={<Description/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Navbar/>
    </Important.Provider>
  )
}

export default App
