// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import "../Admin_login/Admin.css"
// import Tables from "./table";
// import ProductTable from "./productviewtable";
// import { AdminNav } from "./Adminnavbar";
// import { Link, useNavigate } from "react-router-dom";

// export default function Admin({products,setupdateui}){
//     const nav =useNavigate();
    


//     return(
//         <Container style={{marginTop:"0px",gap:"20px"}}>
//         <Row style={{display:"flex",alignItems:"center",justifyContent:"flex-start" }}>
//             <Col lg={4} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" }}>
//             <div className="col-3" style={{backgroundColor:"#00b8b9",borderRadius:"15px",padding:"20px",width:"280px"}}>
//             <Link to='/AdminLog' style={{textDecoration:"none",textDecorationLine:"none"}}> <img style={{borderRadius:"50%  "}} width="70px"height="70px"alt=""src={process.env.PUBLIC_URL + '/businessman.png'}></img>
//                 <span style={{color:"#fff",marginLeft:"10px",fontWeight:"600",fontSize: "x-large"}}>Hello,{localStorage.getItem("adminname")}</span></Link>
//             </div>
//             <AdminNav/>
//             </Col>
//             <Col style={{paddingTop:'0px'}}>
//                 <ProductTable link='/Adminadd' label="Add Product" tableStyle={{padding: "10px",marginTop:"130px",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"space-around"}}/>
//                 <Tables products ={products} setupdateui={setupdateui}/>
//             </Col>
//         </Row>
//         </Container>
//     )
// }


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Admin_login/Admin.css"
import { AdminNav } from "../Admin_login/Adminnavbar";
import CategoryTable from "../Category/categorytable";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import ProductTable from "./productviewtable";
import Tables from "./table";
import { useNavigate } from "react-router-dom";

export default function Admin({products,category,setupdateui}){
    const tableStyle={padding: "10px",marginTop:"50px",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"50px"};
    console.log(setupdateui);
    const nav = useNavigate();

    if(localStorage.getItem("Islogin")){
        return( 
            <div>
                <Container fluid style={{marginTop:"60px",gap:"20px"}}>
                <Row style={{display:"flex",    justifyContent:"flex-start" }}>
                 <Col lg={4} style={{display:"flex",alignItems:"center",flexDirection:"column"  }}>
                    <div className="col-3" style={{backgroundColor:"#00b8b9",borderRadius:"15px",padding:"20px",width:"280px"}}>
                    <Link to='/AdminLog' style={{textDecoration:"none",textDecorationLine:"none"}}> <img style={{borderRadius:"50%  "}} width="70px"height="70px"alt=""src={process.env.PUBLIC_URL + '/businessman.png'}></img>
                    <span style={{color:"#fff",marginLeft:"10px",fontWeight:"600",fontSize: "x-large"}}>Hello,Admin</span></Link>
                    </div>
                    <AdminNav/>
                    </Col>
                    <Col lg={7}  style={{paddingTop:'0px'}}>
                    {/* <ProductTable link='/Adminadd' label="Add Product" tableStyle={{padding: "10px",marginBottom:"20px",display:"flex",justifyContent:"space-around"}}/> */}
                    <Tables products ={products} setupdateui={setupdateui}/>                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    else{
        nav('/AdminLog')
    }
    
}


