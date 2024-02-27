import React, { useState ,useEffect} from 'react';
import '../Product/product.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseurl } from '../util/constants';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from 'react-router-dom';

function ProductPage(){
    const [pincode,setPincode]=useState("");
    const [pincodeError,setPincodeError]=useState("");
    const product_id = useParams()
    const nav = useNavigate()
    console.log(product_id);
    const [qty,setqty] = useState(1)
    const [hasName,setHasName] = useState(false)
    const cart_img=<img alt="" src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" style={{color: '#fff'}} />;

    const [updateui,setupdateui] = useState(false)

    const [product_info,setproduct_info]=useState()
    const [productname,setproductname]=useState("")
    const [productid,setproductid]=useState("")
    const [productprice,setproductprice]=useState("")
    useEffect(() => {
      fetchData();
    }, [] );
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/getProductdata/${product_id.id}`);
        setproduct_info(response.data);
      
        console.log(response.data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
      setupdateui((prevState) => !prevState);
    };
      console.log({product_info});
    function HandleClick(product){
   
      
      axios
    .post(`${baseurl}/saveCartdata`,{
      
        _id:product.ProductId,
        ProductName:product.ProductName,
        Price:product.Price,
        Quantity:qty,
        img:product.img,
       
           
    }).then((res)=>{
        console.log("Data sent to backend successfully:", res.data);

    }).catch((err) => {
        console.log("Error sending data to backend:", err);
    });
    toast.success('Added to cart succes sfully.');
    nav('/Cart')




      let regex = /^[0-9]+$/;
      let pin = regex.test(pincode);
      console.log(pin)
      if (! pin){
        setPincodeError("Enter the valid pincode")
      }
      if (pincode>600000 && pincode<700000){
        setPincodeError("Delivery is available")
      }
      else if(pincode>700000 && pincode<600000){
        setPincodeError("Delivery is Not available")
      }


    }
    const selectedProduct=useParams();
    console.log(product_info);







    return(
        <section style={{marginTop:"20px"}}>
        <div className="container">
          <div className="row g-3">
            <div className="col-1 img_plp d-flex align-items-center flex-column">              
              <img  alt="img"  style={{mixBlendMode: 'multiply'}} src="https://img8.hkrtcdn.com/14146/prd_1414547-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg" />
              <img  alt="img" src="https://img6.hkrtcdn.com/14146/prd_1414555-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg" />
              <img  alt="img" src="https://img6.hkrtcdn.com/14146/prd_1414545-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg" />
              <img  alt="img" src="https://img8.hkrtcdn.com/14146/prd_1414537-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg" />
              <img alt="img"  src="https://img10.hkrtcdn.com/14146/prd_1414549-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg" />
              <img alt="img"  src="https://img8.hkrtcdn.com/14192/prd_1419157_o.jpg" />
              <img alt="img"  src="https://img1.hkrtcdn.com/16128/prd_1612740-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg" />
              <img alt="img"  src="https://img6.hkrtcdn.com/14146/prd_1414555-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Rich-Chocolate_o.jpg"className="play-btn" style={{mixBlendMode: 'multiply'}} />
            </div>
           

          {product_info && product_info.map((product)=>{

            return(
              <>
               <div className="col-4 mainimg_plp">
              <img alt="img" width="386px" height="386px" src={product.img} />
            </div>
                <div className="col-5">
              <div className="product_pdp">
                <span>Whey Protein</span>
              </div>
              <h1 className="productname_pdp">{product.ProductName}</h1>
              <div>By&nbsp;MuscleBlaze<img alt="img"style={{marginLeft: '5px'}} src="https://static1.hkrtcdn.com/hknext/static/media/pdp/arrow-right-blue.svg" /></div>
              <div className="py-4">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />&nbsp;
                <span>4.3k </span>&nbsp;
                <span>(2.7K reviews)</span>
                <img className="rating_plp" alt="img"src="https://static1.hkrtcdn.com/hknext/static/media/pdp/unliked_product.svg" />
                <img className="rating_plp" alt="img"src="https://static1.hkrtcdn.com/hknext/static/media/pdp/share_icon.svg" />
              </div>
              <div>
                <span>
                  <span>MRP : </span>
                  <span><s>₹{product.Price}</s></span>
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-flex-start" style={{gap: '10px'}}>
                <span style={{fontSize: '16px', fontWeight: 500, lineHeight: '32px'}}>Price: </span>
                <span style={{fontFamily: 'Montserrat,sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: '32px', letterSpacing: 'normal', color: '#1c1c28'}}>₹ {product.Price}</span>
                <span style={{color: 'green'}}>23% off</span>
                <span style={{float: 'right'}}>&nbsp; Get 98 HK Cash</span>
              </div>
              <span style={{color: 'green', fontSize: '10px'}}>Inclusive taxes </span>
              <div className="premium" style={{width: '250px'}}>
                <img alt="img" id="star2" className="premium-icon undefined" src="https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg" />
                <span className="premium-text" style={{fontSize: '12px'}}>$1000 for premium members</span>
              </div>
              <div className="py-2">
                <div>
                  3 interest free payments of ₹1633 with &nbsp;   
                  <span>
                    <img alt="img"width="55px" height="20px" src="https://static1.hkrtcdn.com/hknext/static/media/logos/simpl.png" />
                  </span>
                  <span>
                    <svg width={20} height={20} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.16699 5.66661C8.16699 5.20637 8.54009 4.83328 9.00033 4.83328C9.46056 4.83328 9.83366 5.20637 9.83366 5.66661C9.83366 6.12685 9.46056 6.49994 9.00033 6.49994C8.54009 6.49994 8.16699 6.12685 8.16699 5.66661ZM8.16699 8.99994C8.16699 8.53971 8.54009 8.16661 9.00033 8.16661C9.46056 8.16661 9.83366 8.53971 9.83366 8.99994L9.83366 12.3333C9.83366 12.7935 9.46056 13.1666 9.00033 13.1666C8.54009 13.1666 8.16699 12.7935 8.16699 12.3333L8.16699 8.99994ZM9.00033 0.666611C4.40033 0.666611 0.666992 4.39994 0.666991 8.99994C0.666991 13.5999 4.40032 17.3333 9.00032 17.3333C13.6003 17.3333 17.3337 13.5999 17.3337 8.99995C17.3337 4.39995 13.6003 0.666612 9.00033 0.666611ZM9.00032 15.6666C5.32532 15.6666 2.33366 12.6749 2.33366 8.99994C2.33366 5.32494 5.32533 2.33328 9.00033 2.33328C12.6753 2.33328 15.667 5.32495 15.667 8.99995C15.667 12.6749 12.6753 15.6666 9.00032 15.6666Z" fill="#77777E" />
                    </svg>
                  </span>
                </div>
                <div className="py-3">
                  Pay using Simpl on HealthKart and get 10% cashback up to Rs 500
                </div>
                <div className="d-flex align-items-center ">
                <div style={{backgroundColor: '#FF8914',width: '350px'}}  className="mt-2 text-white text-center p-2 rounded-1 fw-semibold ">
                    <button style={{backgroundColor: '#FF8914',border:"none",color:"#fff"}} onClick={(e)=>HandleClick(product)}>{cart_img}Add to Cart</button>
                </div>
                </div>
              </div>
              <div className="card" style={{padding: '25px', width: '400px'}}>
                <strong>Delivery &amp; Services</strong>
                <form className="py-3" id="form_pincode">
                  <input 
                    style={{width: '200px', height: '50px',border:"none"}} 
                    type="text" 
                    value={pincode} 
                    onChange={((e)=>setPincode(e.target.value))}
                    placeholder="Enter the Pin code" />
                  <button 
                    style={{height:'35px',color:"#fff",backgroundColor:"rgb(0, 184, 185)",borderRadius:"10px",border:"none"}} 
                    type="button" 
                    onClick={HandleClick}
                    >
                      Check
                    </button>
                   
                </form>
                <span>{pincodeError}</span>
                <div className="d-flex align-items-start justify-content-center flex-column" style={{gap: '10px'}}>
                  <div className="d-flex align-items-center" style={{gap: '10px'}}>
                    <img alt="cross.svg"  src="https://static1.hkrtcdn.com/hknext/static/media/homepage/Goal.svg" />
                    <span className="uselocation">Use my Location</span>
                  </div>
                  <div>
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.2578 4.1803C15.9918 4.58267 16.6551 5.59662 17.4867 6.99219H14.2578V4.1803ZM4.12415 7.10938C4.46365 7.10938 4.71008 7.27325 4.71008 7.65625C4.71008 7.97928 4.4487 8.24127 4.12582 8.24219H0.585938C0.262299 8.24219 0 8.50464 0 8.82812C0 9.15176 0.262299 9.41406 0.585938 9.41406H5.85938C6.18607 9.41406 6.4476 9.67621 6.4476 10C6.4476 10.3236 6.1853 10.5859 5.86166 10.5859H0.585938C0.262299 10.5859 0 10.8482 0 11.1719C0 11.4955 0.262299 11.7578 0.585938 11.7578H1.875V13.5156C1.875 13.8393 2.1373 14.1016 2.46094 14.1016H3.63876C3.84872 15.1358 4.76257 15.8984 5.83984 15.8984C6.91711 15.8984 7.83096 15.1358 8.04092 14.1016H13.9903C14.2003 15.1358 15.1141 15.8984 16.1914 15.8984C17.2687 15.8984 18.1825 15.1358 18.3925 14.1016H19.4141C19.7377 14.1016 20 13.8393 20 13.5156V10C20 8.28079 18.1866 8.16666 18.185 8.16406H13.6719C13.3482 8.16406 13.0859 7.90176 13.0859 7.57812V4.0625H2.46094C2.1373 4.0625 1.875 4.3248 1.875 4.64844V5.9375H1.17188C0.848236 5.9375 0.585938 6.1998 0.585938 6.52344C0.585938 6.84708 0.848236 7.10938 1.17188 7.10938H4.12415ZM16.951 12.8928C17.3705 13.3122 17.3705 13.9926 16.951 14.4121C16.2762 15.0868 15.1172 14.6068 15.1172 13.6523C15.1172 12.6981 16.2762 12.218 16.951 12.8928ZM6.59943 12.8928C7.01889 13.3122 7.01889 13.9926 6.59943 14.4121C5.92468 15.0868 4.76562 14.6068 4.76562 13.6523C4.76562 12.6981 5.92468 12.218 6.59943 12.8928Z" fill="#AEB1BD" />
                    </svg>
                    <span>Free Shipping</span>
                  </div>
                  <div className="pinCode2_delivery__policy-sec__item__3T8fD">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8418 12.2755L15.6255 15.1737C15.182 15.7536 14.4937 16.0938 13.7637 16.0938H9.64844C9.32484 16.0938 9.0625 15.8314 9.0625 15.5078C9.0625 15.1842 9.32484 14.9219 9.64844 14.9219H13.2152C13.9818 14.9219 14.6238 14.2945 14.6091 13.528C14.5949 12.7852 13.9884 12.1875 13.2422 12.1875H9.14062C7.96301 11.0552 6.14574 10.9227 4.81633 11.8723L4.375 12.1875V18.8281H8.28125H9.0625H14.565C15.7613 18.8281 16.8754 18.2199 17.5223 17.2136L19.8089 13.6565C19.9337 13.4625 20 13.2368 20 13.0061C20 11.8559 18.5404 11.3618 17.8418 12.2755Z" fill="#AEB1BD" /><path d="M2.61719 11.0156H0.585938C0.262344 11.0156 0 11.278 0 11.6016V19.4141C0 19.7377 0.262344 20 0.585938 20H2.61719C2.94078 20 3.20312 19.7377 3.20312 19.4141V11.6016C3.20312 11.278 2.94078 11.0156 2.61719 11.0156Z" fill="#AEB1BD" /><path d="M11.1838 3.23846C11.0646 3.32987 10.9989 3.46827 10.9764 3.58831C10.9451 3.75389 10.9846 3.90772 11.077 3.98014C11.1096 4.00565 11.1454 4.03073 11.1838 4.05538V3.23846Z" fill="#AEB1BD" /><path d="M11.6016 9.76562C14.2939 9.76562 16.4844 7.5752 16.4844 4.88281C16.4844 2.19043 14.2939 0 11.6016 0C8.90918 0 6.71875 2.19043 6.71875 4.88281C6.71875 7.5752 8.90918 9.76562 11.6016 9.76562ZM10.1235 6.47926C10.2415 6.29879 10.4837 6.24801 10.6642 6.36621C10.8752 6.50422 11.0074 6.56406 11.184 6.58887V4.93922C10.9345 4.82488 10.748 4.71484 10.595 4.5948C10.2708 4.34055 10.1228 3.89945 10.2087 3.44355C10.3023 2.94676 10.6481 2.55148 11.1111 2.41203C11.1357 2.40465 11.1599 2.39789 11.184 2.39152V2.14844C11.184 1.93273 11.3589 1.75781 11.5746 1.75781C11.7903 1.75781 11.9652 1.93273 11.9652 2.14844V2.34871C12.3445 2.41438 12.6125 2.60109 12.7424 2.75012C12.8841 2.91277 12.8671 3.15953 12.7044 3.30121C12.5426 3.44215 12.2977 3.42613 12.1555 3.26586C12.1466 3.25684 12.0846 3.19707 11.9652 3.15305V4.41523C12.0346 4.44098 12.1039 4.46594 12.1719 4.49C12.8585 4.73273 13.2404 5.36836 13.1222 6.07168C13.0303 6.61836 12.6143 7.17277 11.9652 7.33742V7.61719C11.9652 7.83289 11.7903 8.00781 11.5746 8.00781C11.3589 8.00781 11.184 7.83289 11.184 7.61719V7.37492C10.8686 7.34766 10.6071 7.26246 10.2365 7.02C10.056 6.90188 10.0054 6.6598 10.1235 6.47926Z" fill="#AEB1BD" /><path d="M12.3514 5.94219C12.3771 5.78949 12.3876 5.42563 11.9648 5.24762V6.50235C12.1846 6.37649 12.3158 6.15391 12.3514 5.94219Z" fill="#AEB1BD" /></svg>
                    <span>Cash on Delivery Available</span>
                  </div>
                  <div>
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.8418 12.2755L15.6255 15.1737C15.182 15.7536 14.4937 16.0938 13.7637 16.0938H9.64844C9.32484 16.0938 9.0625 15.8314 9.0625 15.5078C9.0625 15.1842 9.32484 14.9219 9.64844 14.9219H13.2152C13.9818 14.9219 14.6238 14.2945 14.6091 13.528C14.5949 12.7852 13.9884 12.1875 13.2422 12.1875H9.14062C7.96301 11.0552 6.14574 10.9227 4.81633 11.8723L4.375 12.1875V18.8281H8.28125H9.0625H14.565C15.7613 18.8281 16.8754 18.2199 17.5223 17.2136L19.8089 13.6565C19.9337 13.4625 20 13.2368 20 13.0061C20 11.8559 18.5404 11.3618 17.8418 12.2755Z" fill="#AEB1BD" /><path d="M2.61719 11.0156H0.585938C0.262344 11.0156 0 11.278 0 11.6016V19.4141C0 19.7377 0.262344 20 0.585938 20H2.61719C2.94078 20 3.20312 19.7377 3.20312 19.4141V11.6016C3.20312 11.278 2.94078 11.0156 2.61719 11.0156Z" fill="#AEB1BD" /><path d="M11.1838 3.23846C11.0646 3.32987 10.9989 3.46827 10.9764 3.58831C10.9451 3.75389 10.9846 3.90772 11.077 3.98014C11.1096 4.00565 11.1454 4.03073 11.1838 4.05538V3.23846Z" fill="#AEB1BD" /><path d="M11.6016 9.76562C14.2939 9.76562 16.4844 7.5752 16.4844 4.88281C16.4844 2.19043 14.2939 0 11.6016 0C8.90918 0 6.71875 2.19043 6.71875 4.88281C6.71875 7.5752 8.90918 9.76562 11.6016 9.76562ZM10.1235 6.47926C10.2415 6.29879 10.4837 6.24801 10.6642 6.36621C10.8752 6.50422 11.0074 6.56406 11.184 6.58887V4.93922C10.9345 4.82488 10.748 4.71484 10.595 4.5948C10.2708 4.34055 10.1228 3.89945 10.2087 3.44355C10.3023 2.94676 10.6481 2.55148 11.1111 2.41203C11.1357 2.40465 11.1599 2.39789 11.184 2.39152V2.14844C11.184 1.93273 11.3589 1.75781 11.5746 1.75781C11.7903 1.75781 11.9652 1.93273 11.9652 2.14844V2.34871C12.3445 2.41438 12.6125 2.60109 12.7424 2.75012C12.8841 2.91277 12.8671 3.15953 12.7044 3.30121C12.5426 3.44215 12.2977 3.42613 12.1555 3.26586C12.1466 3.25684 12.0846 3.19707 11.9652 3.15305V4.41523C12.0346 4.44098 12.1039 4.46594 12.1719 4.49C12.8585 4.73273 13.2404 5.36836 13.1222 6.07168C13.0303 6.61836 12.6143 7.17277 11.9652 7.33742V7.61719C11.9652 7.83289 11.7903 8.00781 11.5746 8.00781C11.3589 8.00781 11.184 7.83289 11.184 7.61719V7.37492C10.8686 7.34766 10.6071 7.26246 10.2365 7.02C10.056 6.90188 10.0054 6.6598 10.1235 6.47926Z" fill="#AEB1BD" /><path d="M12.3514 5.94219C12.3771 5.78949 12.3876 5.42563 11.9648 5.24762V6.50235C12.1846 6.37649 12.3158 6.15391 12.3514 5.94219Z" fill="#AEB1BD" /></svg>
                    <span>Free Shipping</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between px-2" style={{ width: '100%'}}>    
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <img alt="img" src="https://static1.hkrtcdn.com/hknext/static/media/pdp/fassai_logo.svg" /> 
                      <span>Lic. No. 10015064000576</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-column">
                      <span>
                        Country of Origin
                      </span>
                      <div>
                        <img alt="img" src="https://static1.hkrtcdn.com/hknext/static/media/pdp/indian_flag.svg" />
                        <span >
                          India
                        </span>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
              </>
            )
          })}


            
          </div>
        </div>
      </section>
    )
}

export default ProductPage;