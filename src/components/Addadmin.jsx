import React, { useState } from 'react'
import { myContext } from './Context'
import Footer from "./Footer";
import { list } from './Pdtlist';
import { useNavigate } from 'react-router-dom';

function Addadmin() {

    const [product, setProduct] = useState(list || [])

    const [pdtname, setPdtname] = useState('');
    const [image, setPdtimage] = useState('');
    const [category, setPdtcategory] = useState('');
    const [description, setPdtdescription] = useState('');
    const [price, setPdtprice] = useState('');
    const [quantity, setPdtquantity] = useState('');

    const nav = useNavigate();

    function Add() {
        if (!pdtname || !image || !category || !description || !price || !quantity) {
            alert(" All fields are required");
            return;
        }

        const existingitem = product.find(
            (listitem) => listitem.pdtname.toLowerCase() === pdtname.toLowerCase());

        if (existingitem) {
            alert(" This Item already exists or edited");
            return;
        }

        const newitem = { pdtname, image, category, description, price, quantity };
        setProduct([...product, newitem]);


        setPdtname('');
        setPdtimage('');
        setPdtcategory('');
        setPdtdescription('');
        setPdtprice('');
        setPdtquantity('');

        alert("Product added sucessfully!");
    }


// function Delete(index) {
//  setProduct(product.filter((_, i) => i !== index));

// }
    


    return (
        <div style={{ height: "6500px", backgroundColor: "linen", fontFamily: "cursive" }}>
            <div className='adminbody' style={{ backgroundImage: `url("https://static.wixstatic.com/media/b69f5d_7f60f665b16e47988c8e02a928100ada~mv2.jpg/v1/fill/w_980,h_404,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b69f5d_7f60f665b16e47988c8e02a928100ada~mv2.jpg")` }}>
                <h4 style={{ fontSize: "60px", color: "linen" }}><strong>Moharika Collections</strong></h4>
                <table className='admintable' style={{ fontSize: "19px", fontFamily: "cursive", color: "linen" }}>
                    <br />
                    <br />
                    <br />
                    <tr><td> Pdt Name:</td> <td><input value={pdtname} onChange={(e) => setPdtname(e.target.value)} style={{ width: "150%", padding: "8px 10px 10px 0", border: 'none', borderRadius: "5px", backgroundColor: 'linen' }} /></td></tr>

                    <tr><td> Image:</td> <td><input value={image} onChange={(e) => setPdtimage(e.target.value)} style={{ width: "150%", padding: "8px 10px 10px 0", border: 'none', borderRadius: "5px", backgroundColor: 'linen' }} /></td></tr>

                    <tr><td> Category:</td> <td><input value={category} onChange={(e) => setPdtcategory(e.target.value)} style={{ width: "150%", padding: "8px 10px 10px 0", border: 'none', borderRadius: "5px", backgroundColor: 'linen' }} /></td></tr>

                    <tr><td> Description:</td> <td><input value={description} onChange={(e) => setPdtdescription(e.target.value)} style={{ width: "150%", padding: "8px 10px 10px 0", border: 'none', borderRadius: "5px", backgroundColor: 'linen' }} /></td></tr>

                    <tr><td> Price:</td> <td><input value={price} onChange={(e) => setPdtprice(e.target.value)} style={{ width: "150%", padding: "8px 10px 10px 0", border: 'none', borderRadius: "5px", backgroundColor: 'linen' }} /></td></tr>

                    <tr><td> Quantity:</td> <td><input value={quantity} onChange={(e) => setPdtquantity(e.target.value)} style={{ width: "150%", padding: "8px 10px 10px 0", border: 'none', borderRadius: "5px", backgroundColor: 'linen' }} /></td></tr>
                    <br />

                    <tr><td><button style={{ marginLeft: "50%", backgroundColor: "gray", color: "white", padding: "8px 10px 10px 0", width: "90px", height: "30px", borderRadius: '10px' }} onClick={Add}>Add </button></td></tr>                      
                 </table>
            </div>

           {/* {
            product.map((list, index) =>(
                <div ket ={index} style={{height:"20px", marginLeft:"2px", width:'300px', borderRadius:"5px", gap:'10px'}} >
                    <h4 style={{fontSize:'20px'}}>{list.category}</h4>
                    <img src={list.image}></img>
                    <h3>{list.pdtname}</h3>
                    <h3>{list.price}₹</h3>

                    <button style={{ marginLeft: "50%", backgroundColor: "gray", color: "white", padding: "8px 10px 10px 0", width: "90px", height: "30px", borderRadius: '10px'}} onClick={Delete}>Delete</button>
               </div>
            ))
            } */}

            <br /><br /><br /><br />
            <h3 style={{ fontSize: "40px", color: "linen", color: "black" }}><strong>Available Stock List </strong></h3>
            <br />
            <br />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px", marginLeft: "7%", height: "5500px" }}>
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

                {/* {
               product & product.map ((item, index) => 
            (<div key={index}>
        <h4>{item.pdtname}</h4>
        <button onClick={() =>Delete(index)}>Delete</button>
    </div>))
                } */}


            </div>
            <br /><br /><br /><br /><br /><br />
            <Footer />
        </div>
    )
}





export default Addadmin
