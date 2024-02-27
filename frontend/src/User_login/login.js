// import React, { useState ,useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import Email from "../Email";
// import { baseurl } from "../util/constants";
// import axios from "axios";
// function Login(){
  
//     const nav=useNavigate();
//     function HandleClick(){
//       nav('/Registration', { replace: { from: 'login' } });
//     }
//     const input_style = {width: '326px', height: '51px', borderRadius: '8px'}
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const[message,setMessage]=useState("")
//     const [userdata,setuserdata]=useState("")

//     console.log(email,password);

//     function handleSubmit(e) {
//         console.log(email,password)
//         e.preventDefault();
//         useEffect(() => {
//           fetchData();
//         }, []);
//         const fetchData = async () => {
//           try {
//             const response = await axios.get(`${baseurl}/get`);
//             setuserdata(response.data);
//             console.log(response.data)
//           } catch (error) {
//             console.log("Error fetching data:", error);
//           }
//           // setupdateui((prevState) => !prevState);
//         };
        



//         if (email==="srivathsan@gmail.com"&&password==="1234567") {
//             setMessage("login Success")

//         }
//         else if(email==="srivathsan@admin.com"&&password==="123345678"){
//           console.log("jnsfjnj")
//           nav("/Admin",{replace:{from:'/login'}});
//         }
//         else{
//             setMessage("login invalid")
//         }
//     }

//     return (
//     <section className="Login-page" style={{padding: '50px'}}>
//         <div className="container">
//           <div className="row" style={{width: '100%', height: '610px'}}>
//             <div className="col d-flex flex-column align-items-flex-start justify-content-center">
//               <div className="mb-3">
//                 <h1 className="text-center py-2">Welcome Back</h1>
//                 <h2 className="text-center py-3">Login or Sign up</h2>
//               </div>
//               <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  gap: '10px', flexDirection: 'column'}}>
//                 <form action="#"  method="get" >
//                 <Email value={email} style={input_style}label={""} onChange={((e)=>setEmail(e.target.value))}  />

                 
//                   <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '10px', flexDirection: 'column'}}>
//                   <input 
//                         type="password"
//                         name="password"
//                         value={password}
//                         onChange={((e)=>setPassword(e.target.value))}
//                         style={input_style}
//                         placeholder="Enter Password" />
//                         </div>
//                 </form>
//                 <button type="submit" onClick={handleSubmit}  className="btn btn-primary" style={{width: '326px', height: '51px', backgroundColor : '#dbdee9', color: '#1c1c28', border: 'none'}}>Submit</button>
//                 <span style={{color:"red"}}>{message}</span>
//                 <h6>Or</h6>
//                 <button type="button" onClick={HandleClick} style={{width: '326px', height: '51px', backgroundColor : '#dbdee9', color: '#1c1c28', border: 'none'}}>Sign Up</button>
//                 <div  className="form-text" style={{width: '326px', padding: '10px'}}>
//                   <span>*</span>You may receive SMS updates from Healthkart and can opt out at any time.
//                 </div>
//               </div> 
//             </div>
//           </div>
//         </div>
//       </section>
//     )
// }
// export default Login;



import React, { useState, useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import Email from "../Email";
import { baseurl } from "../util/constants";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const nav = useNavigation
function Login() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userdata, setUserData] = useState([]);

  console.log(email, password);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(`${baseurl}/get`);
      setUserData(response.data);
      console.log(response.data);
    } catch (error) { 
      console.log("Error fetching data:", error);
    }
  }
  console.log(userdata)

  function handleSubmit(e) {
    e.preventDefault();
    console.log("hii",email,password);
    if (userdata.length !=0) {
      userdata.map((user)=>{
        console.log(email === user.email && password === user.Password);
        if (email === user.email && password === user.Password) {
          console.log(email);
          console.log("logged");
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", email);
          setMessage(<div class="alert alert-success">
          <strong>Success!</strong> Indicates a successful or positive action.
        </div>);
        
          nav('/')
          
        }else {
          setMessage("Invalid login credentials");
        }
      }) 
    }
    else setMessage(" login credentials not found");

    
  } 


  

  function handleSignUpClick() {
    nav("/Registration", { replace: { from: "login" } });
  
  }

  const input_style = {
    width: "326px",
    height: "51px",
    borderRadius: "8px",
  };
  return (
        <section className="Login-page" style={{padding: '50px'}}>
            <div className="container">
              <div className="row" style={{width: '100%', height: '610px'}}>
                <div className="col d-flex flex-column align-items-flex-start justify-content-center">
                  <div className="mb-3">
                    <h1 className="text-center py-2">Welcome Back</h1>
                    <h2 className="text-center py-3">Login or Sign up</h2>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  gap: '10px', flexDirection: 'column'}}>
                    <form action="#"  method="get" >
                    <Email value={email} style={input_style}label={""} onChange={((e)=>setEmail(e.target.value))}  />
    
                     
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '10px', flexDirection: 'column'}}>
                      <input 
                            type="password"
                            name="password"
                            value={password}
                            onChange={((e)=>setPassword(e.target.value))}
                            style={input_style}
                            placeholder="Enter Password" />
                            </div>
                    </form>
                    <button type="submit" onClick={handleSubmit}  className="btn btn-primary" style={{width: '326px', height: '51px', backgroundColor : '#dbdee9', color: '#1c1c28', border: 'none'}}>Submit</button>
                    <span style={{color:"red"}}>{message}</span>
                    <h6>Or</h6>
                    <button type="button" onClick={handleSignUpClick} style={{width: '326px', height: '51px', backgroundColor : '#dbdee9', color: '#1c1c28', border: 'none'}}>Sign Up</button>
                    <div  className="form-text" style={{width: '326px', padding: '10px'}}>
                      <span>*</span>You may receive SMS updates from Healthkart and can opt out at any time.
                    </div>
                  </div> 
                </div>
              </div>
            </div>
           <ToastContainer/>
          </section>
        )
    }
    export default Login;
