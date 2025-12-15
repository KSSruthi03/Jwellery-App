import React, { useContext, useState, useEffect } from 'react'
import Footer from './Footer'
import { myContext } from "./Context";
import { Link, useNavigate } from 'react-router-dom';

function Userpage() {
  const { product = [], like = [], setLike = () => { }, cart = [], setCart = () => { } } = useContext(myContext)
  const [filteredData, setFilteredData] = useState(product || [])
  const [searchquery, setSearchquery] = useState('')
  const nav = useNavigate()



  function handleLike(prod) {
    if ((like || []).includes(prod)) {
      setLike((like || []).filter(item => item !== prod))

      // nav('/details')
    }
    else {
      setLike([...(like || []), prod])
    }
  }

  function handleAddtocart(prod) {
    if ((cart || []).includes(prod)) {
      setCart((cart || []).filter(item => item !== prod))
    }
    else {
      setCart([...(cart || []), prod])
    }
  }





  function searchpro(prod) {
    const query = prod.target.value
    setSearchquery(query)

    const filtered = product.filter(p =>
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.price.toString().includes(query))

    setFilteredData(filtered)


  }
  return (
    <div style={{ backgroundColor: "linen", flexWrap: "wrap", fontFamily: "cursive", width: "100%", height: "2000px" }}>
      <h2></h2>
      <div className='header'>

        <img src='https://t3.ftcdn.net/jpg/02/92/45/44/240_F_292454467_BZzvxiKurcXjNV6EHc2ap5JqmXF69ojA.jpg' style={{ width: "100%", height: "400px" }} ></img>
      </div>
      <div><h2 style={{ fontFamily: "cursive", textAlign: "center", fontSize: "60px", marginTop: "-300px", marginLeft: "570px", color: "white" }}><strong>Moharika</strong></h2></div>
      <div> <img src='https://t3.ftcdn.net/jpg/15/34/53/38/240_F_1534533895_ryJk6aSD8z3t2iwgH9Rz8I2O5d0kp77A.jpg' style={{ width: "100%", height: "400px", marginTop: "200px" }} ></img></div>
      <div><h2 style={{ fontFamily: "cursive", textAlign: "center", fontSize: "20px", marginTop: "-370px", marginLeft: "-840px", color: "white" }}><strong>Find Your Perfect Match</strong></h2>
        <h3 style={{ fontFamily: "cursive", textAlign: "center", fontSize: "15px", marginTop: "-10px", marginLeft: "-840px", color: "white" }} >Shop by Categories</h3></div>

      <div style={{ marginTop: "400px", }}>
        <h2>Moharika Collections</h2>
        <h3>Explore our newly launched collection</h3><br></br><br></br></div>
        {/*********************************************************************************** */}
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", justifyContent: "center" }}>

          <button style={{ width: "10%", backgroundColor: "green" }}>
            <Link style={{ color: "white", textDecoration: "none" }} to={'/wishlist'}>Like</Link></button> &nbsp;
          <button style={{ width: "10%", backgroundColor: "green" }}>
            <Link style={{ color: "white", textDecoration: "none" }} to={'/cart'}>Cart</Link></button>
          <input style={{ marginLeft: "1200px", marginTop: "-30px" }} onChange={searchpro} type="text" placeholder='Search Here....' /></div>


          <div style={{ display: "flex", flexWrap: "wrap", gap: "45px" }}>

            {
              filteredData.map((pdt, id) =>
                <Link
                  to={`/details/${pdt.id}`}
                  key={id}
                  style={{ textDecoration: "none", color: "inherit" }}>

                  <div style={{
                    boredr: "1px solid black", borderRadius: "5px", padding: "10px", marginLeft: "10px",
                    marginTop: "40px", textAlign: "center", border: "2px solid blue", borderRadius: "10px"

                  }}

                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>

                    <img src={pdt.image} alt="" style={{ width: "300px", height: "350px", objectFit: "cover", }} /><br />
                    <strong>{pdt.category}</strong>
                    <strong>  {pdt.price}&nbsp; ₨</strong><br />
                    {/* {pdt.description} <br /> */}


                    <table style={{ marginLeft: "50px" }}>
                      <tr>
                        <th><button onClick={(e) => { e.preventDefault(); handleLike(pdt) }} style={{
                          display: "flex", flexWrap: "wrap", padding: "10px",
                          width: "100px", height: "40px", borderRadius: "10px"
                        }} >
                          {
                            like.includes(pdt) ? "Unlike👎" : "Like👍"
                          }</button></th>

                        <th><button onClick={(e) => { e.preventDefault(); handleAddtocart(pdt) }} style={{
                          display: "flex", flexWrap: "wrap", padding: "10px",
                          width: "135px", height: "40px", borderRadius: "10px"
                        }} >
                          {
                            cart.includes(pdt) ? "Added" : "Add to cart🛒"
                          }</button></th>

                      </tr></table>
                  </div>
                
                </Link>
                
                        )}
          
</div><br/><br/>
<Footer/></div>
)
}
          export default Userpage

