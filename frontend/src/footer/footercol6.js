import React, { useState } from "react";
import './footer.css'

 function FooterCol6(){
    const [email,setemail]=useState("");
    const [emailError,setemailError]=useState("")

    function HandleSubmit(e){
      e.preventDefault();
      if(!email){
        setemailError("enter the valid email");
      }
      else{
        setemailError("Subscribed")
      }
    }

    return(
        <>
            <div className="footer_subscriber col-3 col-xs" style={{width: '28%'}}>
                <div className="footer_subscriber-col">                  
                  <span>Subscriber</span>
                  <div className="newsletter">
                    <form onSubmit={HandleSubmit} className="sub-info d-flex">
                      <input 
                        type="email"
                        value={email} 
                        onChange={((e)=>setemail(e.target.value))}
                         placeholder="Enter Your Email" />
                      <button type="submit" id="Subscriber-button"><img alt="img"src="https://static1.hkrtcdn.com/hknext/static/media/pdp/arrow-right.svg" /></button>
                                        
                    </form>
                    <span style={{color:"red"}}>{emailError}</span>
                    
                  </div>
                  <p className="description"> " Get newsletters and exclusive offers"</p>
                </div>
                <div className="box-icons">
                  <img id="icon-boxs" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/Return.png" alt="return policy" />
                  <img id="icon-boxs" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/authenticity.png" alt="Authenticity Guaranteed" />    
                  <img id="icon-boxs" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/secure.png" alt="secure" />
                </div>
                <div className="social">
                  <span className="social-title">Follow Us on</span>
                  <div className="social-icons-box">
                    <a href="https://www.facebook.com/healthkart" target="_blank" rel="noopener noreferrer"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/facebook-new.svg" alt="facebook" /></a>
                    <a href="https://www.instagram.com/healthkart/?hl=en" target="_blank" rel="noopener noreferrer"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/Instagram-new.svg" alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/company/healthkart" target="_blank" rel="noopener noreferrer"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/LinkedIn-new.svg" alt="Linkedin" /></a>
                    <a href="https://www.youtube.com/user/healthkart" target="_blank" rel="noopener noreferrer"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/Youtube-new.svg" alt="Youtube" /></a>
                    <a href="https://twitter.com/healthkart" target="_blank" rel="noopener noreferrer"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/twitter-new.svg" alt="Twitter" /></a>
                    <a href="https://in.pinterest.com/healthkart/" target="_blank" rel="noopener noreferrer"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/pinterest-icon.svg" alt="Pinterest" /></a>
                  </div>
                </div>
                <div className="app">
                  <span className="title">Download Our App</span>
                  <div className="logos">
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/google-badge.svg" className="android-store" alt="Healthkart Android App" />
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/app-store-new.svg" className="app-store" alt="Healthkart IOs App" />
                  </div>
                </div>
            </div>
        </>
    )}
    export default FooterCol6;