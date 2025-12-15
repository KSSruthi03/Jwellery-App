import React, { useContext } from 'react'
import { list } from './Pdtlist'
import { useParams } from 'react-router-dom'
import { myContext } from './Context'

function Jwelcat() {

    const {product} = useContext(myContext)
    const{cat} = useParams()

    const products = product.filter(pr => pr.category ===  cat)
    console.log("products", products. cat);


  return (
    <div   style={{ display:"flex", flexWrap:"wrap", gap:"20px"}}>
      {
        list.map(prd =>
          <div style={{border:"1px solid black", borderRadius:"5px", padding:"10px", boxShadow:"2px 2px 5px gray"}}>
            <h2> {prd.category}</h2>
            <img src={ prd.image } alt={prd} style={{width:"200px", height:"300px"}}></img>
            <h3>  ₹ {prd.price }</h3>
            </div>
        )
      }
      
    </div>
  )
}

export default Jwelcat
