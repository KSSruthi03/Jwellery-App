import React, { useContext, } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { myContext } from './Context'
import Footer from './Footer'
import { Container, Navbar } from 'react-bootstrap'
import { list } from './Pdtlist'

function Detailspage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { like = [], setLike, cart, setCart } = React.useContext(myContext);
  console.log("id:", id);
  const pdt = list.find(p => p.id.toString() === id);
  console.log("pdt:", pdt);
  if (!pdt) return <h2>Loading product...</h2>






  function handlecart() {
    if (cart.includes(pdt)) {
      setCart(cart.filter((item) => item !== pdt))
    } else {
      setCart([...cart, pdt])
    }
  }

  function handleLike() {
    if (like.includes(pdt)) {
      setLike(like.filter((item) => item !== pdt))
    } else {
      setLike([...like, pdt])
    }
  }



  return (
    <div style={{ textAlign: "center", fontFamily: "cursive", backgroundColor: "linen", height: "1200px", paddingTop: "20vh", }}>
      <h2 style={{ marginTop: "-110px" }}><strong>Ornaments & Finery by Moharika</strong></h2><br /><br />

      {/* <Navbar style={{ backgroundColor: "linen", fontFamily: "cursive" }}>
        <Container><table >
          <tr><Navbar.Brand as={Link} to="/home" style={{ fontSize: "20px", marginLeft: "20px" }}>°Home Page </Navbar.Brand></tr>
          <tr> <Navbar.Brand as={Link} to="/user" style={{ fontSize: "20px", marginLeft: "20px" }}>°Browse Screen</Navbar.Brand></tr>
        </table>
        </Container>
      </Navbar> */}





      <h3 style={{ marginLeft: "1%", }} ><strong>{pdt.category || pdt.price}</strong> </h3>
      {/* <button
        onClick={handleLike}
        style={{ width: "20px", fontSize: "44px", marginTop: "9px", alignItems: "center", marginLeft: "40px" }}
        title={like.includes(pdt) ? "Liked" : "unliked"}>
        {
          like.includes(pdt) ? "❤️" : "🤍"
        }
      </button> */}

      <div className='details'>
        <img src={pdt.image} alt="product" className='img-fluid' style={{ width: "450px", height: "400px", objectFit: "cover", borderRadius: "5px", border: "black" }}></img>
      </div><br /><br />

      <div style={{ marginLeft: "400px", fontFamily: "cursive", color: "black", minHeight: "300px", display: "flex" }}>
        <p >{pdt.description}</p><br /><br />
        <h3 ><strong>Price ₹ {pdt.price}</strong></h3><br /><br />

        <br /><br /><br /><br />
        <button style={{ width: "170px", height: "40px", fontSize: "20px", backgroundColor: "green", color: "white", borderRadius: "10px", marginLeft: "-150px", marginTop: "50px" }}
          onClick={() => handlecart()}>
          {
            cart.includes(pdt) ? "Added 🛒" : "Add to Cart🛒"
          }</button>

        <button onClick={() => navigate(`/buy/${pdt.id}`)} style={{ width: "170px", height: "40px", fontSize: "20px", backgroundColor: "green", color: "white", borderRadius: "10px", marginLeft: "10px", marginTop: "50px" }}>
          Buy Now💰</button>

      </div>
      <Footer />
    </div>
  )
}

export default Detailspage

// 