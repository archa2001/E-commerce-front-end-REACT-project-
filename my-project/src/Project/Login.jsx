import React from 'react'
import './css/Login.css'
import { useState } from 'react'
import { useContext } from 'react'
import { mycontx } from './Context'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Login() {
  const {user,setUser}=useContext(mycontx)
        const {iduser, setIduser,name,setName,loguser,setLoguser,auth,setAuth,} = useContext(mycontx)
    const[mailuser,setMailuser]=useState("");
    const[passuser,setPassuser]=useState("");
    
    
    const nav=useNavigate()
    function log(){
      const loggedUser= user.find(
        (user) => user.mail ==mailuser && user.password == passuser
    )
    if(loggedUser){
      setLoguser(loggedUser)
      alert("Login Successful!!");
      nav("/");
    }

      else{
          alert("User doesn't Exist")
      }
      
    }
  return (
    <div className='login'>
      <h1 className='h1-login'>Login</h1>
      <div className='login-input'>
     
      <input type="email" value={mailuser} placeholder='Email' onChange={(e) =>setMailuser(e.target.value)}/><br></br>
      <input type="password" value={passuser} placeholder='password' onChange={(e) => setPassuser(e.target.value)}/><br></br><br></br>
      <button onClick={log}>Login</button>
      <h5 className='log-reg'>don't have an account?<Link to='/register'>Register Here</Link></h5>
      </div>
    </div>
  )
}
