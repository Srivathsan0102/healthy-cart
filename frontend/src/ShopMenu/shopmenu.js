import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfMenu from "./listofmenu";
import { Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { IconName } from "react-icons/fa";
// import { icons } from "react-icons/lib";

function ShopMenu(){
    return(
        <div className="header-menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">    
        <div className="container-fluid justify-content-around  ">
            <div className="row gx-5 "style={{gap:"30px"}}>
                <div className="dropdown-custom col-2">
                    <Link to='/productList'><button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{border: 'none', backgroundColor: 'white'}}>
                        <svg id="shop-icon" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H12" stroke="#00B5B7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M4 6H19" stroke="#00B5B7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /><path d="M4 18H16" stroke="#00B5B7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span style={{color: 'black'}}> Shop By Category</span>
                    </button>
                    </Link>
                </div>
                <ListOfMenu/>
            </div>
        </div>
        </nav>
      </div>
    
    )
}
export default ShopMenu