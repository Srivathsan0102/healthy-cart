import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Admin_login/Admin.css"
import OrderTable from "./Orderlist";
import { AdminNav } from "./Adminnavbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Admin(){
    const nav =useNavigate();

    if(localStorage.getItem("Islogin")){
        return(
            <div>
                <Container style={{marginTop:"60px",gap:"20px"}}>
                <Row style={{display:"flex",justifyContent:"flex-start" }}>
                 <Col lg={4} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"  }}>
                    <div className="col-3" style={{backgroundColor:"#00b8b9",borderRadius:"15px",padding:"20px",width:"280px",marginTop:"0"}}>
                    <Link to='/AdminLog' style={{textDecoration:"none",textDecorationLine:"none"}}> <img style={{borderRadius:"50%  "}} width="70px"height="70px"alt=""src={process.env.PUBLIC_URL + '/businessman.png'}></img>
                    <span style={{color:"#fff",marginLeft:"10px",fontWeight:"600",fontSize: "x-large"}}>Hello,{localStorage.getItem("adminname")}</span></Link>
                    </div>
                    <AdminNav/>
                    </Col>
                    <Col style={{marginTop:'50px'}}>
                    <h6 style={{textAlign:"start",margin:"20px 0"}}>Hello,Welcome to HealthKart</h6>
                            <OrderTable/>
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



