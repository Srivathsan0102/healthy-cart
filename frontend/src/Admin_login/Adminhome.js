import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Admin_login/Admin.css"
import { Link, useNavigate } from "react-router-dom";
import ViewList from "./Viewlist";
import { AdminNav } from "./Adminnavbar";
export default function AdminHome(){
    const nav = useNavigate();
    // const input_style = {width: '250px', height: '51px', borderRadius: '8px'}
//   nav('/OnOrder', { replace: { from: 'AdminLog' } });

  if(localStorage.getItem("Islogin")){
    return(
        <div>
            
            <Container style={{margin:"50px 100px",gap:"20px"}}>
                <Row style={{columnGap:"100px"}}>
                <div className="col-3" style={{backgroundColor:"#00b8b9",borderRadius:"15px",padding:"20px",width:"280px"}}>
                <Link to='/AdminLog' style={{textDecoration:"none",textDecorationLine:"none"}}> <img style={{borderRadius:"50%  "}} width="70px"height="70px"alt=""src={process.env.PUBLIC_URL + '/businessman.png'}></img>
                <span style={{color:"#fff",marginLeft:"10px",fontWeight:"600",fontSize: "x-large"}}>Hello,{localStorage.getItem("adminname")}</span></Link>
                </div>
                <div className="col"style={{padding: "30px 0"}}>
                    <h4 style={{textAlign:"start"}}>Hello,Welcome to HealthKart</h4>
                </div>
                </Row>
                <Row style={{columnGap:"40px"}}>
                <AdminNav/>    
                <Col>
                    <ViewList/>
                </Col>
                </Row>
            </Container>
        </div>
    )
  }
  else{
    nav('/AdminLog')
}

   
}