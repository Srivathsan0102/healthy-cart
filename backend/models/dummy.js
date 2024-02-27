import React, { useEffect } from "react";
import './register1.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";
import {baseURL} from '../utils/constants';
import axios from 'axios';

function RegisterForm1({setUpdateUI}){
    const [f_name, setFname] = useState("");
    const [l_name, setLname] = useState("");
    const initialValues={
        fname:"",
        lname:''
    };
    const [formValues,setFormValues] =useState(initialValues);
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const changeHandler=(e)=>{
        const {name,value}= e.target;
        setFormValues({...formValues,[name]:value})
    }

    const submitHandler=(e)=>{
    e.preventDefault();
    const formErrors = validate(formValues);
    setFormErrors(formErrors);
    setIsSubmit(true);
    

        if (Object.keys(formErrors).length === 0) {
            console.log("Sending data to backend...");
            axios
                .post(`${baseURL}/save`, {
                    task: { fname: formValues.fname, lname: formValues.lname },
                })
                .then((res) => {
                    console.log("Data sent to backend successfully:", res.data);
                    setFname("");
                    setLname("");
                    setUpdateUI((prevState) => !prevState);
                })
                .catch((err) => {
                    console.log("Error sending data to backend:", err);
                });
        }
    }
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate=(values)=>{
        const errors={};
        var nameReg =/^[A-Za-z\s]*$/;
        if(values.fname===""){
            errors.fname="required";
        }else{
            if(!nameReg.test(values.fname)){
                errors.fname="enter a valid first Name!"
            }
        }
        if(values.lname===""){
            errors.lname="required";
        }else{
            if(!nameReg.test(values.lname)){
                errors.lname="enter a valid last Name!"
            }
        };

        return errors;

    }
    return(
        <div>
            
            <div className="container">
             <div className="row d-flex justify-content-center">
                 <div className="col-9 d-flex flex-column  register">
                        <form action=""  onSubmit={submitHandler}>
                            <h2 className="text-center">WELCOME !</h2>
                            <div
                                className="d-flex align-items-center justify-content-between"
                                style={{ height: 70 }}
                            >
                                <svg
                                xmlns="http:www.w3.org/2000/svg"
                                width={22}
                                height={22}
                                fill="currentColor"
                                className="bi bi-person-lines-fill"
                                viewBox="0 0 16 16"
                                >
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                                </svg>
                                <div className="d-flex flex-column">
                                    <input type="text" id="fname" name="fname" 
                                    value={formValues.fname}
                                    onChange={changeHandler}
                                    placeholder="first name*" style={{ width: 280 }}  />
                                    <p>{formErrors.fname}</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <input type="text" id="lname" name="lname"
                                    value={formValues.lname}
                                    onChange={changeHandler}
                                     placeholder="last name*" style={{ width: 280 }}  />

                                    <p>{formErrors.lname}</p>
                                </div>
                                
                            </div>
                            <div className="d-flex justify-content-center">
                                <button
                                    type="submit"
                                    
                                    style={{
                                    border: "none",
                                    backgroundColor: "#8a8888",
                                    width: 200,
                                    borderRadius: 2,
                                    height: 40,
                                    fontWeight: 500
                                    }}
                                >
                                    REGISTER
                                </button>
                                </div>
                        </form>
                 </div>
                 </div>
                 </div></div>
    )
                                };
export default RegisterForm1;