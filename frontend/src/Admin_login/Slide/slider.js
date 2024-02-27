import React from "react";
import Carousel from 'react-bootstrap/Carousel';
function Slider(){
    return(
        <Carousel>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://img3.hkrtcdn.com/23197/bnr_2319652_o.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img9.hkrtcdn.com/23178/bnr_2317708_o.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src="https://img1.hkrtcdn.com/23178/bnr_2317700_o.png"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
    )
}
export default Slider;