import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Admin_login/Admin.css"
import { AdminNav } from "../Admin_login/Adminnavbar";
import SubCategoryTable from "./SubCategory";
import ProductTable from "../Admin_login/productviewtable";
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom";

export default function SubCategoryView(){
    if(localStorage.getItem("Islogin")){
        return(
            <div>
                <Container fluid style={{marginTop:"60px",gap:"20px"}}>
                <Row style={{display:"flex",justifyContent:"flex-start" }}>
                 <Col lg={4} style={{display:"flex",alignItems:"center",flexDirection:"column"  }}>
                    <div className="col-3" style={{backgroundColor:"#00b8b9",borderRadius:"15px",padding:"20px",width:"280px"}}>
                    <Link to='/AdminLog' style={{textDecoration:"none",textDecorationLine:"none"}}> <img style={{borderRadius:"50%  "}} width="70px"height="70px"alt=""src={process.env.PUBLIC_URL + '/businessman.png'}></img>
                    <span style={{color:"#fff",marginLeft:"10px",fontWeight:"600",fontSize: "x-large"}}>Hello,Admin</span></Link>
                    </div>
                    <AdminNav/>
                    </Col>
                    <Col lg={8} >
                            {/* <ProductTable label="Add SubCategory" link="/SubCategoryFormView" tableStyle={{padding: "10px",marginTop:"0px",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"flex-start",}}   /> */}
                            <SubCategoryTable/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
   
}