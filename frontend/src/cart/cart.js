import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import  "./cart.css"
import React from "react";
import CartDetail from "./cart-detail";
const Cart = () => {
  return (
    <>
      <Container>
        <Row >
          <div className="d-flex align-items-center justify-content-center  mt-3 " style={{paddingLeft:"7rem"}}>
          <Col sm={3}>
            <div className="HKimg ">
              <Link to="/">
                <img
                  alt="HealtHKarT"
                  id="mainimg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysDdjBKQWA739mY8tX7SHqUVXHyXY5AzDFg&usqp=CAU"
                />
              </Link>
            </div>
          </Col>
          <Col lg={5}>
            <div className="d-flex align-items-center justify-content-around cart">
              <div className="col-xs-3 steps ">
              <Link to="/Cart" style={{textDecoration:"none",color:"#000"}}>
                <img
                  className="cart-icon"
                  alt="tick"
                  src="https://static1.hkrtcdn.com/hknext/static/media/checkout/blue-cart.svg"
                />
                <div style={{fontSize:"small",textAlign:"center"}}>Cart</div>
                <div> </div>
                </Link>
              </div>
              <div className="col-xs-3 steps ">

                <img
                  className="address-icon"
                  alt="tick"
                  src="https://static1.hkrtcdn.com/hknext/static/media/checkout/grey-address.svg"
                />
                <div style={{fontSize:"small",textAlign:"center"}}>Address</div>
                <div className="horizontal-rule"> </div>

              </div>
              <div className="col-xs-3 steps ">
                <img
                  className="payment-icon"
                  alt="tick"
                  src="https://static1.hkrtcdn.com/hknext/static/media/checkout/grey-payment.svg"
                />
                <div style={{fontSize:"small",textAlign:"center"}} >Payment</div>
              </div>
            </div>
          </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
