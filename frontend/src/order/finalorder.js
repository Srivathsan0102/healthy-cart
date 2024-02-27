import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../util/constants";
import { Container, Row } from "react-bootstrap";




const FinalOrder = () => {
    const   finalamount =useParams();
    console.log(finalamount);
    const [shipaddress,setshipaddress]=useState();
    useEffect(() => {
        fetchData();
    }, []);
    const id = finalamount.mail;
    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseurl}/getship/${id}`);
            setshipaddress(res.data)
            // const addr = setData(res.data);

            console.log(shipaddress, 'data');
            console.log(res.data, 'resdata')



        } catch (err) {
            console.log(err.message);
        }
    }
    const [cart,setCartData]=useState()
    useEffect(() => {
        fetchDataCartData();
      }, [] );
      const fetchDataCartData = async () => {
        try {
          const response = await axios.get(`${baseurl}/getCartdata`);
          setCartData(response.data);
          console.log(response.data)
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      };

      console.log(cart);


    return ( 
        
        <div>
        
        {/* <Card body bg="light" text="black" className="text-start"> */}
        <h3 style={{textAlign:"center",paddingTop:"20px",color:"#00B5B7"}}> Thank You For Your Order</h3>
        <p style={{textAlign:'center'}} > Review your order Information below</p>


            <Container>
                <Row className="d-flex align-itwms-center justify-content-center">
                <div className="w-100 d-flex align-its-center justify-content-center"style={{gap:"20px"}} >
            {shipaddress && shipaddress.map((ele, index) => (
         
            
                <Card body className="mt-3"style={{width:'30%',display:"flex",alignItems:"center",justifyContent:"center"}} >
                <h5 >Shipping Address:</h5> 
                <p className="fs-5">
                    {ele.name.fname} {ele.name.lname}
                </p>
                <p className="fs-5">
                    {ele.contact_details.address}, {ele.contact_details.city}
                </p>
                <p className="fs-5">
                    {ele.contact_details.state}, {ele.contact_details.country}, {ele.contact_details.pincode}
                </p>
                <p className="fs-5">Phone Number: {ele.contact_details.contact_no}</p>
                </Card>

               
     
            ))}
            
             <Card body className="mt-3 "style={{width:'30%'}} >
             <h5 style={{paddingTop:"10px"}}>Item Details:</h5> 
                    <div className="fs-5">
                {cart && cart.map((CartData)=>{
                    console.log(CartData);
                   
                    return(
                    <div className="cartpop">
                        <div style={{width:"100%",display:'flex',alignItems:"center",padding:"20px 16px",borderBottom: "1px solid #dbdee9",gap:"10px"}}>
                        <div class="left-section">
                            <img src={CartData.img} alt="MuscleBlaze Biozyme Whey Protein,  8.8 lb  Rich Milk Chocolate "/>
                        </div>
                    <div class="right-section">
                        {CartData.ProductName}
                        <div class="right-bottom-section d-flex align-items-center"style={{gap:"20px",paddingTop:"10px"}}>
                            <div class="item-desc">Qty: {CartData.Quantity} </div>
                            <div class="item-desc">Price: {CartData.Price} </div>
                        </div>
                    </div>
                </div>
                </div>
                    )                   
                })}
                 </div>
                    </Card>

                
            </div >
                </Row>
                </Container>
      {/* </Card> */}
    </div>
     );
}
 
export default FinalOrder;