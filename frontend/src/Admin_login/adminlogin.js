import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from "../util/constants";

function AdminLogin(){

    const nav=useNavigate();
   
    const input_style = {width: '326px', height: '51px', borderRadius: '8px'}
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const[message,setMessage]=useState("")
    console.log(email,password);
  //   try {
  //     const response = axios.post(`${baseurl}/checkAdmin`, {
  //         task:{
  //             admin_mail:email,
  //             admin_password:password,
  //         }
  //     });
  //     console.log("checked");
  //     console.log(response,"matching");
  // } catch {
  //     console.log('error')
  // }
    function handleSubmit(e) {
        console.log(email,password)
        e.preventDefault();
       
        if (email==="srivathsan@gmail.com" || "vatson@gmail.com"  &&password==="1234567") {
            setMessage("login Success")
            const value = email.split("@")[0];
            localStorage.setItem("adminname", value);
            localStorage.setItem("Islogin",true)
            nav("/Admin",{replace:{from:'/AdminLog'}});
            console.log(localStorage.getItem("adminname"));
        }
        else if(email==="srivathsan@admin.com"&&password==="123345678"){
          console.log("jnsfjnj")
          nav("/Admin",{replace:{from:'/AdminLog'}});
        }
        else{
            setMessage("login invalid")
        }
        
    }

    return (
    <section className="AdminLogin-page" style={{padding: '50px'}}>
          <div className="d-flex flex-column align-items-center justify-content-center"style={{height: "370px"}}>
            <div className="col card ">
            <div className="mb-3" style={{width:"30%"}}>
                <h2 className="text-center py-3" style={{backgroundColor:"rgb(0, 184, 185)",borderRadius:"10px",color:"#fff"}}>Admin</h2>
              </div>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '10px', flexDirection: 'column'}}>
                <form action="#"  method="get" >
                  <input  
                        type="email"
                        name="email"
                        value={email}
                        onChange={((e)=>setEmail(e.target.value))} style={input_style} placeholder="Enter Email or Mobile Number" /> 
                  <br /><br />
                  <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={((e)=>setPassword(e.target.value))}
                        style={input_style}
                        placeholder="Enter Password" />
                </form>
                <button type="submit" onClick={handleSubmit}  className="btn btn-primary" style={{width: '326px', height: '51px', backgroundColor : '#dbdee9', color: '#1c1c28', border: 'none'}}>Submit</button>
                <span style={{color:"red"}}>{message}</span>
                <Link to='/'> <button style={{backgroundColor : "rgb(0, 184, 185)", color: '#fff',borderRadius:"4px", border: 'none'}}>back</button></Link>
              </div> 
            </div>
          </div>
      </section>
    )
}
export default AdminLogin;