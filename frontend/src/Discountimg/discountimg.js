import React from "react";
function DiscountImg(){
    const discountImg=[
        {img: <img alt="img" style={{width: '20vw', height: '28vw'}} src="https://img7.hkrtcdn.com/22576/bnr_2257566_o.jpg" />},
        {img: <img alt="img" style={{width: '20vw', height: '28vw'}}  src="https://img1.hkrtcdn.com/22576/bnr_2257570_o.jpg"/> },
        {img: <img alt="img" style={{width: '20vw', height: '28vw'}}src="https://img9.hkrtcdn.com/22576/bnr_2257568_o.jpg"/>},
        {img: <img alt="img" style={{width: '20vw', height: '28vw'}} src="https://img3.hkrtcdn.com/22576/bnr_2257572_o.jpg" />}
    ]
    return(
        <section className="discount" style={{padding: '2vw 7.6vw', width: '100%', marginTop: '1.6vw', backgroundColor: '#fff', borderTop: '0.6vw solid #f4f4f4'}}>
        <div className="container">
          <div className="discount_items row">
            <div className="body-megaprice col"><h1 style={{fontSize: '25px', fontWeight: 600}}>Picks You Can't Miss</h1></div>
          </div>
        </div>
        <div className="discount_products container">
          <div className="products_items row">
            {discountImg.map((image)=>{
                return image.img
            })}
            </div>
        </div>
      </section>
    )
}
export default DiscountImg;
