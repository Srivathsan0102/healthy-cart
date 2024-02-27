import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { baseurl } from "../util/constants";
import CartPop from "../cart/cartpop";
import Modal from "react-bootstrap/Modal";

function HealthkartHeader(props) {
  const nav = useNavigate();
  const [disp, setdisp] = useState("none");
  const [isLoggedIn, setisloggedin] = useState(localStorage.getItem("isLoggedIn"));
  const [loggegMail, setLoggedmail] = useState();
  const [count, setCount] = useState(0); // Initialize count with 0

  function AddCart() {
    setdisp("block");
  }

  function AddCartClose() {
    setdisp("none");
  }

  useEffect(() => {
    setisloggedin(localStorage.getItem("isLoggedIn"));
    setLoggedmail(localStorage.getItem("username"));
  }, []);

  function LogOut() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setisloggedin(false);
    window.alert("you are logged out")
   
  }


  const [updateui, setupdateui] = useState(false);
  const [cart, setCartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [updateui]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseurl}/getCartdata`);
      setCartData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    let totalCount = 0;

    cart.forEach((item) => {
      totalCount += item.Quantity;
    });

    setCount(totalCount);
  }, [cart]);
  // const value = (localStorage.getItem("username")).split("@")[0];
  return (
    <>
      <div>
        <Container fluid>
          <header className="header w-100%">
            <div className="inner-header">
              <div className="header-one">
                <Row>
                  <Col sm={3}>
                    <div className="HKimg ">
                     <Link to='/'> <img alt="HealtHKarT" id="mainimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysDdjBKQWA739mY8tX7SHqUVXHyXY5AzDFg&usqp=CAU" /></Link>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="search-icon  w-100%">
                      <input type="search" id="search" placeholder="Search for products and Brands" />
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="login-cart">
                      {!isLoggedIn &&
                        <div className="login">
                          <Link to="/login">
                            <button className="login-button">Login</button>
                          </Link>
                        </div>
                      }
                      { 
                      
                       isLoggedIn &&

                        <div className="login">
                          <button onClick={LogOut} className="login-button">{localStorage.getItem("username").split("@")[0]}</button>
                        </div>
                      
                      }
                      <div style={{ marginLeft: "3vw" }}>
                        <Link to="/AdminLog">
                          <img width="30px" height="30px" alt="" src={process.env.PUBLIC_URL + '/account.svg'} />
                        </Link>
                      </div>
                      <div className="d-flex align-items-center justify-content-center flex-column">
                        <div className="cart-hk">
                          <div className="cart-icon">
                            <img onMouseOver={AddCart} id="cart" src="http://cdn.onlinewebfonts.com/svg/img_290616.png" alt="Cart" />
                          </div>
                          <div className="count d-flex align-items-center justify-content-center rounded-4">
                            <span>{isLoggedIn ? count : 0}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div style={{ display: disp, right: "-15px", top: "60px", zIndex: "4" }} className="position-absolute bg-white " onMouseLeave={AddCartClose}>
                  <CartPop />
                </div>
              </div>
            </div>
          </header>

          <div>
            <ToastContainer />
          </div>
        </Container>
      </div>
    </>
  );
}

export default HealthkartHeader;
