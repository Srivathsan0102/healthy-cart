// import React, { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { baseURL } from "../utils/constants";


// function Payment(props) {
//     const [showDiv, setShowDiv] = useState(false);
//     const [showDiv2, setShowDiv2] = useState(false);
//     const [updateUI, setUpdateUI] = useState(false);

//     const [creditshow, setCreditShow] = useState(false);
//     const [upiShow, setUpiShow] = useState(false);
//     const nameFromShip = useParams();
//     console.log(nameFromShip);

//     const [err1, setErr1] = useState('');
//     const [err2, setErr2] = useState('');
//     const [selectOption1, setSelectedOption1] = useState('');
//     const [selectOption2, setSelectedOption2] = useState('');
//     const [onlineOption1, setOnlineOption1] = useState('');
//     const [data, setData] = useState([])

//     const [payOption, setPayOption] = useState('');
//     const [cardNo, setCardNo] = useState('');
//     const [cardName, setCardName] = useState('');
//     const [expDate, setExpDate] = useState('');
//     const [cvv, setCvv] = useState('');
//     const [upi, setUpi] = useState('');
//     const [billaddr,setBillAddr] =useState('');
//     const [addr,setAddr] = useState('');


//     const initialValues = { payOption: '', cardNo: '', cardName: '', expDate: '', cvv: '', upi: '' ,billaddr:'',addr:''};

//     const [formValues, setFormsValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);

//     const handleOptionChange2 = (e) => {
//         setSelectedOption2(e.target.value);
//         const value = e.target.value;
//         if (value === 'diff') {
//             setShowDiv2(true)
//         } else {
//             setShowDiv2(false)
//         }
//     };
//     const handleOptionChange1 = (e) => {
//         setSelectedOption1(e.target.value);
//         const value = e.target.value;
//         if (value === 'online') {
//             setShowDiv(true);
//         } else {
//             setShowDiv(false);
//         }
//     };

//     const handleOnlineChange = (e) => {
//         setOnlineOption1(e.target.value);
//         const value = e.target.value;
//         if (value === 'CreditCard') {
//             setCreditShow(true);
//         } else {
//             setCreditShow(false);
//         }

//         if (value === 'UPI') {
//             setUpiShow(true);
//         } else {
//             setUpiShow(false)
//         }
//     }

//     const validate = (values) => {
//         const errors = {};
//         const creditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
//         const cardnameregex = /^[A-Za-z0-9]{2,}$/;

//         if (onlineOption1 === 'CreditCard') {
//             if (values.cardName === "") {
//                 errors.cardName = "required!"
//             } else {
//                 if (!cardnameregex.test(values.cardName)) {
//                     errors.cardName = "not a proper name"
//                 }
//             }
//             if (values.cardNo === '') {
//                 errors.cardNo = "required !"
//             } 

//         } else {
//             if (onlineOption1 === 'UPI') {
//                 if (values.upi === '') {
//                     errors.upi = "enter upi id"
//                 }
//             }
//         }
//         return errors;
//     };



//     const navigate = useNavigate();
//     const [loginID, setLoginID] = useState(localStorage.getItem("loginID"));
//     useEffect(() => {
//         setLoginID(localStorage.getItem('loginID'))
//     },);

//     useEffect(() => {
//         fetchData();
//     }, [loginID]);
//     const id = localStorage.getItem("loginID");
//     const fetchData = async () => {
//         try {
//             const res = await axios.get(`${baseURL}/getship/${id}`);
//             setData(res.data);
//             // const addr = setData(res.data);

//             console.log(data, 'data');
//             console.log(res.data, 'resdata')



//         } catch (err) {
//             console.log(err.message);
//         }
//     }
//     const handleChange = (e) => {
//         console.log(e.target);
//         const { name, value } = e.target;
//         setFormsValues({ ...formValues, [name]: value });
//         console.log(formValues);
//       };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (selectOption1 === '') {
//             setErr1('select any option')
//             console.log('select any option')
//         } else {
//             setErr1('')
//             console.log("selected option:", selectOption1);
//         }
//         if (selectOption2 === '') {
//             setErr2('select any option')
//             console.log('select any option')
//         } else {
//             setErr2('')
//             console.log("selected option:", selectOption2);
//         }
//         console.log(data, 'fdata');


//         const formErrors = validate(formValues);
//         setFormErrors(formErrors);
//         setIsSubmit(true);

//         if (Object.keys(formErrors).length === 0) {
//             console.log("Sending data to backend...");
//             axios
//                 .post(`${baseURL}/savepay`, {
//                     task: {
//                         payOption: selectOption1,
//                         credit_card: {
//                             cardNo: formValues.cardNo,
//                             cardName: formValues.cardName,
//                             expDate: formValues.expDate,
//                             cvv: formValues.cvv,
//                         },
//                         upi: formValues.upi,
//                         billaddr:formValues.billaddr,
//                         addr:selectOption2
//                     },
//                 })
//                 .then((res) => {
//                     console.log("Data sent to backend successfully:", res.data);
//                     setPayOption("");
//                     setCardName("");
//                     setCardNo("");
//                     setExpDate("");
//                     setCvv("");
//                     setUpi("");
//                     setBillAddr("");
//                     setAddr('');
//                     setUpdateUI((prevState) => !prevState);
//                     data && data.map((arr) => {
//                         if (arr.name.fname === nameFromShip.fname && arr.name.lname === nameFromShip.lname) {
//                             const nme = `${arr.name.fname}`;
//                             const lnme = `${arr.name.lname}`;
//                             const opt1 = selectOption1;
//                             console.log(selectOption1)
//                             if (opt1 === '') {
//                                 window.confirm('select payment options to proceed')
//                                 navigate(`/payment/${nameFromShip.fname}/${nameFromShip.lname}`)
//                             } else {
//                                 navigate(`/ordersummary/${nme}/${lnme}/${opt1}`);
//                             }


//                         }
//                     })
//                 })
//                 .catch((err) => {
//                     console.log("Error sending data to backend:", err);
//                 });

//             // navigate(`/ordersummary/${nme}/${lnme}/${opt1}`);
//         }
//         console.log(nameFromShip.fname, 'fnamefrom')
//         console.log(data[0].name.fname, "payname")

        

//     }
//     useEffect(() => {
//         console.log(formErrors);
//         if (Object.keys(formErrors).length === 0 && isSubmit) {
//             console.log(formValues);
//         }
//     }, [formErrors]);

//     return (
//         <div className="d-flex justify-content-center" >
//             <form onSubmit={handleSubmit} style={{ width: '95%' }}>
//                 <h2 style={{ marginTop: 25, textAlign: 'center' }}>PAYMENT</h2>
//                 <div className=" row d-flex  justify-content-evenly align-start" style={{ padding: '5px 50px 40px 50px', borderRadius: 2, marginTop: 30, backgroundColor: '#fffafa' }}>

//                     <div className="col-12 col-md-6">
//                         {data
//                             .filter((task) => task.name.fname === nameFromShip.fname && task.name.lname === nameFromShip.lname)
//                             .map((task) => (
//                                 <>
//                                     <div className="d-flex flex-column " style={{ margin: '10px 5px', width: '100%',padding:'0px 20px' }}>
//                                         <div style={{ marginTop: 10 }}>
//                                             <h5>Contact</h5>
//                                             <p style={{ padding: 10, border: "1.6px solid grey", borderRadius: 2 }}>{`Mr./MS.               ${task.name.fname}`}<br />{`MAIL ID    :     ${task.contact_details.email}`}<br />{`CONTACT NO         :           ${task.contact_details.contact_no}`}</p>
//                                         </div>
//                                         <div style={{ marginTop: 20 }}>
//                                             <h5>Ship to</h5>
//                                             <p style={{ padding: 10, border: "1.6px solid grey", borderRadius: 2 }}>{`Mr./MS.               ${task.name.fname}`}<br />{`ADDRESS          :           ${task.contact_details.address} , ${task.contact_details.city} , ${task.contact_details.state} , ${task.contact_details.country} , ${task.contact_details.pincode}.`}</p>
//                                         </div>
//                                     </div>
//                                 </>
//                             ))}
//                     </div>

//                     <div className="col-12 col-md-6 d-flex flex-column" style={{padding:'0px 20px'}}>
//                         <div style={{ margin: '20px 5px', width: '100%' }}>
//                             <h5 style={{ color: '#00008a' }}>Payment Method</h5>
//                             <div style={{ padding: 10, border: "1.6px solid grey", borderRadius: 2 }}>
//                                 <div style={{ padding: 10 }}>
//                                     <input type="radio" name="payment" value="online" id="online" checked={selectOption1 === 'online'} onChange={handleOptionChange1}></input>
//                                     <label htmlFor="online" > &nbsp; Standard Shipping(pay online)&nbsp; &nbsp; </label>
//                                     {showDiv && (
//                                         <div>
//                                             <div style={{ padding: 10 }}>
//                                                 <input type="radio" name="onlinetype" value="CreditCard" id="CreditCard" checked={onlineOption1 === 'CreditCard'} onChange={handleOnlineChange} ></input>
//                                                 <label htmlFor="CreditCard"> &nbsp;&nbsp;&nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
//                                                     <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
//                                                     <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
//                                                 </svg> &nbsp;  CREDIT CARD</label>
//                                                 {creditshow && (
//                                                     <div className="d-flex flex-column mt-3 ms-4">
//                                                         <div className="mb-1 " style={{ width: '95%' }}>
//                                                             <label htmlFor="cardnum" style={{ color: "#282c34", fontSize: 14 }}>
//                                                                 CARD NUMBER
//                                                             </label>
//                                                             <input
//                                                                 type="number"
//                                                                 className=" w-100"
//                                                                 id="cardnum"
//                                                                 name="cardNo"
//                                                                 value={formValues.cardNo}
//                                                                 onChange={handleChange}
//                                                                 style={{ borderColor: "#C4C4C4", height: 40, border: '1px solid #ced4da' }}
//                                                             />

//                                                             <p id="erroremail" style={{ color: "red" }}>
//                                                                 {/* {formErrors.cardnum} */}
//                                                             </p>
//                                                         </div>
//                                                         <div className="mb-1 " style={{ width: '95%' }}>
//                                                             <label htmlFor="cardname" style={{ color: "#282c34", fontSize: 14 }}>
//                                                                 Name on Card
//                                                             </label>
//                                                             <input
//                                                                 type="text"
//                                                                 className=" w-100"
//                                                                 id="cardname"
//                                                                 name="cardName"
//                                                                 value={formValues.cardName}
//                                                                 onChange={handleChange}
//                                                                 style={{ borderColor: "#C4C4C4", height: 40, border: '1px solid #ced4da' }}
//                                                             />

//                                                             <p id="erroremail" style={{ color: "red" }}>
//                                                                 {/* {formErrors.cardname} */}
//                                                             </p>
//                                                         </div>
//                                                         <div className="row w-100 d-flex">
//                                                             <div className=" col-6  mb-1 " >
//                                                                 <label htmlFor="expdate" style={{ color: "#282c34", fontSize: 14 }}>
//                                                                     Expiration Date
//                                                                 </label>
//                                                                 <input
//                                                                     type="text"
//                                                                     className=" w-100"
//                                                                     id="expdate"
//                                                                     name="expDate"
//                                                                     value={formValues.expDate}
//                                                                     onChange={handleChange}
//                                                                     style={{ borderColor: "#C4C4C4", height: 40, border: '1px solid #ced4da' }}
//                                                                 />

//                                                                 <p id="erroremail" style={{ color: "red" }}>
//                                                                     {/* {formErrors.expdate} */}
//                                                                 </p>
//                                                             </div>
//                                                             <div className=" col-6  mb-1 " >
//                                                                 <label htmlFor="cvvnum" style={{ color: "#282c34", fontSize: 14 }}>
//                                                                     CVV Number
//                                                                 </label>
//                                                                 <input
//                                                                     type="number"
//                                                                     className=" w-100"
//                                                                     id="cvvnum"
//                                                                     name="cvv"
//                                                                     value={formValues.cvv}
//                                                                     onChange={handleChange}
//                                                                     style={{ borderColor: "#C4C4C4", height: 40, border: '1px solid #ced4da' }}
//                                                                 />

//                                                                 <p id="erroremail" style={{ color: "red" }}>
//                                                                     {/* {formErrors.cvvnum} */}
//                                                                 </p>
//                                                             </div>
//                                                         </div>

//                                                     </div>
//                                                 )}
//                                             </div>
//                                             <div style={{ padding: 10 }}>
//                                                 <input type="radio" name="onlinetype" value="UPI" id="UPI" checked={onlineOption1 === 'UPI'} onChange={handleOnlineChange} ></input>
//                                                 <label htmlFor="UPI">  &nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-phone" viewBox="0 0 16 16">
//                                                     <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
//                                                     <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
//                                                 </svg>&nbsp; UPI </label>
//                                                 {upiShow && (
//                                                     <div>
//                                                         <div className=" col-6  mt-3 ms-5 " >
//                                                             <label htmlFor="floatingInput" style={{ color: "#282c34", fontSize: 14 }}>
//                                                                 UPI ID
//                                                             </label>
//                                                             <input
//                                                                 type="text"
//                                                                 className=" w-100"
//                                                                 id="upiid"
//                                                                 name="upi"
//                                                                 value={formValues.upi}
//                                                                 onChange={handleChange}
//                                                                 style={{ borderColor: "#C4C4C4", height: 40, border: '1px solid #ced4da' }}
//                                                             />

//                                                             <p id="erroremail" style={{ color: "red" }}>
//                                                                 {/* {formErrors.upiid} */}
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </div>
//                                             {/* <div style={{ padding: 10 }}>
//                                             <input type="radio" name="onlinetype" value="Gpay" id="Gpay"  ></input>
//                                             <label style={{color:'#00008a'}} htmlFor="Gpay"> &nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-google" viewBox="0 0 16 16">
//                                                 <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
//                                             </svg> &nbsp;  GOOGLE PAY </label>
//                                         </div> */}
//                                             <p style={{ color: "maroon", fontSize: 12 }}>{err1}</p>
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div style={{ padding: 10 }}>
//                                     <input type="radio" name="payment" value="cod" id="cod" checked={selectOption1 === 'cod'} onChange={handleOptionChange1}></input>
//                                     <label htmlFor="cod">  &nbsp;  Cash On Delivery&nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="black" class="bi bi-cash-coin" viewBox="0 0 16 16">
//                                         <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" />
//                                         <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
//                                         <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
//                                         <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
//                                     </svg></label>
//                                     <p style={{ color: "maroon", fontSize: 12 }}>{err1}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div style={{ margin: '20px 5px', width: '100%' }}>
//                             <h5 style={{ color: '#00008a' }}>Billing Address</h5>
//                             <div style={{ padding: 10, border: "1.6px solid grey", borderRadius: 2 }}>
//                                 <div style={{ padding: 10 }}>
//                                     <input type="radio" name="billAddress" value="same" id="same" checked={selectOption2 === 'same'} onChange={handleOptionChange2}></input>
//                                     <label htmlFor="same">&nbsp;Same as Shipping Address</label>
//                                 </div>
//                                 <div style={{ padding: 10 }}>
//                                     <input type="radio" name="billAddress" value="diff" id="diff" checked={selectOption2 === 'diff'} onChange={handleOptionChange2}></input>
//                                     <label htmlFor="diff">&nbsp;Use Different Billing Address</label>
//                                 </div>
//                                 {showDiv2 && (
//                                     <div style={{ paddingLeft: 40 }}>
//                                         <input placeholder="Enter New Billing Address" id="cardnum"
//                                                                 name="billaddr"
//                                                                 value={formValues.billaddr}
//                                                                 onChange={handleChange}style={{ width: '60%',height:60 }}></input>
//                                     </div>
//                                 )
//                                 }
//                                 <p style={{ color: "maroon", fontSize: 12 }}>{err2}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <Button type="submit" className="w-25" style={{ backgroundColor: "#282c34", borderColor: "#282c34", height: 50, marginTop: 20 }}>
//                         Complete Order
//                     </Button>
//                 </div>
//             </form>
//         </div>
//     )
// };


// export default Payment;
























import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Cart.css";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";
import { baseURL } from "../utils/constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
​
export default function Cart(props, setupdateUI) {
  const id = localStorage.getItem("customeremail");
  const [cart, setCart] = useState("");
  const navigate = useNavigate();
​
  useEffect(() => {
    if (props.show && id) {
      axios.get(`${baseURL}/getCart/${id}`).then((res) => {
        setCart(res.data);
      });
    }
  }, [props.show, id]);
​
  const [counts, setCounts] = useState({});
​
  const handleMinus = (productId) => {
    const currentCount = counts[productId] || 1;
    if (currentCount > 1) {
      const updatedCounts = { ...counts, [productId]: currentCount - 1 };
      setCounts(updatedCounts);
    }
  };
​
  const handleButtonChange = (e, totalCost) => {
    e.preventDefault();
​
    const orderDetails = productitems.map((item) => ({
      product_id: item.products[0].product_id,
      product_name: item.products[0].product_name,
      product_price: item.products[0].product_price,
      product_quantity: counts[item.products[0].product_id] || 1,
      product_image: item.products[0].product_image,
    }));
​
    axios
      .put(`${baseURL}/updateOrder/${id}`, {
        task: {
          orderdetails: orderDetails,
          total_price: totalAmount,
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/checkout", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
​
  const productitems = cart;
  let subtotal = 0;
  const shippingCost = 0;
  let totalCost = 0;
​
  if (Array.isArray(productitems)) {
    productitems.forEach((item) => {
      const count = counts[item.products[0].product_id] || 1;
      const calculateOrder = count * item.products[0].product_price;
      subtotal += calculateOrder;
    });
  }
​
  totalCost = subtotal + shippingCost;
  const [totalAmount, setTotalAmount] = useState("");
  useEffect(() => {
    setTotalAmount(totalCost);
  }, [totalCost]);
​
  const handleDelete = (item) => {
    const { _id } = item;
    const confirmDelete = window.confirm("Are you sure you want to remove?");
    if (confirmDelete) {
      axios
        .delete(`${baseURL}/deletecart/${_id}`)
        .then((res) => {
          console.log(res);
          console.log("Deleted");
          setCart((prevItems) => prevItems.filter((item) => item._id !== _id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
​
  return (
    <>
      <Modal id="cart" {...props} size="md" aria-labelledby="contained-modal">
        <Modal.Header closeButton className="mb-2">
          <Modal.Title id="contained-modal" style={{ fontWeight: "normal" }}>
            Your Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="container g-0">
              <div className=" d-flex flex-column">
                {Array.isArray(productitems) && productitems.length > 0 ? (
                  productitems.map((item, index) => {
                    console.log(item);
                    const count = counts[item.products[0].product_id] || 1;
                    const calculateOrder =
                      count * item.products[0].product_price;
                    const subtotalItem = calculateOrder.toLocaleString(
                      "en-US",
                      {
                        style: "currency",
                        currency: "USD",
                      }
                    );
​
                    return (
                      <>
                        <div
                          className="row g-0 p-1 mb-2"
                          style={{
                            border: "1px solid #dee2e6",
                            borderRadius: 2,
                          }}
                        >
                          <div className="col-5 d-block align-items-center justify-content-between">
                            <div>
                              <img
                                src={item.products[0].product_image}
                                alt="item1"
                                width="100%"
                                height="100%"
                              />
                            </div>
                          </div>
                          <div className=" col-7 d-flex flex-column justify-content-between px-2">
                            <div>{item.products[0].product_name}</div>
                            <div style={{ fontStyle: "italic" }}>
                              SubTotal: {subtotalItem}
                            </div>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center justify-content-between ">
                                <DashCircle
                                  id="minus"
                                  style={{
                                    color: "red",
                                    fontSize: 17,
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    handleMinus(item.products[0].product_id)
                                  }
                                />
                                <div
                                  className="px-1"
                                  id="pcount"
                                  style={{ fontWeight: "bold", fontSize: 17 }}
                                >
                                  &nbsp; {count} &nbsp;
                                </div>
                                <PlusCircle
                                  id="plus"
                                  style={{
                                    color: "green",
                                    fontSize: 17,
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    setCounts((prevCounts) => ({
                                      ...prevCounts,
                                      [item.products[0].product_id]:
                                        (prevCounts[
                                          item.products[0].product_id
                                        ] || 1) + 1,
                                    }))
                                  }
                                />
                              </div>
                              <button
                                onClick={() => handleDelete(item)}
                                style={{
                                  backgroundColor: "#cd6155",
                                  border: "none",
                                  borderRadius: 2,
                                  color: "#fff",
                                  padding: "0 0.4rem",
                                }}
                              >
                                REMOVE
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <div className="text-center">Your Cart is Empty</div>
                )}
              </div>
            </div>
          </>
        </Modal.Body>
        {Array.isArray(productitems) && productitems.length > 0 && (
          <Modal.Footer style={{ display: "block" }}>
            <div className="d-flex justify-content-between">
              <div>Subtotal</div>
              <div>
                {subtotal.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
            <div className="d-flex justify-content-between pb-2">
              <div>Shipping</div>
              <div>
                {shippingCost === 0
                  ? "FREE"
                  : shippingCost.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
              </div>
            </div>
            <div
              className="d-flex justify-content-between pb-2"
              style={{ fontWeight: "bold" }}
            >
              <div>Total</div>
              <div type="number" disabled style={{ border: "none" }}>
                {totalCost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
            <Link
              type="button"
              to="/checkout"
              className="secure-checkout"
              onClick={(e) => {
                handleButtonChange(e, totalAmount);
                props.onHide();
              }}
            >
              SECURE CHECKOUT
            </Link>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}