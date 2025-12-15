import React, { useContext } from 'react'
import { myContext } from './Context';

function Cartjwel() {
    const{cart} = useContext(myContext);
        console.log("Cart Items", Cartjwel);


  return (
     <div style={{ padding:"20px", fontFamily:"cursive", backgroundColor:"linen", }}>
        <br/>
        <h2 style={{ textAlign:"center",marginBottom:"20px"}}> <strong>Cart Products by Moharika</strong></h2> <br/> <br/><br/> <br/>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px",marginTop:"-50px"}}></div>

         { cart.length > 0 ? cart.map(item => (
                <div 
                key= {item.productname}
                style={{
                    width:"250px", border:"1px solid #ddd",borderRadius:"10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",padding:"15px"
                }}>

            <img src= {item.image} alt={item. category} style={{width:"230px", height:"250px", objectFit:"cover", borderRadius:"8px"}}></img>      
            <h4 style={{marginTop:'10px'}}>{item. category}</h4>
            {/* <p style={{color:"#555",fontSize:"14px"}}>{item.category}</p> */}
            <h3 style={{color:"#e91e63"}}>₹{item.price}</h3>
            {/* <p style= {{ fontSize: "14px", color:"#777"}}>Quantity: {item.quantity}</p> */}

             </div>
            )) : (
            <p style={{ textAlign: "center", color: "#999"}}>No Liked items to display.</p>
            )
            }
        </div>
    
  )
}

export default Cartjwel
