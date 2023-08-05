import {useState,useContext, useEffect} from 'react'
import axios from 'axios'
import { Important } from '../../../App'


function FetchData() {
  const {user} = useContext(Important)
    const[allUsers,setAllUsers] = useState() 
  useEffect(()=>{
      const fetchuser = async ()=>{
        try {
          const {data} = await axios.get(`/auth/getUsers/${user.token}`)
          console.log(data)
          setAllUsers(data)
        } catch (err) {
          console.log(err.response)
        }
      }
      fetchuser()
    },[user])
      return allUsers    
    
  
}

export default FetchData
