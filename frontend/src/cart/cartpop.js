import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { baseurl } from "../util/constants";
import axios from "axios";
import HealthkartHeader from "../Header/header";
const CartPop = () => {

        const [cart,setCartData]=useState("")
        useEffect(() => {
            fetchData();
        }, [] );
        const fetchData = async () => {
            try {
            const response = await axios.get(`${baseurl}/getCartdata`);
            setCartData(response.data);
            console.log(response.data)
            } catch (error) {
            console.log("Error fetching data:", error);
            }
        };
        <HealthkartHeader cartcount={cart.length}/>
    return ( 
        <>
        <div style={{width:"350px", height:"100%",display:"flex",flexDirection:"column", flexWrap:"nowrap",overflowY:"scroll"}}>
            {cart&&cart.map((product)=>{

                if(localStorage.getItem("isLoggedIn")){
                    return(
                        <div className="cartpop">
                        <div style={{width:"100%",display:'flex',alignItems:"center",padding:"20px 16px",borderBottom: "1px solid #dbdee9",gap:"10px"}}>
                        <div class="left-section">
                            <img src={product.img} alt="MuscleBlaze Biozyme Whey Protein,  8.8 lb  Rich Milk Chocolate "/>
                        </div>
                    <div class="right-section">
                        {product.ProductName}
                        <div class="right-bottom-section d-flex align-items-center"style={{gap:"20px"}}>
                            <div class="item-desc">Qty: {product.Quantity}</div>
                            <div class="item-desc">Price: {product.Price}</div>
                        </div>
                    </div>
                </div>
                </div>
    
                    )
                }
               
            })} 
            
            <div className="cartbtn">
                <Link to="/Cart">
                <button style={{width:"300px",display:"flex",alignItems:"center",justifyContent:"center"}}>proceed to cart</button>
                </Link>
            </div>
            </div>
        </>
     );
}
 
export default CartPop;