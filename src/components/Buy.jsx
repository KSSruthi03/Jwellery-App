import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { list } from './Pdtlist'
import Footer from './Footer';

function Buy() {

    const [fname, setFName] = React.useState('')
    const [lname, setLName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [num, setNum] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [state, setState] = React.useState('')
    const [pin, setPin] = React.useState('')
    const [city, setCity] = React.useState('')      
    const Nav = useNavigate()
    const { id } = useParams();
    const pdt = list.find(p => p.id.toString() === id);
    if (!pdt) return <h2>Loading...</h2>;
    

    function handleConfirm() {
        alert("Purchase Confirmed! Thank you for shopping with Moharika💕");
         Nav ('/home')
    }

    function handleSave() {
        if(fname === ''  || lname === '' || email === '' || num === '' || country === '' || state === '' || pin === '' || city === '')     {
            alert("Please fill in all the required fields.");
            
        }
        else{
             alert("Your Adress has been saved successfully!");
        }
    
}




    return (
        <div style={{ alignItems: "center", fontFamily: "cursive", backgroundColor: "linen", height: "1200px", paddingTop: "20vh", width: "100%" }}>

            <div className='product details' style={{ marginTop: "-90px" }}>
                <h2><strong>Ready to Order?</strong></h2>
                <img src={pdt.image} alt="product" className='img-fluid' style={{ width: "450px", height: "400px", objectFit: "cover", borderRadius: "5px", border: "black" }}></img>
                <p ><strong>{pdt.description}</strong></p><br />
                <h3 ><strong>Price ₹ {pdt.price}</strong></h3><br /><br />
            </div><br />

            <div className='shipping adress' style={{backgroundColor:"burlywood", width:"100%", height:"550px",}}>
                <h4 style={{marginLeft:"50px"}}><strong>Delivery Aderss & Payment</strong></h4>
                <table style={{ marginLeft:"180px" }}><br/>
                    <tr>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" placeholder='Enter A Valid Email Adress' value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "300px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}></input></tr>
                    <tr>Contact Number:<input type="text" placeholder='Enter Contact Number' value={num} onChange={(e) => setNum(e.target.value)} style={{ width: "300px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}></input></tr>


                    <tr>First Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder=' Name' value={fname} onChange={(e) => setFName(e.target.value)} style={{ width: "300px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}></input></tr>
                    <tr> Last Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder='Name'  value={lname} onChange={(e) => setLName(e.target.value)} style={{ width: "300px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}></input></tr>


                    <tr>Country: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder=' India' value={country} onChange={(e) => setCountry(e.target.value)} style={{ width: "300px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}></input></tr>
                    <tr> State: &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder=' State' value={state} onChange={(e) => setState(e.target.value)} style={{ width: "300px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}></input></tr>

                    <tr>Pincode: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" placeholder=' Pincode' value={pin} onChange={(e) => setPin(e.target.value)} style={{ width: "300px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}></input></tr>
                    <tr> City: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder=' City' value={city} onChange={(e) => setCity(e.target.value)} style={{ width: "300px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}></input></tr>
                    
                    <button style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor:"burlywood" }} onClick={handleSave}>Save Adress</button>

                </table>

                <div style={{ marginLeft: "900px", marginTop: '-290px', backgroundColor: "lightgrey", width: "400px", padding: "10px", borderRadius: "5px" }}>
                    <h3>Payment Method:</h3>
                    <select style={{ width: "350px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}>
                        <option value="creditcard">Credit Card</option>
                        <option value="debitcard">Debit Card</option>
                        <option value="netbanking">Net Banking</option>
                        <option value="cod">Cash on Delivery</option>
                    </select>
                    {/* <select  name="item numbers" value={Number} style={{ width: "350px", height: "30px", marginBottom: "10px", borderRadius: "5px" }}>
                        <option value='0 Item'>0 Item</option>
                         <option value='1 Item'>1 Item</option>
                        <option>2 Item</option>
                        <option >3 Item</option>
                        <option>4 Item</option>
                        <option >5 Item</option>
                        <option>6 Item</option>
                    </select> */}


                    <h3 ><strong>Total ₹ {pdt.price}</strong></h3>
                    <p>"This Oreder shipps free"</p>
                    <button style={{ padding: "10px 20px", borderRadius: "5px", }} onClick={handleConfirm}>Confirm Purchase</button>

                </div>


            </div>
            <br /><br />  <br /><br />  

            <Footer />
        </div>
    )
}

export default Buy
