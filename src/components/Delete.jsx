import React, { useContext, useState } from 'react'
import { myContext } from './Context';
import Footer from './Footer';
import { list } from './Pdtlist';

function Delete() {


    const { product, setProduct } = useContext(myContext)
    const [pdtname, setPdtname] = useState('')
    const [category, setPdtcategory] = useState('')

    function Deletepro() {
        if (!pdtname || !category) {
            alert(" Please enter both product name and category");
            return;
        }
        const deletingitem = product.find(
            (listitem) => listitem.pdtname.toLowerCase() === pdtname.toLowerCase()
                && listitem.category.toLowerCase() === category.toLowerCase());

        if (!deletingitem) {
            alert(" No product found with this name and category");
            return;
        }

        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;

        }


        // delete the item using filter
        const updatedList = product.filter(
            (listitem) =>
                !(
                    listitem.pdtname.toLowerCase() === pdtname.toLowerCase() &&
                    listitem.category.toLowerCase() === category.toLowerCase()
                )
        );

        // update state
        setProduct(updatedList);

        alert("Product deleted successfully!");

        // clear fields
        setPdtname("");
        setPdtcategory("");

    }

        return (
            <div style={{ backgroundColor: "linen", fontFamily: "cursive", height: "6400px", width: "100%", color: "white" }}><br /><br />

                <div style={{ backgroundColor: "gray", height: "500px", backgroundImage: "URL(https://t4.ftcdn.net/jpg/11/68/40/39/360_F_1168403949_13Glph4RGJd8RnyiiecKdwU7XIByfG08.jpg)", marginTop: "-50px" }}>
                    <h3 style={{ fontSize: "50px", paddingTop: "80px", color: "white" }}><strong>Moharika Collections</strong></h3>
                    <h2 style={{ fontSize: "30px" }}>Are you sure you want to delete product from Moharika Collections?</h2>

                    <br /><br />
                    <br /><br />
                    <table style={{ width: "402px" }}>
                        <tr><td>
                            <strong>Product Name:</strong>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><input value={pdtname} onChange={(e) => setPdtname(e.target.value)}
                                style={{ width: "100%", padding: "8px 10px 10px 0", border: 'none', borderRadius: "5px", backgroundColor: 'linen' }} /></td> </tr>

                        <tr></tr>
                        <tr><td>
                            <strong> Category:</strong>&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td><input value={category} onChange={(e) => setPdtcategory(e.target.value)}
                                style={{ width: "100%", padding: "8px 10px 10px 0", border: 'none', borderRadius: "5px", backgroundColor: 'linen' }} /></td></tr>
                    </table>
                    <br /><br />
                    <button style={{ marginLeft: "-50%", backgroundColor: "white", color: "black", padding: "8px 10px 10px 0", width: "90px", height: "30px", borderRadius: '10px' }}
                        onClick={Deletepro}>Delete </button>
                </div>
                 <br /><br /><br />
                <br /><br /><br />


                 <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px", marginLeft: "7%", height: "5500px" , color:"black"}}>
                    {/* <div> <h3 style={{textAlign:"center", marginLeft: "-50%"}}><strong>Available Stock List</strong></h3></div><br/> */}
                {
                    product.map((list, index) => (
                        <div style={{ height: "20px", marginLeft: "2px", width: '300px', borderRadius: "50px", gap: "10px" }}>
                            <h4 style={{ fontSize: "20px" }}>{list.category}   </h4>

                            <img src={list.image} alt="" style={{ width: "200px", height: "250px", objectFit: "cover", borderRadius: "5px" }} /><br />
                            <h4 style={{ fontSize: '21px' }}> <strong>  {list.price}&nbsp; ₨</strong></h4>
                            <h3 style={{ fontSize: '21px' }}>Stock:   {list.quantity} &nbsp; &nbsp;&nbsp;<strong>'{list.pdtname}'</strong>&nbsp;</h3>
                        </div>
                    ))

                }
                </div>







                <br /><br /><br />
                <br /><br /><br />
                {/* <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br />
                <br /><br /><br /> */}
                <Footer />
            </div>
        )
    }

    export default Delete
