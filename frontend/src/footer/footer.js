import React from "react";
import './footer.css'
import FooterCol1 from "./footercol1";
import FooterCol2 from "./footercol2";
import FooterCol3 from "./footercol3";
import FooterCol4 from "./footercol4";
import FooterCol5 from "./footercol5";
import FooterCol6 from "./footercol6";
import FooterLast from "./footerlast";
function Footer(){
    return(
        <section className="footer" style={{backgroundColor: '#0d2122'}}>
        <div className="section-footer">
          <div className="container" style={{padding: '40px 0px', marginTop: '40px'}}>
            <img id="footer-img"alt="footer" src="https://static1.hkrtcdn.com/hknext/static/media/common/footer/hklogo.png" />   
            <div className="footer_section row" style={{paddingTop: '32px'}}>
            <FooterCol1/>
            <FooterCol2/>
            <FooterCol3/>
            <FooterCol4/>
            <FooterCol5/>
            <FooterCol6/>
            <FooterLast/>
            </div>
          </div>
        </div>    
      </section>
    )
}
export default Footer;