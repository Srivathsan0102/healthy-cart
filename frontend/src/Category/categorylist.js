import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Admin_login/Admin.css"
import { AdminNav } from "../Admin_login/Adminnavbar";
import CategoryTable from "./categorytable";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"

export default function CategoryList({products,category,setupdateui}){
    const tableStyle={padding: "10px",marginBottom:"20px",display:"flex",justifyContent:"flex-start",gap:"50px"};
    console.log(setupdateui);


    if(localStorage.getItem("Islogin")){
        return( 
            <div>
                <Container fluid style={{marginTop:"60px",gap:"20px"}}>
                <Row style={{display:"flex",justifyContent:"flex-start" }}>
                 <Col lg={4} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"  }}>
                    <div className="col-3" style={{backgroundColor:"#00b8b9",borderRadius:"15px",padding:"20px",width:"280px"}}>
                    <Link to='/AdminLog' style={{textDecoration:"none",textDecorationLine:"none"}}> <img style={{borderRadius:"50%  "}} width="70px"height="70px"alt=""src={process.env.PUBLIC_URL + '/businessman.png'}></img>
                    <span style={{color:"#fff",marginLeft:"10px",fontWeight:"600",fontSize: "x-large"}}>Hello,{localStorage.getItem("adminname")}</span></Link>
                    </div>
                    <AdminNav/>
                    </Col>
                    <Col lg={8}  style={{paddingTop:'0px'}}>
                        <div className="col"style={tableStyle}>
                        <h6 style={{textAlign:"start"}}>Hello,Welcome to HealthKart</h6>
                        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                                <input type="search"id="search"style={{width:"300px",height:"35px"}}/>
                                <Link to='/CategoryView'> 
                                    <button style={{border:"none",width:"150px",height:"35px",borderRadius:"5px"}}>
                                        <span>Add Category</span>
                                    </button>
                                </Link>
                        </div>
                    </div>
                        <CategoryTable Category ={category} setupdateui={setupdateui}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
   
}