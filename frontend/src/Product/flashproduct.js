import React,{useEffect,useState} from "react";
import './flashproduct.css';
import { NavLink ,useNavigate} from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { baseurl } from "../util/constants";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function FlashProduct(){
    const flashsym = <svg width={8} height={13} viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 7.0835L3.63636 0.333496L8 1.0835L4.36364 5.5835H8L1.45455 12.3335L2.18182 7.0835H0Z" fill="#00B5B7" />
                    </svg>;
    const flashtimer =<img  alt="img" src="https://static1.hkrtcdn.com/hknext/static/media/common/circle-clock-timer.svg" />;
    const star =<img alt="img" id="star" src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg" />;
    const premiumstar =<img alt="img" id="star2" className="premium-icon undefined" src="https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg" />;
    const cart =<img  alt="img"src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" style={{color: '#fff'}} />;
    const    timer = "02 : 01: 99";
    const units = "33 uinits";
    const img = <img style={{mixBlendMode: 'multiply'}} src="https://img6.hkrtcdn.com/13170/prd_1316945-MuscleBlaze-High-Protein-Peanut-Butter-0.750-kg-Dark-Chocolate-Creamy_c_s.jpg" className="card-img-center object-fit-contain" alt="img" />;
    const rating="2.7"; 
    const review="3.7k reviews"; 
    const discount_price="12,499"
     // const flashproduct=[
    //     {timer:"02 : 01: 99",units:"33 uinits",img:<img style={{mixBlendMode: 'multiply'}} src="https://img6.hkrtcdn.com/13170/prd_1316945-MuscleBlaze-High-Protein-Peanut-Butter-0.750-kg-Dark-Chocolate-Creamy_c_s.jpg" className="card-img-center object-fit-contain" alt="img" />,rating:"2.7",
    //     review:"3.7k reviews",Name:"MuscleTech Platinum Multi Vitamin, 90 tablet(s)",
    //     price:"₹ 3,049",
    //     discount_price:"5,499",
    //     offer:"31%",
    //     premium_text:"$1000 for premium members"},
    //     {timer:"02 : 01: 99",units:"173 uinits",img:<img style={{mixBlendMode: 'multiply'}} src="https://img1.hkrtcdn.com/22302/prd_2230120-MuscleBlaze-High-Protein-Oats-1-kg-Dark-Chocolate_c_s.jpg" className="card-img-center object-fit-contain" alt="img" />,rating:"2.7",
    //     review:"3.7k reviews",Name:" MuscleBlaze High Protein Muesli, 1 kg, Dark Chocolate & Cranberry",
    //     price:"₹ 8,049",
    //     discount_price:"12,499",
    //     offer:"51%",
    //     premium_text:"$1000 for premium members"},
    //     {timer:"02 : 01: 99",units:"99 uinits",img:<img style={{mixBlendMode: 'multiply'}} src="https://img1.hkrtcdn.com/21374/prd_2137310-Myfitness-Chocolate-Peanut-Butter-1.25-kg-Smooth_c_s.jpg" className="card-img-center object-fit-contain" alt="img" />,rating:"2.7",
    //     review:"3.7k reviews",Name:"GNC Creatine Monohydrate, 250 g (0.55 lb (Intra Workout Catalyst)",
    //     price:"₹ 9,049",
    //     discount_price:"11,499",
    //     offer:"21%",
    //     premium_text:"$1000 for premium members"},
    //     {timer:"02 : 01: 99",units:"88 uinits",img:<img style={{mixBlendMode: 'multiply'}} src="https://img3.hkrtcdn.com/16796/prd_1679532-HealthKart-HK-Vitals-Skin-Radiance-Collagen-200-g-Orange_c_s.jpg" className="card-img-center object-fit-contain" alt="img" />,rating:"2.7",
    //     review:"3.7k reviews",Name:"Scivation Xtend BCAA (Intra Workout Catalyst), 30 Servings",
    //     price:"₹ 6,049",
    //     discount_price:"8,499",
    //     offer:"11%",
    //     premium_text:"$1000 for premium members"}
    // ]



    const nav=useNavigate()
    const [updateui,setupdateui] = useState(false) 
    const [product_info,setproduct_info]=useState()
    const [Cart,setCartData]=useState([])
    const [hasName,setHasName] = useState(false)

   
    function HandleClick(product) {
        const productname=product.ProductName
        const productprice =product.Price
        const productid = product._id
        nav(`/productpage/${productid}`)
       
        // const fetchData = async () => {
        //     try {
        //       const response = await axios.get(`${baseurl}/getCartdata`);
        //       setCartData(response.data);
        //       console.log(response.data);
        
        //       for (let i = 0; i < response.data.length; i++) {
        //         console.log(response.data.length);
        //         if (response.data[i].ProductName === productname) {
        //                 console.log(response.data[i].ProductName);
        //                 console.log(productname);
                 
        //           break;
        //         }
        //       }
        //     } catch (error) {
        //       console.log("Error fetching data:", error);
        //     }
        //   };
        
         
        
        
        
          
        // fetchData();
        // console.log(cart);
       
        // console.log(hasName);
        // !hasName && axios
        // .post(`${baseurl}/saveCartdata`,{
        //     ProductName:productname,
        //     Price:productprice,
        //     Quantity:1
        // }).then((res)=>{
        //     console.log("Data sent to backend successfully:", res.data);

        // }).catch((err) => {
        //     console.log("Error sending data to backend:", err);
        // });
        // toast.success('Added to cart successfully.');
        // nav('/Cart')
    }

    useEffect(() => {
        fetchData();
      }, [] );
      const fetchData = async () => {
        try {
          const response = await axios.get(`${baseurl}/getProductdata`);
          setproduct_info(response.data);
          console.log(response.data)
        } catch (error) {
          console.log("Error fetching data:", error);
        }
        setupdateui((prevState) => !prevState);
      };


















    return(
            <>
            <Container>
            <div class="body-megaprice row">
                <h1 className="col"style={{fontSize:"24px",fontWeight:"600",marginTop:"20px"}}>Flash Sale</h1>
            </div>
            <div className="row scroll" style={{alignItems: 'center', justifyContent: 'start', flexWrap: 'nowrap', overflowX: 'scroll'}}>         
                {product_info && product_info.map((product)=>{
                    return(
                        <div className="col-3 mt-4 rounded-3 border card" style={{width: '285px'}}>
                <div className="sale-countdown">
                    <div className="start-sale">
                    <div className="flash-timer">
                        <div className="flash-sym">
                        {flashsym}
                        <span style={{fontSize: '12px', paddingLeft: '1vw'}}>FlashSale</span>
                        </div> 
                        <div className="timer-flash" style={{fontSize: '10px'}}>
                        <span>
                            {flashtimer}
                        </span>
                            {timer}
                        </div>
                    </div>
                    <div className="units" style={{fontSize: '10px', paddingLeft: '1vw', color: 'white'}}>
                        {units}
                    </div>
                    </div>
                </div>
                <div className="rounded-top-3 position-relative" style={{height: '220px', backgroundColor: '#F7F7F7'}}>
                    <i className="bi bi-heart text-secondary fs-4 fw-bold position-absolute" style={{top: '10px', right: '15px'}} />
                    <div style={{minHeight: '30px'}} />
                    <div className="d-flex justify-content-center" style={{height: '160px'}}>
                    <img style={{mixBlendMode: 'multiply'}} src={product.img} className="card-img-center object-fit-contain" alt="img" />
                    </div>
                </div>
                <div style={{fontSize: '12px'}} className="border px-2 py-3 rounded-bottom-3">
                    <div className="d-flex align-items-center">
                    <div className="text-white p-1 rounded-1 d-flex align-items-center justify-content-center" style={{backgroundColor: '#00B5B7', lineHeight: '10px'}}>
                        {rating} {star}
                    </div>
                    <div className="flex-grow-1 px-2 text-light-emphasis">
                        {review}
                    </div>
                    <i className="bi bi-record-btn text-danger" />
                    </div>
                    <div className="py-2">
                   <NavLink to='/productpage' style={{textDecoration:"none",color:"#000"}}>  {product.ProductName} </NavLink> 

                    </div>
                    <div className="my-1 d-flex gap-1 align-items-center">
                    <span className="fw-semibold fs-6">{product.Price}</span>
                    <span className="text-body-tertiary text-decoration-line-through">{discount_price}</span>
                    <span className="fw-bold text-success">11%</span>
                    </div>
                    <div className="premium">
                        {premiumstar}
                    <span className="premium-text" style={{fontSize: '12px'}}>$1000 for premium members</span>
                    </div>
                    <div style={{backgroundColor: '#FF8914'}} onClick={((e)=>HandleClick(product))} className="mt-2 text-white text-center p-2 rounded-1 fw-semibold add-cart">
                    {cart} Add Cart
                    </div>
                </div>
                </div>
                    )})}
        
                
            </div>
            </Container>    
            </>
    )
            
    
}
export default FlashProduct;