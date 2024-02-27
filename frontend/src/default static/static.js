import React from "react";
import FlashLive from "../flashl ive/flashlive";
import Slider from "../Admin_login/Slide/slider";
import Product from "../Product/product";
import DiscountImg from "../Discountimg/discountimg";
import FlashProduct from "../Product/flashproduct";

function Static(){
    return(
        <>
        <FlashLive/>
        <Slider/>
        <Product/>
        <DiscountImg/>
        <FlashProduct/>
        </>
    )
}
export default Static;