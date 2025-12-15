import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <div className='footer' style={{ backgroundColor: "brown", height: '600px', width: "100%" }}>
      <p style={{ textAlign: "center", fontFamily: "cursive", fontSize: "60px", color: "linen", marginLeft: "-994px" }}> Moharika   </p>
      <h2 style={{ fontFamily: "cursive", fontSize: "30px", color: "linen",marginLeft: "-1000px",fontSize: "15px",}}><strong>Download the Moharika App Now</strong></h2>
      <br></br>
      <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0fa1b94a/images/footer/tanishq-app-QR-code.svg" style={{width:"120%", height:"170px",marginLeft:"-1000px"}}></img>

      <table  style={{ color: "linen", fontFamily: "cursive", fontSize: "15px", marginTop: "-220px", marginLeft: "500px", }}>
        <tr><th style={{textAlign:"left"}}>Useful Links</th></tr><br></br>
        <tr><td style={{textAlign:"left"}}> Delivery Information</td></tr>
        <tr><td style={{textAlign:"left"}}>Payment Options </td></tr>
        <tr><td style={{textAlign:"left"}}> Track Your Order</td></tr>
        <tr><td style={{textAlign:"left"}}> Return </td></tr>
        <tr><td style={{textAlign:"left"}}> Find A Store</td></tr>
      </table>

      <table  style={{ color: "linen", fontFamily: "cursive", fontSize: "15px", marginTop: "-170px", marginLeft: "750px", }}>
        <tr><th style={{textAlign:"left"}}>Information</th></tr><br></br>
        <tr><td style={{textAlign:"left"}}> Blog</td></tr>
        <tr><td style={{textAlign:"left"}}>Offers & Context Details </td></tr>
        <tr><td style={{textAlign:"left"}}> Help & FAQs</td></tr>
        <tr><td style={{textAlign:"left"}}> About Moharila</td></tr>
      </table>

      <table  style={{ color: "linen", fontFamily: "cursive", fontSize: "15px", marginTop: "-150px", marginLeft: "1050px", }}>
        <tr><th style={{textAlign:"left"}}>Contact Us</th></tr><br></br>
        <tr><td style={{textAlign:"left"}}> 1800-266-0123</td></tr>
        <tr><th style={{textAlign:"left"}}>Chat With Us </th></tr>
        <tr><td style={{textAlign:"left"}}>+91 8954672314</td></tr>
        <hr></hr><br></br>
        <tr>
          <td>
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd94cc295/images/footer/footer-whatsapp.svg" style={{width:"30px", height:"20px",marginTop:"-60px"}}></img>
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwca9d87e8/images/footer/footer-writetous.svg" style={{width:"30px", height:"20px",marginTop:"-60px"}}></img>
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw69956d76/images/footer/footer-chatwithus.svg" style={{width:"30px", height:"20px",marginTop:"-60px"}}></img>
        </td>
        </tr>
        </table>

       {/* <img src= "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe9d356b9/images/footer/footer-ios.svg" style={{marginTop:"40px", marginLeft:"-1110px",width:"80px"}}></img> 
       <img src= "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf3971307/images/footer/footer-playstore.svg" style={{marginTop:"40px", marginLeft:"-1500px",width:"80px"}}></img>  */}
        
        
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <hr  style={{ color: "linen", width:"1680px"}}></hr>
        <p style={{marginLeft:"290px",color: "linen", fontFamily: "cursive"}}>Social &nbsp;&nbsp; 
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwdd3964ee/images/footer/footer-instagram.svg"></img>&nbsp;&nbsp;
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw55bd73af/images/footer/footer-twitter.svg"></img>&nbsp;&nbsp;
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd3c8497b/images/footer/footer-fb.svg"></img>&nbsp;&nbsp;
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcf955502/images/footer/footer-youtube.svg"></img>&nbsp;&nbsp;
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe9d356b9/images/footer/footer-ios.svg"></img>&nbsp;&nbsp;
        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwf3971307/images/footer/footer-playstore.svg"></img></p>

        <br></br>
        <table style={{marginLeft:"650px",color: "linen", fontFamily: "cursive"}}>
          <tr><td>© 2025 Titan Company Limited. All Rights Reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Terms & Conditions&nbsp;&nbsp;&nbsp;  Privacy Policy&nbsp;&nbsp;&nbsp;  Disclaimer</td></tr>
        </table>



    </div>
  )
}

export default Footer
