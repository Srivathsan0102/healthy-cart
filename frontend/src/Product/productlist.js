import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Col,Row,Container} from 'react-bootstrap'
import { baseurl } from '../util/constants';
import { Link,useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Collapsible from '../Admin_login/adminmenu';

function ProductList(){
    const nav = useNavigate();
    const [categoryData, setcategoryData] = useState([])
    const star=<img id="star"alt="" src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/small_star_empty.svg" />;
    const cart_img=<img alt="" src="https://static1.hkrtcdn.com/hknext/static/media/common/cartNew.svg" style={{color: '#fff'}} />;
   const [updateui,setupdateui] = useState(null)
    const admin_menu =[
        {   menuName:"Product",menu1:"Product list",menu2:"Add Product"},
        {menuName:"Category",menu1:"Categories",menu2:"Add Category"},
        {menuName:"Order",menu1:"Order List",menu2:""},
        {menuName   :"Discount",menu1:"",menu2:""}]
        const [activeMenus, setActiveMenus] = useState(
            admin_menu.map(() => {  return false})
          );
        
    //     const product_info =[
    //         {img:<img style={{   mixBlendMode: "multiply"}} src="https://img2.hkrtcdn.com/13488/prd_1348781-MB-Fuel-One-Whey-Protein-Immunity-2.2-lb-Chocolate_o.jpg" class="card-img-center object-fit-contain" alt="img"></img>,
    //         rating:"3.9",
    //         reviews:"128 reviews",
    //         Name:"MuscleBlaze Pre Workout Wrathx",
    //         price:"₹ 2,049",
    //         discount_price:"3,499",
    //         offer:"41%",
    //         premium_text:"$1000 for premium members",   
    //     },
    //         {img:<img style={{mixBlendMode : "multiply"}} src="https://img3.hkrtcdn.com/23196/prd_2319592-MuscleBlaze-Pre-Workout-WrathX-1.1-lb-Fruit-Fury_c_s.jpg" class="card-img-center object-fit-contain" alt="img"></img>,
    //         rating:"4.9",
    //         reviews:"4.1k reviews",
    //         Name:"GNC Creatine Monohydrate, 250 g (0.55 lb)",
    //         price:"₹ 1,049",
    //         discount_price:"2,499",
    //         offer:"51%",
    //         premium_text:"$1000 for premium members",   
    //     },
    //     {img:<img style={{mixBlendMode:"multiply"}} src="https://img3.hkrtcdn.com/22586/prd_2258522_c_s.jpg" class="card-img-center object-fit-contain" alt="img"></img>,rating:"3.9",
    //     reviews:"3.0k reviews",
    //     Name:"Scivation Xtend BCAA, 30 Servings",
    //     price:"₹ 3,049",
    //     discount_price:"4,499",
    //     offer:"61%",
    //     premium_text:"$1000 for premium members",   
    // }] 
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
        // setupdateui((prevState) => !prevState);
      };
      useEffect(() => {
        fetchDataCategory();
        
      },[setupdateui]);
      const fetchDataCategory = async () => {
        try {
          const response = await axios.get(`${baseurl}/getCategoryData`);
          setcategoryData(response.data);
          console.log(response.data)
        } catch (error) {
          console.log("Error fetching data:", error);
        }
        setupdateui((prevState) => !prevState);
      };
        const [isActive, setIsActive] = useState(false);
      
        const handleToggle = () => {
        setIsActive(!isActive);
        };
        const [product_info,setproduct_info]=useState()
        const [cart,setCartData]=useState("")

        function HandleClick(product) {
            const productname=product.ProductName
            const productprice =product.Price
            
           
                
           
            const fetchData = async () => {
                try {
                const response = await axios.get(`${baseurl}/getCartdata`);
                setCartData(response.data);
                console.log(response.data)
                } catch (error) {
                console.log("Error fetching data:", error);
                }
            };
          
    
            fetchData();
    
            let hasName = null;
            for (let i = 0; i < cart.length; i++) {
              if (cart[i].ProductName === productname) {
                hasName = true;
                break;
              }
            }
            
            console.log(hasName);    
            
            !hasName && axios
            .post(`${baseurl}/saveCartdata`,{
                ProductName:productname,
                Price:productprice,
                Quantity:1
            }).then((res)=>{
                console.log("Data sent to backend successfully:", res.data);
    
            }).catch((err) => {
                console.log("Error sending data to backend:", err);
            });
            toast.success('Added to cart successfully.');
            nav('/Cart')
        }
        
        function HandleOnClick(categoryName){
            console.log(categoryName);
            nav(`/productcategory/${categoryName}`)

        }






        return(
            <Container >
                <Row style={{columnGap:"20px"}}>
                <div className="col-3 mt-4 rounded-3" style={{width: '260px'}}>

                {/* {admin_menu && admin_menu.map((menus)=>{
                    return(
                        <div className="dropdown  my-2">
                            <button className=" card dropdown-toggle collapsible" type="button" id="dropdownMenuButton2"onClick={handleToggle} style={{width: '230px', paddingRight: '100%', paddingTop: '15px', border: 'none!important'}}>
                                <span style={{fontSize: '16px', lineHeight: '24px', fontWeight: 600}}>{menus.menu}</span>
                            </button>
                            {isActive && (
                            <div className={menus.active}>
                                <ul style={{width: '230px'}} aria-labelledby="dropdownMenuButton2">
                                    <li><a className="dropdown-item" href="index">
                                        <span style={{marginLeft: '5px'}}>{menus.menu1}</span></a></li>
                                    <li><a className="dropdown-item" href="index">
                                        <span style={{marginLeft: '5px'}}>{menus.menu2}</span></a></li>
                                </ul>
                            </div>
                            )}
                        </div>
                    )
                })} */}
                <div
          className="col-3 mt-4 rounded-3"
          style={{ width: '260px' }}
      >
        <h3 className='ps-1'>Categories</h3>
          {categoryData && categoryData.map((menu, index) => {
            console.log(menu);
                return(
                    <>  
                        <div style={{width:"220px"}}>
                        <button
                            className="card dropdown-toggle collapsible"
                            type="button"
                            style={{
                                // width: '230px',
                                paddingRight: '100%',
                                marginTop: '15px',
                                border: 'none!important',
                                
                            }}
                             onClick={(e)=>HandleOnClick(menu.CategoryName)}

                        >
                            <span
                                style={{
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    fontWeight: 600,
                                }}
                            >
                            {menu.CategoryName}
                            </span>
                        </button>
                        </div>
                    </>



            // if(menu.menuName==="Utilities"){
            //     return (
            //         <>

            //           <button
            //               className="card dropdown-toggle collapsible"
            //               id="dropdownMenuButton2"
            //               onClick={() => handleToggle(index)}
            //               type="button"
            //               style={{
            //                   width: '220px',
            //                   paddingRight: '100%',
            //                   marginTop: '15px',
            //                   border: 'none!important',
            //               }}
            //           >
            //               <span
            //                   style={{
            //                       fontSize: '16px',
            //                       lineHeight: '24px',
            //                       fontWeight: 600,
            //                   }}
            //               >
            //                   {menu.menuName}
            //               </span>
            //           </button>
            //           {activeMenus[index] && (
                            
            //                 <ul
            //                     style={{ width: '230px',marginTop:"10px",color:'',lineHeight: "27px",
            //                     fontSize: "small" }}
            //                     aria-labelledby="dropdownMenuButton2">
                                
            //                         <Link to='/CategoryList' style={{textDecoration:"none",color:"#000"}}>
            //                             <li style={{ marginLeft: '5px' }}>
            //                             {menu.menu1}
            //                         </li>
            //                         </Link>
            //                     <Link to='/SubCategoryview' style={{textDecoration:"none",color:"#000"}}>
            //                         <li style={{ marginLeft: '5px' }}>
            //                         {menu.menu2}
            //                     </li>
            //                     </Link>
            //                 </ul>
            //             )}
            //       </>
            //   );
            // }
            // else if(menu.menuName==="Product"){
            //     return(
            //         <>
            //         <Link to='/OnviewProduct' style={{textDecoration:"none",color:"#000"}}>
            //         <button
            //               className="card dropdown-toggle collapsible"
            //               id="dropdownMenuButton2"
            //               onClick={() => handleToggle(index)}
            //               type="button"
            //               style={{
            //                   width: '230px',
            //                   paddingRight: '100%',
            //                   marginTop: '15px',
            //                   border: 'none!important',
            //               }}
            //           >
                        
            //               <span
            //                   style={{
            //                       fontSize: '16px',
            //                       lineHeight: '24px',
            //                       fontWeight: 600,
            //                   }}
            //               >
            //                   {menu.menuName}
            //               </span>
            //           </button>
            //         </Link>
            //         </>
            //     )
            // }
            // else{
            //     return(
            //         <>
            //         <Link to='/OnOrderProduct' style={{textDecoration:'none',color:"#000"}}>  <button
            //               className="card dropdown-toggle collapsible"
            //               id="dropdownMenuButton2"
            //               onClick={() => handleToggle(index)}
            //               type="button"
            //               style={{
            //                   width: '230px',
            //                   paddingRight: '100%',
            //                   marginTop: '15px',
            //                   border: 'none!important',
            //               }}
            //           >
            //               <span
            //                   style={{
            //                       fontSize: '16px',
            //                       lineHeight: '24px',
            //                       fontWeight: 600,
            //                   }}
            //               >
            //                   {menu.menuName}
            //               </span>
            //           </button>
            //           </Link>
            //         </>
            //     )
            // }
            
                )
          })
          }
            {/* <div style={{width:"220px"}}>

            <button
                className="card dropdown-toggle collapsible"
                type="button"
                style={{
                    // width: '220px',
                    paddingRight: '100%',
                    marginTop: '15px',
                    border: 'none!important',
                    
                }}
                //  onClick={Handleclick}

            >
                <span
                    style={{
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 600,
                    }}
                >
                    Log Out
                </span>
            </button>
            </div> */}
            
      </div>    
                </div>
                <div className="col-9 mt-5">
                {/* <img  alt="img"src="https://img8.hkrtcdn.com/12796/bnr_1279597_o.jpg" style={{width:"820px"}}/>
                <div className="d-flex align-items-center justify-content-between p-3" style={{width: '820px'}}>
                <div style={{fontSize: '24px', margin: '0 5px 0 0', fontWeight: 600, lineHeight: '32px'}}>MB Fuel One</div>
                <div>
                    <img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/authentic-plp.svg" alt="authentic" />
                    <span style={{color: '#1c1c28', fontWeight: 600, fontSize: '14px', marginTop: '3px', lineHeight: '20px'}}>100% Original &amp; Authentic</span>
                </div>
                </div> */}
                {/* <div className="p-4">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />&nbsp;
                <span>4.3k </span>&nbsp;
                <span>(2.7K reviews)</span>
                </div> */}
      
            <Col> 
                <Row style={{display:"flex",flexWrap:"wrap",maxWidth:"2000px"}}>
                {product_info && product_info.map((product_item)=>{
                    console.log(product_info);
                return(
                <div className="col-3 mt-4 rounded-3 border card" style={{width: "285px"}}>
                    <div className="rounded-top-3 position-relative" style={{height: "220px", backgroundColor: '#F7F7F7'}}>
                        <i className="bi bi-heart text-secondary fs-4 fw-bold position-absolute" style={{top: '10px', right: '15px'}} />
                        <div style={{minHeight: '30px'}} />
                        <div className="d-flex justify-content-center" style={{height: '160px'}}>
                        <img style={{mixBlendMode : "multiply"}} src={product_item.img} class="card-img-center object-fit-contain" alt="img"/> 
                        </div>
                    </div>
                    <div style={{fontSize: '12px'}} className="border px-2 py-3 rounded-bottom-3">
                    <div className="d-flex align-items-center">
                        <div className="text-white p-1 rounded-1 d-flex align-items-center justify-content-center" style={{backgroundColor: '#00B5B7', lineHeight: '10px'}}>
                        4.9 {star}
                        </div>
                        <div className="flex-grow-1 px-2 text-light-emphasis">
                        {product_item.reviews}
                        </div>
                        <i className="bi bi-record-btn text-danger" />
                    </div>
                    <div className="py-2">
                            {product_item.ProductName} 
                    </div>
                    <div className="my-1 d-flex gap-1 align-items-center">
                        <span className="fw-semibold fs-6"> ₹ {product_item.Price}</span>
                        <span className="text-body-tertiary text-decoration-line-through"> ₹ 4,499</span>
                        <span className="fw-bold text-success">{product_item.offer}</span>
                    </div>
                    <div className="premium">
                        <img id="star2"alt="star" className="premium-icon undefined" src="https://static1.hkrtcdn.com/hknext/static/media/common/premium_member.svg" />
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
            </Row>
             </Col>
                </div>
                </Row>
            </Container>
    )
}
export default ProductList;