import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../Admin_login/Admin.css"
import { Container } from "react-bootstrap";
import Collapsible from "../Admin_login/adminmenu";
import { useNavigate,useParams } from "react-router-dom";

import { ProductEdit } from "./Productedit";
import { useEffect, useState } from 'react';

 function EditedProduct(){
    // console.log(data)
    const {Id,productname,price } = useParams();
    console.log(Id,productname,price);
    const nav = useNavigate();
    // const input_style = {width: '250px', height: '51px', }
    function HomeNav(){
        nav('/Admin', { replace: { from: '/' } });
    };
    // const [productData, setProductData] = useState(products);
    // console.log(products);

    // useEffect(() => {
    //   fetchData();
    // }, []);
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`${baseurl}/getProductdata`);
    //     setProductData(response.data);
    //     console.log(response.data)
    //   } catch (error) {
    //     console.log("Error fetching data:", error);
    //   }
    //   setupdateui((prevState) => !prevState);
    // };


    return(
        <>
            
            <Container fluid style={{marginTop:"100px",gap:"20px"}}>
                <Row style={{display:"flex",alignItems:"center",justifyContent:"flex-start" }}>
                    <Col lg={4} style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"  }}>
                    <div className="col-3" style={{backgroundColor:"#00b8b9",borderRadius:"15px",padding:"20px",width:"280px"}}>
                        <img style={{borderRadius:"50%  "}} width="70px"height="70px"alt=""src={process.env.PUBLIC_URL + '/businessman.png'}></img>
                        <span style={{color:"#fff",marginLeft:"10px",fontWeight:"600",fontSize: "x-large"}}>Hello,Admin</span>
                    </div>
                    
                    <div className="mt-4 rounded-3" style={{width: '260px'}}>
                        <div className="dropdown  my-2">
                            <button onClick={HomeNav} className=" card dropdown-toggle collapsible" type="button" id="dropdownMenuButton1" style={{width: '230px', paddingRight: '100%', paddingTop: '15px', border: 'none!important'}}>
                                <span style={{fontSize: '16px', lineHeight: '24px', fontWeight: 600}}>Home</span>
                            </button>
                        </div>
                        <Collapsible/>
                    </div>
                    </Col>
                    <Col lg={4} style={{paddingTop:'100px'}}>
                        <ProductEdit id={Id} productname={productname} prices={price}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default EditedProduct;