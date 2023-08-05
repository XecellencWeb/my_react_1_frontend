

import axios from "axios"
function Login() {
    const user = {
        userName:'',
        password:''
    }

    const logMeIn = async (e)=>{
        e.preventDefault()
        console.log(user)
      try {
        const {data} = await axios.post('/auth/login',user)
            const result = JSON.stringify(data)
            localStorage.setItem('user',result)
            window.location.href = '/?login=true'
      } catch (error) {
        document.write(`${error.response.status} ${error.response.message}`)
      }
    }
  return (
    <form className="form" onSubmit={logMeIn}>
        <h1>Login In</h1>
        <input type="text"  placeholder="Enter username"  onChange={(e)=> user.userName = e.target.value}/>
        <input type="password" placeholder="Enter password" onChange={(e)=> user.password = e.target.value}/>
        <input type="submit"/>
    </form>
      
  
  )
}

export default Login
