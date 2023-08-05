
import { useContext } from "react"
import FetchData from "./fetch/FetchData"
import { Important } from "../../App"
import { Delete } from "../../components/functionComponents/reuseables"




function Users() {

 const {user} = useContext(Important)




 
  const allUsers = FetchData() 

  return (
    <div className="admin-container users">
      <div className="table-container">
      <table border={2}>
       <thead> <tr className="data">
          <th className="header">User Id</th>
          <th className="header">Full Name</th>
          <th className="header">UserName</th>
          <th className="header">Email</th>
          <th className="header">Phone Number</th>
          <th className="header">Delete User</th>
        </tr></thead>
        <tbody>
         {(allUsers) && allUsers.map(person => (
          
          <tr key={person._id} className="data">
                   <td data-cell='User Id'>{(person._id === user._id)?'Your Account':person._id}</td>
                   <td data-cell='Full Name'>{person.fullName}</td>
                   <td data-cell='UserName'>{person.userName}</td>
                   <td data-cell='Email'>{person.email}</td>
                   <td data-cell='Phone Number'>{`${person.phoneNumber}`}</td>
                   <td data-cell='Delete User'><button onClick={()=>Delete('/auth/delete',person._id,user.token)} >Delete Account</button></td>
          </tr>
         
         )) } 
          </tbody>
        
    </table>
    </div>
    </div>
        )
      }

export default Users
