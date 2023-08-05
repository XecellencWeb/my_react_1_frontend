import React, { useRef, useState } from 'react'
import { EmojiSmile,Eye,EyeSlash} from 'react-bootstrap-icons'
import {data,vallidateAll,setData,togglePassword} from '../components/functionComponents/Form'
import axios from 'axios'





export default function Signup() {
   
    const HandleSubmit = async (e)=>{
        e.preventDefault()
        console.log(data)
        try {
           const result =  await axios.post('/auth', data)
           console.log(result.data)
           const user = JSON.stringify(result.data)
           localStorage.setItem('user',user)
           window.location.href = '/'

        } catch (error) {
            console.log(error.response)
        }
    
    }

    const [istoggled,setIstoggled] = useState(true)
    const ref = useRef(undefined)
    const passwordError = useRef(undefined)
    const fullNameError = useRef(undefined)
    const emailError = useRef(undefined)
    const userNameError = useRef(undefined)
    const submitButton = useRef(undefined)
    
  return (
    <form className='form' onSubmit={HandleSubmit}>
        <h1><EmojiSmile size={50}/><br/>Register Now, and have access to alot of features in this website</h1>
        <input className='focus' type='text' placeholder='Enter Full Name'  onChange={e=>setData({
            value:e.target,
            what:'fullName',
            regexp:/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/,
            message:'Wrong full Name',
            errElement:fullNameError.current})}
            onBlur={_=>vallidateAll(4,submitButton.current)}
            />
        <span className='error' ref={fullNameError}></span>
        <div className='password'>
        <input className='focus' type='password' placeholder='Enter Password'onChange={(e)=>setData({
            value:e.target,
            what:'password',
            regexp:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            message:'Wrong password',
            errElement:passwordError.current})} ref={ref}
            onBlur={_=>vallidateAll(4,submitButton.current)}/>
        {istoggled?<Eye size={25} className='eye' onClick={_=>setIstoggled(togglePassword(ref.current))} />:<EyeSlash size={25} className='eye' onClick={_=>setIstoggled(togglePassword(ref.current))}/>}
        </div>
        <span className='error' ref={passwordError} ></span>
        <input className='focus' type='email' placeholder='Enter Email Adress' onChange={(e)=>setData({
            value:e.target,
            what:'email',
            regexp:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message:'Wrong email address',
            errElement:emailError.current})}
            onBlur={_=>vallidateAll(4,submitButton.current)}/>
        <span className='error' ref={emailError}></span>

        <input className='focus' type='text' placeholder='Enter User Name' onChange={(e)=>setData({
            value:e.target,
            what:'userName',
            regexp:/^[A-Za-z][A-Za-z0-9_]{7,29}$/,
            message:"Wrong Username",
            errElement:userNameError.current})}
            onBlur={_=>vallidateAll(4,submitButton.current)}/>
        <span className='error' ref={userNameError}></span>

        <input disabled={true} className='blured' type = 'submit' value='Sign Up' ref={submitButton} />

            
      
    </form>
  )
}
