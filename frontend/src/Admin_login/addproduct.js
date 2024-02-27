import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../util/constants";

export function AddProduct({setupdateui}){
    const input_style = {display:"flex",alignItem:"center",justifyContent:"center", width: '250px', height: '51px', borderRadius: '8px'}
    const styles={display:"flex",alignItem:"center",justifyContent:"center",flexDirection:"column",gap:"20px",width:"500px"}
    const [productId,setproductId]=useState("")
    const [productIdError,setProductIdError]=useState("")
    const [productCategory,setProductcategory]=useState("");
    const [productName,setProductName]=useState("");
    const [productNameError,setproductNameError]=useState("");
    const [productCategoryError,setProductCategoryError]=useState("")
    const nav = useNavigate();
     const [ProductId,setProductId]=useState("")
     const [Category,setCategory]=useState("")
     const [ProductName,setproductname]=useState("")
     const [price,setprice]=useState("")
    //  const [ProductName,setProductName]
    const [Status,setstatus]=useState("")
    const [ options,setOptions]=useState([])
    const [subcategoryOptions,setsubcategoryOptions]=useState([])
    const [imgurl,setimgurl]=useState("")
    const [description,setdescription]=useState("")
    const [productSubCategory,setProductSubcategory]=useState("")
    

    function HandleSubmit(e){
        e.preventDefault();
        if (productId.length <1 || productCategory.length <1){
            setProductIdError("Enter valid productId")
        }
        if(productName.length <1 ){
            setproductNameError("please Enter the product Name")
        }
        if(productCategory.length <1){
            setProductCategoryError("select the category")
        }
        // else{
        //     nav('/OnviewProduct', { replace: { from: '/Adminadd' } });

        // }
        console.log(productId,productCategory,productName   );
        axios
        .post(`${baseurl}/saveProductdata`, {
            product: { ProductId:productId,Category:productCategory,ProductName:productName,Price:price,img:imgurl,Additional_description:description},
        })
        .then((res) => {
            console.log("Data sent to backend successfully:", res.data);
           
            setProductId("")
            setCategory("")
            setproductname("")
            setstatus("")
            // setupdateui((prevState) => !prevState);
        })
        .catch((err) => {
            console.log("Error sending data to backend:", err);
        });
     
    }
    useEffect(()=>{
        fetchDataSubCategory();
    },[productCategory])

    const fetchDataSubCategory = async () => {
        try {
            console.log(productCategory);
          const response = await axios.get(`${baseurl}/getSubCategoryData/${productCategory}`);
          const SubcategoryData = response.data;
          console.log(SubcategoryData);
          const subcategoryNames = SubcategoryData.map((subcategory) => subcategory.subCategoryName);
        console.log(subcategoryNames);
          const formattedOptions = [
            { value: "", label: "Select Sub category" }, // Default empty value
            ...subcategoryNames.map((subcategoryName) => ({
              value: subcategoryName,
              label: subcategoryName,
            })),
          ];
          console.log(formattedOptions);
          setsubcategoryOptions(formattedOptions)
        } catch (error) {
          console.log("Error fetching data:", error);
        }
        setupdateui((prevState) => !prevState);
      }; 
     




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
        <h3 style={{textAlign:"center",color:"#00b8b9"}}> Add Product</h3>
       
            <form onSubmit={HandleSubmit} style={{gap:"20px",display:"flex",flexDirection:"column"}}>
                    <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                        <label>ProductID<span style={{color: 'red', padding: '10px'}}>*</span></label>
                        <div className="form-input">
                            <input 
                            type="text"
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
                        <label>Category<span style={{color: 'red', padding: '10px'}}>*</span></label>
                        <div className="form-input" style={{gap: '5px'}}>

                        <select
                            type="name" 
                            name="productCategory"
                            value={productCategory}
                            placeholder="ProductType" 
                            style={input_style}
                            onChange={((e)=>setProductcategory(e.target.value))}
                            >
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}   
                            </select>
                            <span style={{color:"red"}}>{productCategoryError}</span>
                            </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-between flex-row" style={{gap: '5px'}}>
                        <label>Sub Category<span style={{color: 'red', padding: '10px'}}>*</span></label>
                        <div className="form-input" style={{gap: '5px'}}>

                        <select
                            type="name" 
                            name="productSubCategory"
                            value={productSubCategory}
                            placeholder="ProductType" 
                            style={input_style}
                            onChange={((e)=>setProductSubcategory(e.target.value))}
                            >
                            {subcategoryOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}   
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
                        style={input_style} />
                        <span style={{color:"red"}}>{productNameError}</span>

                        </div>
                    </div>
                    
                    <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                        <label>Price <span></span></label>
                    <input 
                        type="text" 
                        name="Price"
                        value={price}
                        onChange={((e)=>setprice(e.target.value))}
                        style={input_style} 
                        placeholder="Price" />
                    </div>
                    <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                        <label>Product Quantity</label>
                    <input 
                        type="number" 
                        name="Product quantity"
                        style={input_style}     
                        placeholder="Product Quantity" />
                    </div>
                    <div className="d-flex align-items-start justify-content-between  flex-row" style={{gap: '5px'}}>
                        <label>Add product image</label>
                    <input 
                        type="text" 
                        name="add product"
                        value={imgurl}
                        onChange={((e)=>setimgurl(e.target.value))}
                        style={input_style} 
                        placeholder="Image Url"                         />
                    </div>

                    <div className="d-flex align-items-start justify-content-between flex-row" style={{gap: '5px'}}>
                        <label>Additional Description </label>
                    <textarea  
                        type="textarea" 
                        name="text" 
                        style={input_style} 
                        value={description}
                        onChange={((e)=>setdescription(e.target.value))}
                        placeholder="Additional Description" />
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                    <button type="submit" id="Login"className="btn btn-primary" style={{width: '326px', height: '51px', backgroundColor : 'rgb(0, 184, 185)', color: '#fff', border: 'none'}}><a href id="register">Add Product</a></button>
                    </div>
                    </form>
        </div>  
                    
    )
}