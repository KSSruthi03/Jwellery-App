import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
    const [name, setName]    = useState('')
    const [email, setEmail]  = useState('')
    const [pass, setPass ]   = useState('')
    const Nav = useNavigate()

    function handleAdminlogin(){
         if (name === 'Sruthi K S'  & pass === '1234'  ){
            alert("Admin Login Sucessfull!")
            Nav('/add')
        }
        else{
             alert(" Login Failed!")
            
        }

    }



  return (
    
    <div style={{backgroundImage:"URL(https://cdn.shopify.com/s/files/1/0507/9865/7726/files/south-indian-jewelley-800x800_1024x1024.jpg?v=1680542573)", width:"70%", height:"500px", fontFamily:"cursive",
                 flex:"weap", borderRadius:"10px", marginLeft:"170px", marginTop:"80px",color:"white"}}>
    <h2 style={{fontSize:"40px",marginTop:"20px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp; Welcome To Moharika!</strong></h2>
    <br></br><h3> Admin Login</h3><br></br>

    <input style={{borderRadius:"10px",}} type='text' placeholder='Admin Name' value={name} onChange={(e) => setName(e.target.value)}></input><br></br><br></br>

    <input  style={{borderRadius:"10px"}} type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>

    <input style={{borderRadius:"10px"}} type='text' placeholder='Enter Password' value={pass} onChange={(e) => setPass(e.target.value)}></input><br></br><br></br>

    <button  style={{borderRadius:"10px"}} onClick={handleAdminlogin}>Login</button>
      
        
      
    </div>
  )
}

export default Admin
