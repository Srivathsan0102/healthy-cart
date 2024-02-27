import axios from "axios";
import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { baseurl } from "../util/constants";

export function Category(){
    const input_style = {display:"flex",alignItem:"center",justifyContent:"center", width: '250px', height: '51px', borderRadius: '8px'}
    const styles={display:"flex",alignItem:"center",justifyContent:"center",flexDirection:"column",gap:"20px",width:"500px"}
    const [Category,setCategory]=useState("")
    const [CategoryError,setCategoryError]=useState("")
    const [SubCategory,setSubCategory]=useState("");
    const [Categoryname,setCategoryname]=useState("");
    const [ProductName,setProductName]=useState("")
    const [productNameError,setproductNameError]=useState("");
    const [SubCategoryError,setSubCategoryError]=useState("")
    const nav = useNavigate();
    const [CategoryId,setCategoryId]=useState("");
    const [CategoryName,setCategoryName]=useState("");
    const [Subcategory,setSubcategory]=useState("");
    const [Productname,setProductname]=useState("")


    function HandleSubmit(e){
        console.log("check");
        e.preventDefault();
        if (Category.length <1 ){
            setCategoryError("Enter valid Category")
        }
        if(Categoryname.length <1 ){
            setproductNameError("please Enter the Name")
        }
     
        else{
            nav('/CategoryList');
        }
        console.log(Category,Categoryname,SubCategory,ProductName);
        axios
        .post(`${baseurl}/saveCategoryData`,{
            category:{CategoryId:Category,CategoryName:Categoryname,SubCategory:SubCategory,Productname:ProductName}
        })
        .then((res)=>{
            console.log("Data sent to backend successfully:", res.data);
            setCategoryId("")
            setCategoryName("")
            setSubcategory("")
            setProductname("")
        })
        .catch((err) => {
            console.log("Error sending data to backend:", err);
        });
         

    }
    return(<div style={styles}>
        <h3 style={{textAlign:"center",color:"#00b8b9"}}> Add Category</h3>
       
            <form onSubmit={HandleSubmit} style={{gap:"20px",display:"flex",flexDirection:"column"}}>
                    <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                        <label>Category id<span style={{color: 'red', padding: '10px'}}>*</span></label>
                        <div className="form-input">
                            <input 
                            type="number"
                            name="Category"
                            value={Category}
                            placeholder="Category" 
                            onChange={((e)=>setCategory(e.target.value ))}
                            // onChange={HandleFormData}
                            style={input_style} 
                            />
                            <span style={{color:"red"}}>{CategoryError}</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                        <label>Category Name<span style={{color: 'red', padding: '10px'}}>*</span></label>
                        <div className="form-input" style={{gap: '5px'}}>
                        <input 
                        type="text"
                        name="CategoryName"
                        value={Categoryname}
                        placeholder="Category Name" 
                        onChange={((e)=>setCategoryname(e.target.value))}
                        // onChange={HandleFormData}
                        
                        style={input_style} />
                        <span style={{color:"red"}}>{productNameError}</span>

                        </div>
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
                    
                    <button type="submit" id="Login"className="btn btn-primary" style={{width: '326px', height: '51px', backgroundColor : 'rgb(0, 184, 185)', color: '#fff', border: 'none'}}><a href id="register">Add Category</a></button>
                   
                    </div>
                    </form>
        </div>  
                    
    )
}