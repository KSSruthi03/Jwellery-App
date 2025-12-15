import React, { useContext } from 'react'
import { myContext } from './Context';

function Wishlist() {
    const{like} = useContext(myContext);
    console.log("Liked Items", like);


  return (

     <div style={{ padding:"20px", fontFamily:"cursive",backgroundColor:"linen"}}>
        <h2 style={{ textAlign:"center",marginBottom:"20px"}}> Liked Products by Moharika</h2>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px"}}></div>

        { like.length > 0 ? like.map(item => (
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

export default Wishlist
