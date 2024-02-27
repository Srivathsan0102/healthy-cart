import React,{useState,useEffect} from "react";
import './product.css';
import { Link,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CartPop from "../cart/cartpop";
import axios from "axios";
import { baseurl } from "../util/constants";
import { Container } from "react-bootstrap";
export default function Product(){
    const star=<img id="star"alt="" src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg" />;
    const cart_img=<img alt="" src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" style={{color: '#fff'}} />;
    const nav=useNavigate()
    const [updateui,setupdateui] = useState(false)

    // const product_info =[
    //     {img:<img style={{mixBlendMode: "multiply"}} src="https://img2.hkrtcdn.com/13488/prd_1348781-MB-Fuel-One-Whey-Protein-Immunity-2.2-lb-Chocolate_o.jpg" class="card-img-center object-fit-contain" alt="img"></img>,
    //     rating:"3.9",
    //     reviews:"128 reviews",
    //     Name:"MuscleBlaze Pre Workout Wrathx",
    //     price:"₹ 2,049",
    //     discount_price:"3,499",
    //     offer:"41%",
    //     premium_text:"$1000 for premium members",   
    // },
    //     {img:<img style={{mixBlendMode : "multiply"}} src="https://img3.hkrtcdn.com/23196/prd_2319592-MuscleBlaze-Pre-Workout-WrathX-1.1-lb-Fruit-Fury_c_s.jpg" class="card-img-center object-fit-contain" alt="img"></img>,
    //     rating:"4.9",
    //     reviews:"4.1k reviews",
    //     Name:"GNC Creatine Monohydrate, 250 g (0.55 lb)",
    //     price:"₹ 1,049",
    //     discount_price:"2,499",
    //     offer:"51%",
    //     premium_text:"$1000 for premium members",   
    // },
    //     {img:<img style={{mixBlendMode:"multiply"}} src="https://img3.hkrtcdn.com/22586/prd_2258522_c_s.jpg" class="card-img-center object-fit-contain" alt="img"></img>,rating:"3.9",
    //     reviews:"3.0k reviews",
    //     Name:"Scivation Xtend BCAA, 30 Servings",
    //     price:"₹ 3,049",
    //     discount_price:"4,499",
    //     offer:"61%",
    //     premium_text:"$1000 for premium members",   
    // },
    //     {img:<img style={{mixBlendMode: "multiply"}} src="https://img3.hkrtcdn.com/16796/prd_1679532-HealthKart-HK-Vitals-Skin-Radiance-Collagen-200-g-Orange_c_s.jpg" class="card-img-center object-fit-contain" alt="img"></img>,rating:"3.9",
    //     reviews:"4k reviews",
    //     Name:"MuscleTech Platinum Multi Vitamin, 90 tablet(s)",
    //     price:"₹ 5,049",
    //     discount_price:"6,499",
    //     offer:"31%",
    //     premium_text:"$1000 for premium members",   
    // }
    // ]
    const [product_info,setproduct_info]=useState()
    const [cart,setCartData]=useState([])
    const [hasName,setHasName] = useState(false)
    const [qty,setqty] = useState(1)
   
    function HandleClick(product) {
        const productname=product.ProductName
        const productid = product._id
        const productprice =product.Price
        console.log(product);
        nav(`/productpage/${productid}`)
        
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
                <h1 className="col"style={{fontSize:"24px",fontWeight:"600",marginTop:"20px"}}>Mega Price Drop</h1>
            </div>
            <div className="row scroll" style={{alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'nowrap', overflowX: 'scroll'}}>         
            {product_info && product_info.map((product_item)=>{
                return(
                <div className="col-3 mt-3 rounded-3 border card" style={{width: "285px"}}>
                    <div className="rounded-top-3 position-relative" style={{height: "220px", backgroundColor: '#F7F7F7'}}>
                        <i className="bi bi-heart text-secondary fs-4 fw-bold position-absolute" style={{top: '10px', right: '15px'}} />
                        <div style={{minHeight: '30px'}} />
                        <div className="d-flex justify-content-center" style={{height: '160px'}}>
                        <img style={{mixBlendMode: "multiply"}} src={product_item.img} class="card-img-center object-fit-contain" alt="img"></img>
                        </div>
                    </div>
                    <div style={{fontSize: '12px'}} className="border px-2 py-3 rounded-bottom-3">
                    <div className="d-flex align-items-center">
                        <div className="text-white p-1 rounded-1 d-flex align-items-center justify-content-center" style={{backgroundColor: '#00B5B7', lineHeight: '10px'}}>
                            4.9 {star}
                        </div>
                        <div className="flex-grow-1 px-2 text-light-emphasis">
                            4.1k reviews
                        </div>
                        <i className="bi bi-record-btn text-danger" />
                    </div>
                    <div className="py-2">
                    <Link to={`/productpage/${product_item._id}`} style={{textDecoration:"none",color:"#000"}}> {product_item.ProductName } </Link> 
                    </div>
                    <div className="my-1 d-flex  align-items-center gap-2">
                        <span className="fw-semibold fs-6"> ₹{product_item.Price}</span>
                        <span className="text-body-tertiary text-decoration-line-through">₹ 4,499</span>
                        <span className="fw-bold text-success">61%</span>
                    </div>
                    <div className="premium">       
                        <span className="premium-text" style={{fontSize: '12px'}}>$1000 for premium members</span>
                    </div>
                    <div style={{backgroundColor: '#FF8914'}}  className="mt-2 text-white text-center p-2 rounded-1 fw-semibold ">
                            <button style={{backgroundColor: '#FF8914',border:"none",color:"#fff"}} onClick={(e)=>HandleClick(product_item)}>{cart_img}Add to Cart</button>
                        </div>
                    </div>
                </div>
                )
            })
            }
        </div>
        <div>
            <ToastContainer />
         </div>
        </Container>
        </>
    )
}
