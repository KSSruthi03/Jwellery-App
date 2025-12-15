import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Login() {
     const [name, setName]  = useState('')
     const [pass, setPass]  = useState('')
     const nav = useNavigate()

     function handleLogin(){
        if (name === ''  || pass === '' ){
            alert("All fields are required!")
        }
        else{
             alert("Login Sucessfull!")
             nav('/user')
        }

     }
     




  return (
    
    <div style={{backgroundImage:"URL(https://t4.ftcdn.net/jpg/03/68/74/75/360_F_368747591_FoUesnOvXzdm3eW3gTUIp822YxbcHW8N.jpg)", width:"70%", height:"500px", fontFamily:"cursive",
                 flex:"weap", borderRadius:"10px", marginLeft:"170px", marginTop:"90px",color:"white"}}><br></br><br></br>
        
        <h2 style={{fontSize:"40px",marginTop:"50px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp; Welcome To Moharika!</strong></h2>
        <br></br><p>Login to get exclusive Moharika privilleges</p><br></br>

        Username: <input style={{borderRadius:"10px",}} type='text' placeholder='Enter Username' value={name} onChange={(e) => setName(e.target.value)}></input><br></br><br></br>

        Password: <input style={{borderRadius:"10px"}} type='text' placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)}></input><br></br><br></br>

        <button  style={{borderRadius:"10px"}} onClick={handleLogin}>Login</button>
        &nbsp;&nbsp;&nbsp;<Link to={'/reg'}>Sign up</Link>
      
    </div>
  )
}

export default Login
