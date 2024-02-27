import axios from "axios";
import React, { useState } from "react";

import {useNavigate } from "react-router-dom";
import { baseurl } from "../util/constants";

export function ProductEdit({id,productname,prices}){
    const input_style = {display:"flex",alignItem:"center",justifyContent:"start", width: '250px', height: '51px'}
    const styles={display:"flex",alignItem:"center",justifyContent:"center",flexDirection:"column",gap:"20px",width:"500px"}
    const [productId,setproductId]=useState(id)
    const [productIdError,setProductIdError]=useState("")
    const [productCategory,setProductcategory]=useState("");
    const [productName,setProductName]=useState(productname);
    const [productNameError,setproductNameError]=useState("");
    const [status,setStatus]=useState("");
    const [price,setprice]=useState(prices)
    const [productCategoryError,setProductCategoryError]=useState("")
    const nav=useNavigate()
    const [ProductId,setProductId]=useState("")
     const [Category,setCategory]=useState("")
     const [ProductName,setproductname]=useState("")
     const [Price,setPrice]=useState("")
    //  const [ProductName,setProductName]
    const [Status,setstatus]=useState("")
    function HandleSubmit(e){
        e.preventDefault();
        if (productId.length <1 || productCategory.length <1){
            setProductIdError("Enter valid productId")
        }
        if(productName.length <1 ){
            setproductNameError("please Enter the Name")
        }
        if(productCategory.length <1){
            setProductCategoryError("select the category")
        }
        // else{
        //     nav('/OnviewProduct', { replace: { from: '/Adminadd' } });

        // }


        axios
        .put(`${baseurl}/updateproduct/${id}`, {
            product: { ProductId:productId,Category:productCategory,ProductName:productName,Price:price,Status:status},
        })
        .then((res) => {
            console.log("Data sent to backend successfully:", res.data);
           
            setProductId("")
            setProductName("")
            setprice("")
            // setupdateui((prevState) => !prevState);
        })
        .catch((err) => {
            console.log("Error sending data to backend:", err);
        });
        


    }
    return(
           
    <div style={styles}>
        <h3 style={{textAlign:"center",color:"#00b8b9"}}> Customize Product</h3>
            <form onSubmit={HandleSubmit} style={{gap:"20px",display:"flex",flexDirection:"column"}}>
            <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                <label>ProductID<span style={{color: 'red', padding: '10px'}}>*</span></label>
                <div className="form-input">
                    <input 
                    type="number"
                    name="productId"
                    value={productId}
                    placeholder="ProductId" 
                    onChange={((e)=>setproductId(e.target.value ))}
                    // onChange={HandleFormData}
                    style={input_style} 
                    />
                    <span style={{color:"red"}}>{productIdError}</span>
                </div>
            </div>
            <div className="d-flex align-items-start justify-content-between flex-row" style={{gap: '5px'}}>
                <label>Product Category<span style={{color: 'red', padding: '10px'}}>*</span></label>
                <div className="form-input" style={{gap: '5px'}}>

                <select
                    type="name" 
                    name="productCategory"
                    value={productCategory}
                    placeholder="ProductType" 
                    style={input_style}
                    onChange={((e)=>setProductcategory(e.target.value))}
                >
                    <option>Select Category </option>
                    </select>
                <span style={{color:"red"}}>{productCategoryError}</span>
                </div>
            </div>
            <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                <label>Product Name<span style={{color: 'red', padding: '10px'}}>*</span></label>
                <div className="form-input" style={{gap: '5px'}}>
                <input 
                type="name"
                name="productName"
                value={productName}
                placeholder="Product Name" 
                onChange={((e)=>setProductName(e.target.value))}
                // onChange={HandleFormData}
                
                style={input_style} />
                <span style={{color:"red"}}>{productNameError}</span>

                </div>
            </div>
            <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                <label>Status<span style={{color: 'red', padding: '10px'}}>*</span></label>
                <input 
                type="name"
                name="name"
                value={status}
                placeholder="Status" 
                onChange={((e)=>setStatus(e.target.value))}
                style={input_style} />
            </div>
            <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                <label>Price</label>
            <input 
                type="text" 
                name="price"
                style={input_style} 
                value={price}
                onChange={((e)=>setprice    (e.target.value))}
                // onChange={HandleFormData}
                placeholder="New Price" />
            </div>
            <div className="d-flex align-items-start justify-content-between flex-row" style={{gap: '5px'}}>
                <label>Additional Description </label>
            <textarea  
                type="textarea" 
                name="text" 
                style={input_style} 
                placeholder="Additional Description" />
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <button 
                    type="submit" 
                    id="Login"
                    className="btn" 
                    style={{width: '250px', height: '51px', backgroundColor : 'rgb(0, 184, 185)', color: '#fff', border: 'none'}}>Save Changes</button>
                    </div>
            </form>
    </div>
         

        
    )
}