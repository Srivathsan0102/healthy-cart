import React, { useState } from 'react'

export default function GiftCard(){
    const [RedeemCode,setRedeemCode]=useState("");
    const [RedeemcodeError,setRedeemCodeError]=useState("");
    let valid,invalid;
    function HandleSubmit(e){
        e.preventDefault();
        console.log("sjnadn")
        let regex = /^[0-9]+$/;
        let code = regex.test(RedeemCode)
        console.log(code);
        if (RedeemCode > 1000 && RedeemCode < 1500){
            setRedeemCodeError("Gift Card is Redeemed")
        }
        if(!code){
            setRedeemCodeError("Redeem Code Inavlid")
            
        }
    }
    return(
        <section>
        <div className="container">
          <div className="row">
            <div style={{paddingTop: '20px'}}>
              <img src="https://static1.hkrtcdn.com/hknext/static/media/giftCard/gift-card-banner.svg" />
            </div>
          </div>
          <div className="row" style={{marginTop: '60px'}}>
            <div className="col-8">
              <div className style={{fontFamily: 'Montserrat,sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: '24px'}}>
                HK Gift Card Benefits</div>
              <div className="d-flex align-items-center" style={{columnGap : '40px'}}>
                <div>
                  <img src="https://static1.hkrtcdn.com/hknext/static/media/giftCard/benefits/one-click-checkout.svg" />
                  <span> Applied to All Products</span>
                </div>
                <div>
                  <img style={{height: '140px'}} src="https://static1.hkrtcdn.com/hknext/static/media/giftCard/benefits/applicable.svg" />
                  <span> Credit to HK Cash</span>
                </div>
                <div>
                  <img src="https://static1.hkrtcdn.com/hknext/static/media/giftCard/benefits/instant-credit.svg" />
                  <span> One Click Checkout</span>
                </div>
                <div>
                  <img src="https://static1.hkrtcdn.com/hknext/static/media/giftCard/benefits/applied.svg" />
                  <span>Applicable on All Sales</span>
                </div>
              </div>
            </div>
            <div className="col-4 gift-form" style={{width: '350px'}}>
              <div>
                <h3>Redeem Gift Card</h3>
                <form  action="#"onSubmit={HandleSubmit} method="get" style={{padding: '10px'}}>
                  <label>Enter Gift Card Number*</label>
                  <br /><br />   
                  <input 
                        className="gift-input"
                         style={{width: '300px', height: '50px'}} 
                         id="redeem-input" 
                         type="text"
                         value={RedeemCode}
                         onChange={((e)=>setRedeemCode(e.target.value))} />
                  <button type="submit" className="gift-input" style={{width: '300px', height: '50px', backgroundColor: '#dbdee9'}} id="redeem-button">Redeem</button>
                </form>
                <span >{RedeemcodeError}</span>;
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}