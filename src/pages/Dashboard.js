import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router"
import { Important } from "../App"



function Dashboard() {
    const {user,userRaw} = useContext(Important)
    const navigate = useNavigate()
    
        if(userRaw === null) window.location.href = '/'
  
   
   
   
    const data = {token:user.token}
    const updateData = async (e)=>{
        e.preventDefault()
        const{_id} = user
        console.log(_id);
        console.log(data);
        try {
            await axios.put(`/auth/${_id}`,data)
            navigate('?updated')
            let updateUser = {...user,...data}
            localStorage.setItem('user',JSON.stringify(updateUser))
        } catch (error) {
            document.write('An Error Occured')
        }
    }
  return (

    <form className="form" onSubmit={updateData}>
        <h1>{user.fullName} Dashboard</h1>

        <input type="text" defaultValue={user.userName} onBlur={(e)=>data.userName = e.target.value}/>
        <input type="text" defaultValue={user.fullName}  onBlur={(e)=>data.fullName = e.target.value}/>
        <input type="email" defaultValue={user.email} onBlur={(e)=>data.email = e.target.value}/>
        <input type="number" defaultValue ={user.phoneNumber} placeholder="Add a phone Number" onBlur={(e)=>data.phoneNumber = e.target.value}/>

        <input type="submit" value="Update your Data"/>

    </form>
  )
}

export default Dashboard
