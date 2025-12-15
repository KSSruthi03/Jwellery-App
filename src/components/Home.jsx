


import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext, useState } from "react";
import { myContext } from "./Context";
import Footer from "./Footer";
import Carouselitems from "./Carouselitems";





function Home() {
  const { product } = useContext(myContext)
  const {que} = useParams();
const [filteredData, setFilteredData] = useState(product);
  const Nav = useNavigate()


  function handleselect(e) {
    const selectedCategory = e.target.value;

    if (selectedCategory === "Select Category") {
      setFilteredData(product);
      return;
    }

    const filtered = product.filter(item=> item.category === selectedCategory);
    setFilteredData (filtered);
    Nav(`/home/${selectedCategory}`);
  }
  const categories = [...new Set(product.map(product => product.category))]
  console.log("category:", categories);



  function buttonClick1() {
    Nav ('/login')
    
  }
function buttonClick2() {
    Nav ('/admin')
    
  }


  


  return (
    <div style={{ backgroundColor: "linen", flexWrap: "wrap" }}>
      <div className='header' style={{ backgroundColor: "linen", marginTop: "-30px", height: "150px" }}>
        <br /><br /><h2 style={{ textAlign: "center", fontFamily: "cursive", fontSize: "60px", }}> Moharika  </h2>

        <select style={{ padding: "4px 5px", boxShadow: "2px 3px", marginLeft: "-1300px",borderRadius: "10px" }} onChange={handleselect}>
          <option > Select Category</option>
          {
            categories.map(cate =>
              <option>{cate}</option>
            )}
        </select>

        {/* *********************************************8 */}
        <div style={{ marginTop: "-7px" }}>
          <button style={{ fontFamily: "cursive", borderRadius: "5px", marginLeft: "1300px", marginTop: "0px" }} button onClick={buttonClick1}>Login</button>
          <button style={{ fontFamily: "cursive", borderRadius: "5px", marginLeft: "25px" }} button onClick={buttonClick2}>Admin Login</button>
        </div>
      </div>


      <div className='carosel' style={{ height: '600px', width: "100%", borderRadius: "10px", marginTop:'40px' }}>
        <Carouselitems />
      </div>
      <br /><br />
      <div>
        <h3 style={{ textAlign: "center", fontFamily: "cursive", fontSize: "30px" }}><b>Moharika Collections</b></h3>
        <p style={{ textAlign: "center", fontFamily: "cursive", fontSize: "10px" }}>"The Signature Of Your Unique Style"</p>
      </div>

      <div className="product list" style={{ display: "flex", flexWrap: "wrap", objectFit: "cover", gap: "40px", backgroundColor: "linen", }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "45px" }}></div>
        {filteredData.map((pdt) =>
          <div style={{ boredr: "#000000", borderRadius: "10px", padding: "10px", marginLeft: "10px", marginTop: "40px", textAlign: "center", border: "2px solid blue", borderRadius: "10px" }}>

            <img src={pdt.image} alt="" style={{ width: "300px", height: "400px", objectFit: "cover", borderRadius: "5px" }} /><br />
            <b> {pdt.category} <br /></b>
            {/* <b>{pdt. description}</b> */}
            <strong>  {pdt.price}&nbsp; ₨</strong><br />
            

          </div>
        )
        }
      </div><br /><br />


      <Footer />
    </div>

  )
}

export default Home
