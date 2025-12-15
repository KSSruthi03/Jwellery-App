import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const [fname, setFName]  = useState('')
    const [lname, setLName]  = useState('')
    const [email, setEmail]  = useState('')
    const [pass, setPass]    = useState('')
     const Nav               = useNavigate()



    function handleReg(){
         if (fname === ''  || lname === '' || email === '' || pass === '' ){
             alert("All fields are required!")
         }else{
              alert("Registration Sucessfull!")
              Nav('/login')
         }
    }
  
  
  
  
    return (
 <div style={{backgroundImage:"URL(https://t3.ftcdn.net/jpg/06/00/79/56/240_F_600795636_44QuHjwNSxgc6nn2ZOEqvSiKj0mdab0t.jpg)", width:"70%", height:"500px", fontFamily:"cursive",
                 flex:"weap", borderRadius:"10px", marginLeft:"170px", marginTop:"90px",color:"white"}}>
        
        <h2 style={{fontSize:"40px",marginTop:"60px"}}><strong>&nbsp;&nbsp;&nbsp;&nbsp; Welcome To Moharika!</strong></h2>
        <br></br><p>First time using Moharika? Please register here.</p><br></br>

        <input style={{borderRadius:"10px",}} type='text' placeholder='Firstname' value={fname} onChange={(e) => setFName(e.target.value)}></input><br></br><br></br>
        <input style={{borderRadius:"10px",}} type='text' placeholder='Lastname' value={lname} onChange={(e) => setLName(e.target.value)}></input><br></br><br></br>
        <input  style={{borderRadius:"10px"}} type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>
        <input style={{borderRadius:"10px"}} type='text' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)}></input><br></br><br></br>

        <button  style={{borderRadius:"10px"}} onClick={handleReg}>REGISTER</button>
      
    </div>
    
      
    
  )
}

export default Registration
