import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Admin_login/Admin.css"
import { AddProduct } from "./addproduct";
import { AdminNav } from "./Adminnavbar";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container"

export default function AdminAdded({setupdateui}){
    const nav = useNavigate()
    if(localStorage.getItem("Islogin")){
        return(
            <div>
                <Container fluid style={{marginTop:"20px",gap:"20px"}}>
                <Row style={{display:"flex",justifyContent:"flex-start" }}>
                 <Col lg={4} style={{display:"flex",alignItems:"center",flexDirection:"column"  }}>
                    <div className="col-3" style={{backgroundColor:"#00b8b9",borderRadius:"15px",padding:"20px",width:"280px"}}>
                        <img style={{borderRadius:"50%  "}} width="70px"height="70px"alt=""src={process.env.PUBLIC_URL + '/businessman.png'}></img>
                        <span style={{color:"#fff",marginLeft:"10px",fontWeight:"600",fontSize: "x-large"}}>Hello,{localStorage.getItem("adminname")}</span>
                    </div>
                    <AdminNav/>
                    </Col>
                    <Col lg={8} >
                            <AddProduct setupdateui={setupdateui}/>
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