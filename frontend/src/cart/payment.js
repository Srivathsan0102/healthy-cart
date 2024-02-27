import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseurl } from "../util/constants";
import OrderSummary from "./odersummary";


function Payment(props) {
    const nav = useNavigate();
    const [showDiv, setShowDiv] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);

    const [creditshow,setCreditShow] = useState(false);
    const [upiShow,setUpiShow] = useState(false);
    const amounttopay = useParams();
    console.log();
    console.log(amounttopay);
    const{Cartamount,MRP,totalMrpAmount}= props;
    


    const [err1, setErr1] = useState('');
    const [err2, setErr2] = useState('');
    const [selectOption1, setSelectedOption1] = useState('');
    const [selectOption2, setSelectedOption2] = useState('');
    const [onlineOption1,setOnlineOption1] = useState('');
    const [data, setData] = useState([])
    const handleOptionChange2 = (e) => {
        setSelectedOption2(e.target.value);
        const value = e.target.value;
        if (value === 'diff') {
            setShowDiv2(true)
        } else {
            setShowDiv2(false)
        }
    };
    const handleOptionChange1 = (e) => {
        setSelectedOption1(e.target.value);
        const value = e.target.value;
        if (value === 'online') {
            setShowDiv(true);
        } else {
            setShowDiv(false);
        }
    };

    const handleOnlineChange =(e)=>{
        setOnlineOption1(e.target.value);
        const value = e.target.value;
        if(value==='CreditCard'){
            setCreditShow(true);
        }else{
            setCreditShow(false);
        }

        if(value==='UPI'){
            setUpiShow(true);
        }else{
            setUpiShow(false)
        }
    }

    const navigate = useNavigate();
    const [loginID, setLoginID] = useState(localStorage.getItem("loginID"));
    useEffect(() => {
        setLoginID(localStorage.getItem('loginID'))
    },);

    useEffect(() => {
        fetchData();
    }, [loginID]);
    const id = localStorage.getItem("loginID");
    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseurl}/getship/${id}`);
            setData(res.data);

            console.log(data, 'data');
            console.log(res.data, 'resdata')



        } catch (err) {
            console.log(err.message);
        }
    }


    const handleSubmit = (e) => {
        console.log("kkk");
        e.preventDefault();
        if (selectOption1 === '') {
            setErr1('select any option')
            console.log('select any option')
        } else {
            setErr1('')
            console.log("selected option:", selectOption1);
        }
        if (selectOption2 === '') {
            setErr2('select any option')
            console.log('select any option')
        } else {
            setErr2('')
            console.log("selected option:", selectOption2);
        }
        console.log(amounttopay.amount);
 
        nav(`/finalorder/${amounttopay.amount}/${amounttopay.mail}`)

    }
   
    
    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} style={{ width: '95%' }}>
                <div className=" row d-flex  justify-content-evenly align-start" style={{ padding: '5px 50px 40px 50px',borderRadius: 2, marginTop: 30 ,backgroundColor:'#fffafa'}}>
                <div className="col-6 d-flex flex-column">
                <h2 style={{ marginTop: 25,textAlign:'center',color:"#006279" }}>PAYMENT</h2>

                    <div style={{ margin: '20px 5px', width: '100%' }}>
                        <h5 style={{color:'#00008a'}}>Payment Method</h5>
                        <div style={{ padding: 10, border: "1.6px solid grey", borderRadius: 2 }}>
                            <div  style={{ padding: 10 }}>
                                <div className="d-flex align-items-center">
                                <input type="radio" name="payment" value="online" id="online" checked={selectOption1 === 'online'} onChange={handleOptionChange1}></input>
                                <label style={{color:'#00008a'}} htmlFor="online" > &nbsp; Standard Shipping(pay online)&nbsp; &nbsp; </label>
                                </div>
                                {showDiv && (
                                    <div>
                                        <div style={{ padding: 10 }}>
                                        <div className="d-flex align-items-center">
                                            <input type="radio" name="onlinetype" value="CreditCard" id="CreditCard" checked={onlineOption1==='CreditCard'} onChange={handleOnlineChange} ></input>
                                            <label style={{color:'#00008a'}} htmlFor="CreditCard"> &nbsp;&nbsp;&nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                                <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                                                <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                            </svg> &nbsp;  CREDIT CARD</label>
                                            </div>
                                            {creditshow && (
                                                    <div className="form-floating mb-3 d-flex justify-content-center mt-3" style={{width:'70%'}}>
                                                        <input
                                                            type="text"
                                                            className="form-control w-100"
                                                            id="cardnum"
                                                            name="cardnum"
                                                            placeholder=""
                                                            style={{ borderColor: "#C4C4C4",height:30 }}
                                                        />
                                                        <label htmlFor="floatingInput" style={{ color: "#C4C4C4" }}>
                                                            Card Number
                                                        </label>
                                                        <p id="erroremail" style={{ color: "red" }}>
                                                            {/* {formErrors.cardnum} */}
                                                        </p>
                                                        </div>
                                                )}
                                        </div>
                                        <div style={{ padding: 10 }}>
                                        <div className="d-flex align-items-center">
                                                <input type="radio" name="onlinetype" value="UPI" id="UPI" checked={onlineOption1 === 'UPI'} onChange={handleOnlineChange} ></input>
                                                <label htmlFor="UPI">  &nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-phone" viewBox="0 0 16 16">
                                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                </svg>&nbsp; UPI </label>
                                                </div>
                                                {upiShow && (
                                                    <div>
                                                        <div className=" col-6  mt-3 ms-5 " >

                                                            <label htmlFor="floatingInput" style={{ color: "#282c34", fontSize: 14 }}>
                                                                UPI ID
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className=" w-100"
                                                                id="upiid"
                                                                name="upi"
                                                                // value={formValues.upi}
                                                                // onChange={handleChange}
                                                                style={{ borderColor: "#C4C4C4", height: 40, border: '1px solid #ced4da' }}
                                                            />

                                                            <p id="erroremail" style={{ color: "red" }}>
                                                                {/* {formErrors.upiid} */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        {/* <div style={{ padding: 10 }}>
                                            <input type="radio" name="onlinetype" value="Gpay" id="Gpay"  ></input>
                                            <label style={{color:'#00008a'}} htmlFor="Gpay"> &nbsp;&nbsp;&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-google" viewBox="0 0 16 16">
                                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                            </svg> &nbsp;  GOOGLE PAY </label>
                                        </div> */}
                                        <p style={{ color: "maroon", fontSize: 12 }}>{err1}</p>
                                    </div>  
                                )}
                            </div>
                            <div style={{ padding: 10 }}>
                            <div className="d-flex ">
                                <input type="radio" name="payment" value="cod" id="cod" checked={selectOption1 === 'cod'} onChange={handleOptionChange1}></input>
                                <label style={{color:'#00008a'}} htmlFor="cod">  &nbsp;  Cash On Delivery&nbsp; &nbsp;</label>
                                <p style={{ color: "maroon", fontSize: 12,float:"right" }}>{err1}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-center">
                    <Button type="submit"   style={{ backgroundColor: "#00b5b7", borderColor: "#282c34", height: 50,width:150,marginTop:20 }}>
                        Complete Order
                    </Button>
                    </div>
                    </div>
                    <div className="col-6">
                            <OrderSummary amounttopay= {amounttopay.amount} totalMrpAmount={amounttopay.mrp}/> 

                        {/* {data
                            .filter((task) => task.name.fname === nameFromShip.fname && task.name.lname === nameFromShip.lname)
                            .map((task) => (
                                <>
                                    <div className="d-flex flex-column "  style={{ margin: '10px 5px', width: '90%' }}>
                                        <div style={{ marginTop: 10 }}>
                                            <h5>Contact</h5>
                                            <p style={{ padding: 10, border: "1.6px solid grey", borderRadius: 2 }}>{`Mr./MS.               ${task.name.fname}`}<br />{`MAIL ID    :     ${task.contact_details.email}`}<br />{`CONTACT NO         :           ${task.contact_details.contact_no}`}</p>
                                        </div>
                                        <div style={{ marginTop: 20 }}>
                                            <h5>Ship to</h5>
                                            <p style={{ padding: 10, border: "1.6px solid grey", borderRadius: 2 }}>{`Mr./MS.               ${task.name.fname}`}<br/>{`ADDRESS          :           ${task.contact_details.address} , ${task.contact_details.city} , ${task.contact_details.state} , ${task.contact_details.country} , ${task.contact_details.pincode}.`}</p>
                                        </div>
                                    </div>
                                </>
                            ))} */}
                    </div>
                    
                </div>
            </form>

        </div>
    )
};

export default Payment;