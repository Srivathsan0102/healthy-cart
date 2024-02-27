import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
// import Payment from "./payment";
import { baseurl } from "../util/constants";
import axios from "axios";
// import { baseurl } from "d:/final_project/frontend/healthkart/src/util/constants";
import OrderSummary from "../cart/odersummary";
import { useParams } from "react-router-dom";
function Shipping({setUpdateUI}) {

  let totalamount=useParams()
  console.log(totalamount);
  const [loginID, setLoginID] = useState(localStorage.getItem("loginID"));
  useEffect(() => {
    setLoginID(localStorage.getItem('loginID'))
  },)

  const [fname,setfname] =useState('');
  const [lname,setlname] =useState('');
  const [email,setemail] =useState('');
  const [address,setaddress] =useState('');
  const [city,setcity] =useState('');
  const [state,setstate] =useState('');
  const [country,setcountry] =useState('');
  const [pincode,setpincode] =useState('');
  const [num,setnum] =useState('');

  const initialValues = { email: "", fname: "", lname: "", address: "",  city: '',state:'',country:'',pincode:'',num:'' };
  const [formValues, setFormsValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormsValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const [shippingaddress,setshippingaddress]=useState()
  const [addresscheck,setaddresscheck]=useState(false);
  const [mail,setmail]=useState();
  const [checkmail,setcheckmail]=useState();
  console.log(mail);
  // useEffect(() => {
  //   fetchData();
  // },[]);

  // const id = mail;
  // const fetchData = async () => {
   
  // }
  // setcheckmail(shippingaddress[.contact_details.email)
 
  useEffect(() => {
    fetchData();
}, [mail]);
// const id = localStorage.getItem("loginID");
const fetchData = async () => {
    try {
        const res = await axios.get(`${baseurl}/getship/${mail}`);
        setshippingaddress(res.data);

        console.log(shippingaddress, 'data');
        console.log(res.data, 'resdata')
        if (res.data && res.data.length === 0) {
          setaddresscheck(true);
        } else {
          setaddresscheck(false);
        }
        console.log(addresscheck);
    } catch (err) {
        console.log(err.message);
    }
    
    
}

  const handleSubmit = (e) => {
    console.log(shippingaddress);
    e.preventDefault();
    console.log(addresscheck);
      
        const formErrors = validate(formValues);
        setFormErrors(formErrors);
        setIsSubmit(true);
        setmail(formValues.email)
      // {shippingaddress ? console.log("is there") :}
        




    if (Object.keys(formErrors).length === 0  && addresscheck) {
      console.log("Sending data to backend...");
     axios.post(`${baseurl}/saveship`,{
        task:{
          contact_details:{
            contact_no:formValues.num,
            email:formValues.email,
            address:formValues.address,
            city:formValues.city,
            state:formValues.state,
            country:formValues.country,
            pincode:formValues.pincode,
        },
        name:{
            fname:formValues.fname,
            lname:formValues.lname,
        }
        }
      }).then((res)=>{
        console.log("Data sent to backend....",res.data);
        setfname('');
        setlname('');
        setcountry('');
        setstate('');
        setpincode('');
        setcity('');
        setemail('');
        setnum('');
        setaddress('');
        // setUpdateUI((prevState) => !prevState);
        navigate(`/payment/${totalamount.amount}/${formValues.email}/${totalamount.mrp}`)
      }).catch((err)=>{
        console.log('Error sending data to backend....',err)
      })
      
    }
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },[formValues]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    if (values.email === "") {
      errors.email = "email is required";
    } else {
      if (!regex.test(values.email)) {
        errors.email = "Please enter valid email !";
      }
    }
    const regexname = /^[a-zA-Z\s]+$/;
    if (values.fname === "") {
      errors.fname = " Name is mandatory";
    } else {
      if (!regexname.test(values.fname)) {
        errors.fname = "Enter valid first name !";
      }
    }

    if (values.lname === "") {
      errors.lname = " Name is Mandatory";
    } else {
      if (!regexname.test(values.lname)) {
        errors.lname = "Enter valid last name !";
      }
    }
    if (values.address === "") {
      errors.address = " Please Enter the Address";
    }
    if (values.city === "") {
      errors.city = "Enter the city !";
    } 
    var regNum = /^[7-9][0-9]{9}$/;
    if (values.num === "") {
      errors.num = "required !";
    } else {
      if (!regNum.test(values.num)) {
        errors.num = "Enter valid mobile Number!";
      }
    }

    if (values.pincode === "") {
      errors.pincode = "required !"
    } 
    return errors;
  };

  return (
    <>
        <div style={{ background: "#f4f4f4" }}>

        <div className="container " style={{ paddingRight: '0px',background:"#f4f4f4",borderRadius:"8px",marginTop:"20px"}}>
        <div class="row  mt-0 d-flex justify-content-center " style={{ marginRight: '0px' }}>
          <div className="col-6 " style={{ paddingRight: '10px',background:"#fff" ,marginTop:"20px",borderRadius:"8px",padding:"40px"}}>
            <div className="row ">

              <div className=" text-start">
                <form action="" onSubmit={handleSubmit}>

                  <h2 style={{textAlign:"center",color:"#006279"}}>SHIPPING </h2>
                  <h4 className="mb-4" style={{ fontSize: "20px" ,color:"#006279"}}>
                  <img width={70} height={70} src="https://media.istockphoto.com/id/1312921508/vector/free-delivery-truck-icon-fast-shipping-design-for-website-and-mobile-apps-vector-illustration.jpg?s=612x612&w=0&k=20&c=RiMC1uNjbKcoC-776hknwM02J8U9BtkjAQCkC-9PIoo="/>&nbsp; &nbsp;Shipping Address
                  </h4>


                  <div className="row" >
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="fname"
                          name="fname"
                          style={{ borderWidth: 1, borderColor: "#324960",borderRadius:3 }}
                          value={formValues.fname}
                          onChange={handleChange}
                        />
                        <label htmlFor="fname" style={{ color: "#000" }}>
                          First Name
                        </label>
                        <p id="erroremail" style={{ color: "red", fontSize: 13, paddingLeft: 5 }}>
                          {formErrors.fname}
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="lname"
                          name="lname"
                          style={{ borderWidth: 1, borderColor: "#324960",borderRadius:3 }}
                          value={formValues.lname}
                          onChange={handleChange}
                        />
                        <label htmlFor="lname" style={{ color: "#000" }}>
                          Last Name
                        </label>
                        <p id="error" style={{ color: "red", fontSize: 13, paddingLeft: 5 }}>
                          {formErrors.lname}
                        </p>
                      </div>
                    </div>
                  </div>

                  
                  <div className="row" >
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control w-100"
                        id="address"
                        name="address"
                        value={formValues.address}
                        onChange={handleChange}
                        style={{ borderWidth: 1, borderColor: "#324960",borderRadius:3 }}
                      />

                      <label htmlFor="address" style={{ color: "#000" }}>
                        Address
                      </label>
                      <p id="error" style={{ color: "red", fontSize: 13, paddingLeft: 5 }}>
                        {formErrors.address}
                      </p>
                    </div>
                  </div>
                 
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control w-100"
                          id="email"
                          name="email"
                          value={formValues.email}
                          onChange={handleChange}
                          // placeholder=" Mail Id"
                          style={{ borderWidth: 1, borderColor: "#324960",borderRadius:3,height:"60px" }}
                        />
                        <label htmlFor="email" style={{ color: "#000" }}>
                           Registered Mail id
                        </label>
                        {/* <p id="error" style={{ color: "red", fontSize: 13, paddingLeft: 5 }}>
                          {formErrors.num}
                        </p> */}
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="num"
                          name="num"
                          value={formValues.num}
                          onChange={handleChange}
                          placeholder=""
                          style={{ borderWidth: 1, borderColor: "#324960",borderRadius:3 }}
                        />
                        <label htmlFor="floatingInput" style={{ color: "#000" }}>
                          Phone No
                        </label>
                        <p id="error" style={{ color: "red", fontSize: 13, paddingLeft: 5 }}>
                          {formErrors.num}
                        </p>
                      </div>

                  <div className="row" >
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="city"
                          name="city"
                          value={formValues.city}
                          onChange={handleChange}
                          style={{ borderWidth: 1, borderColor: "#324960",borderRadius:3 }}
                        />
                        <label htmlFor="city" style={{ color: "#000" }}>
                          City
                        </label>
                        <p id="error" style={{ color: "red", fontSize: 13, paddingLeft: 5 }}>
                          {formErrors.city}
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="pincode"
                          name="pincode"
                          value={formValues.pincode} 
                          onChange={handleChange}
                          style={{ borderWidth: 1, borderColor: "#324960",borderRadius:3 }}
                        />
                        <label htmlFor="pincode" style={{ color: "#000" }}>
                          Pincode
                        </label>
                        <p id="error" style={{ color: "red", fontSize: 13, paddingLeft: 5 }}>
                          {formErrors.pincode}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" row " >
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control w-100"
                          id="state"
                          name="state"
                          value={formValues.state}
                          onChange={handleChange}
                          style={{ borderWidth: 1, borderColor: "#324960",borderRadius:3 }}
                        />
                        <label htmlFor="state" style={{ color: "#000" }}>
                          state
                        </label>
                        <p id="error" style={{ color: "red", fontSize: 13, paddingLeft: 5 }}>
                          {formErrors.state}
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating mb-3">
                        <Form.Select
                          id="floatingInput"
                          onChange={handleChange}
                          name="country"
                          value={formValues.country}
                          isInvalid={validated && selectedOption === ""}
                          style={{ borderColor: "#324960",borderRadius:3, borderWidth: 1 }}
                        >
                          <option value="" disabled hidden>Select a country</option>
                          <option value="India">India</option>
                          <option value="japan">Japan</option>
                          <option value="Canada">Pakistany</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid" style={{ color: "red", fontSize: 13, paddingLeft: 5 }}>
                          Please select a country.
                        </Form.Control.Feedback>
                        <label htmlFor="floatingInput" style={{ color: "#000" }}>
                          Country/Region
                        </label>
                      </div>
                    </div>
                  </div>


                
                  

                 
               
                  <div
                    className="pt-5 row"
                    style={{  height: "100px" }}
                  >
                    <div className="col-6">
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        to="/cartdetails"
                      ><Button  className="w-50 h-100" style={{ backgroundColor:"#5ce3dd",borderColor:"#324960"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                        &nbsp; Back to Cart
                      </Button>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Button style={{ backgroundColor:"#5ce3dd",borderColor:"#324960"}} className="w-100 h-100" type="submit">
                        Save Address
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
          


        </div>
      </div>
      </div>
    </>
  );
}

export default Shipping;
