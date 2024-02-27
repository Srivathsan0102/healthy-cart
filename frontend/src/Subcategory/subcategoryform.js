import axios from "axios";
import React, { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { baseurl } from "../util/constants";

export function SubCategoryForm(){
    const input_style = {display:"flex",alignItem:"center",justifyContent:"center", width: '250px', height: '51px', borderRadius: '8px'}
    const styles={display:"flex",alignItem:"center",justifyContent:"center",flexDirection:"column",gap:"20px",width:"500px"}
    const [subCategoryid,setsubCategory]=useState("")
    const [CategoryError,setCategoryError]=useState("")
    const [Category,setCategory]=useState("");
    const [subcategoryname,setsubcategoryame]=useState("");
    const [productNameError,setproductNameError]=useState("");
    const [SubCategoryError,setSubCategoryError]=useState("")
    const nav = useNavigate();
    const [subCategoryId,setSubCategoryId]=useState('');
    const [subCategoryName,serSubCategoryId]=useState('')
    const [Productname,setproductName]=useState('')
    const [ options,setOptions]=useState([])


    console.log();





    function HandleSubmit(e){




        e.preventDefault();
        if (subCategoryid.length <1 || Category.length <1){
            setCategoryError("Enter valid Category")
        }
        if(subcategoryname.length <1 ){
            setproductNameError("please Enter the Name")
        }
        if(Category.length <1){
            setSubCategoryError("select the category")
        }
        else{
            nav('/SubCategoryview');

        }
        console.log(Category)
        axios
        .post(`${baseurl}/saveSubCategoryData`,{
            subcategory:{
                subCategoryId:subCategoryid,
                subCategoryName:subcategoryname,
                category:Category,
            }
        }).then((res) => {
            console.log("Data sent to backend successfully:", res.data);
           
            setSubCategoryId("")
            setsubcategoryame("")
            setCategory("")
            // setupdateui((prevState) => !prevState);
        })
        .catch((err) => {
            console.log("Error sending data to backend:", err);
        });
    }
    

    useEffect(()=>{
        fetchData();    
    },[])
    const fetchData = async () => {
        try {
          const response = await axios.get(`${baseurl}/getcategorydata`);
          const categoryData = response.data;
          console.log(categoryData)
          const categoryNames = categoryData.map((category) => category.CategoryName);
    
          const formattedOptions = [
            { value: "", label: "Select category" }, // Default empty value
            ...categoryNames.map((categoryName) => ({
              value: categoryName,
              label: categoryName,
            })),
          ];
    
          console.log(formattedOptions)
          setOptions(formattedOptions);
        //   setSelectedOption(formattedOptions[0].value); // Set default selected option
        } catch (error) {
          console.log('Error fetching data:', error);
        }
    
      };



    return(<div style={styles}>
        <h3 style={{textAlign:"center",color:"#00b8b9"}}> Add  Sub Category</h3>
       
            <form onSubmit={HandleSubmit} style={{gap:"20px",display:"flex",flexDirection:"column"}}>
                    <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                        <label>Sub Category id<span style={{color: 'red', padding: '10px'}}>*</span></label>
                        <div className="form-input">
                            <input 
                            type="number"
                            name="Category"
                            value={subCategoryid}
                            placeholder="Sub Category" 
                            onChange={((e)=>setsubCategory(e.target.value ))}
                            // onChange={HandleFormData}
                            style={input_style} 
                            />
                            <span style={{color:"red"}}>{CategoryError}</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                        <label>sub Category Name<span style={{color: 'red', padding: '10px'}}>*</span></label>
                        <div className="form-input" style={{gap: '5px'}}>
                        <input 
                        type="name"
                        name="CategoryName"
                        value={subcategoryname}
                        placeholder="Sub Category Name" 
                        onChange={((e)=>setsubcategoryame(e.target.value))}
                        // onChange={HandleFormData}
                        
                        style={input_style} />
                        <span style={{color:"red"}}>{productNameError}</span>

                        </div>
                    </div>

                    
                    <div className="d-flex align-items-start justify-content-between flex-row" style={{gap: '5px'}}>
                        <label>Category Name<span style={{color: 'red', padding: '10px'}}>*</span></label>
                        <div className="form-input" style={{gap: '5px'}}>

                        <select
                            type="name" 
                            name="subcategoryname"
                            value={Category}
                            placeholder="ProductType" 
                            style={input_style}
                            onChange={((e)=>setCategory(e.target.value))}
                            >
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}   
                            </select>
                            <span style={{color:"red"}}>{SubCategoryError}</span>
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

                    <button type="submit" id="Login"className="btn btn-primary" style={{width: '326px', height: '51px', backgroundColor : 'rgb(0, 184, 185)', color: '#fff', border: 'none'}}><a href id="register">Add Sub Category</a></button>
                    </div>
                    </form>
        </div>  
                    
    )
}