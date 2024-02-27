import { Col, Container, Row } from "react-bootstrap";
import React, { useState,useEffect } from "react";
import { Plus, DashCircle, PlusCircle } from "react-bootstrap-icons";
import OrderSummary from "./odersummary";
import axios from "axios";
import { baseurl } from "../util/constants";
import { useNavigate } from "react-router-dom";

const CartDetail = () => {
  const [count, setCount] = useState([]);
  let [totalOrder,settotalorder] = useState([])
  let [total_mrp,settotal_mrp] = useState([])
  let [totalAmount,settotalprice]=useState()
  let [totalMrpAmount,settotalMrpAmount]=useState()
  const nav = useNavigate();

  const handleMinus = (productId) => {
    if (count[productId] > 1) {
      setCount((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };

  function sumArray(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  
  const [updateui,setupdateui]=useState(false)
  const [Id,setId]=useState()
  const [product,setproduct]=useState()
  const [price,setprice]=useState()
  useEffect(()=>{
    console.log(count);
    console.log(Id,"jj");


    axios
    .put(`${baseurl}/updateCart/${Id}`, {
      Cart :
      { ProductName:product,
        Price:price,
        Quantity:count[Id],}  
     
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);   
    }); 
  },[ count])

    
  
 



  
  function handleDelete(item){
    console.log(item._id);
      // const {id} = products
      // console.log(products.);
      axios.delete(`${baseurl}/deleteCartData/${item._id}`).then((res)=>{
        console.log(res);
        setupdateui((prev)=>!prev);
      })
      
    
  }


  const [cart,setCartData]=useState("")
  useEffect(() => {
      fetchData();
    }, [updateui] );
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/getCartdata`);
        setCartData(response.data);
        console.log(response.data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };


    if(localStorage.getItem("isLoggedIn")){

      return (

    
    
        <>
          <div style={{ background: "#f4f4f4" }}>
            <Container className="d-flex flex-column w-100">
              <Row className="d-flex align-items-start justify-content-start">
                <div  style={{ width: "66%" }}>
                  <Col
                    style={{
                      backgroundColor: "#fff",
                      marginTop: "20px",
                      borderRadius: "12px",
                      padding: "24px",
                    }}
                  > 
                   <div
                        style={{ marginBottom: "10px" }}
                        className="shopping-cart"
                      >
                        <span className="shopping-cart">
                          {" "}
                          Shopping Cart ({cart.length} item)
                        </span>
                        <span className="shopping-wish">My Wish list</span>
                      </div> 
    
                    {cart && cart.map((product)=>{  
                        console.log(product);
                        let total_price = count[product._id]*product.Price || 0
                        let totalmrp = product.Price 
                        console.log(total_price); 
                        total_mrp = [...total_mrp,totalmrp]
                        totalOrder =  [...totalOrder, total_price] 
                        totalAmount =   sumArray(totalOrder )
                        totalMrpAmount = sumArray(total_mrp)
                        console.log(totalAmount,"total amount");
                        console.log(totalMrpAmount,"total mrp");
                        return(
                          <div style={{ display:"flex",flexDirection:"column", flexWrap:"nowrap",overflowY:"scroll"}}>
    
                            <div style={{ width: "100%" }}>
                            {/* // <div style={{width:"100%",height:"100px", display:"flex",flexDirection:"column", flexWrap:"nowrap",overflowY:"scroll"}}> */}
    
                        
                      <div
                        className="card"
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          padding: "25px 10px 10px",
                        }}
                      >
                        <div style={{ width: "15%" }}>
                          <img
                            name="tumbnail"
                            src={product.img}
                            width={100}
                            alt="6 - MuscleBlaze Biozyme Whey Protein,  8.8 lb  Rich Milk Chocolate "
                          />
                        </div>
                        <div
                          className="d-flex align-items-start flex-column"
                          style={{ width: "50%" }}
                        >
                          <div className="cart-product-name">
                            {product.ProductName}
                          </div>
                          <div className="cart-product-detail">
                            <div style={{ fontSize: "16px" }}>
                              ₹<span>{product.Price}</span>
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                color: "green",
                                marginLeft: "5px",
                              }}
                            >
                              27% OFF
                            </div>
                            <div
                              style={{
                                margin: "0 10px",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <img
                                src="https://static1.hkrtcdn.com/hknext/static/media/common/dot-new.svg"
                                alt="hk-cash-yellow.svg"
                                width="4px"
                              />
                            </div>
                            <div style={{ fontSize: "12px" }}>
                              <span>Earn 194 HK Cash</span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "5px",
                              }}
                            >
                              <img
                                src="https://static1.hkrtcdn.com/hknext/static/media/common/earn-hk-cash.svg"
                                alt="hk-cash-yellow.svg"
                                width="12px"
                              />
                            </div>
                          </div>
                          <div className="cart-product-price">
                            MRP:&nbsp;
                            <span
                              class="item-price cartItem_item-price__3G3qy"
                              data-role="item-offer-price"
                            >
                              ₹13,399
                            </span>
                          </div>
                          <div className="d-flex flex-row align-items-center justify-content-around"style={{gap:"40px"}}>
                            <div className="d-flex flex-row align-items-center">
                            <DashCircle id="minus" onClick={()=>handleMinus(product._id)} />
                            <div
                              className="px-1 fw-bold"
                              id="pcount"
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              {count[product._id] || product.Quantity}
                            </div>
                            <PlusCircle
                              id="plus"
                              onClick={() => {
                                setCount((prevCounts) => ({
                                  ...prevCounts,
                                  [product._id]: (prevCounts[product._id] || count[product._id] || product.Quantity) + 1,
                                }));
                                setId(product._id);
                                setproduct(product.ProductName);
                                setprice(product.Price);
                              }}
                            />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button onClick={() => handleDelete(product)}  style={{ backgroundColor: '#00b5b7', border: 'none', borderRadius: 9, height: 20, fontSize:12, color: '#fff' }}>
                                  REMOVE
                                </button>
                              </div>
                          </div>
                              
                        </div>
                      </div>
                    </div>
                    </div>
                        )
                    })}
                    
                  </Col>
                </div>
                              
                <OrderSummary Cartamount= {totalAmount || totalMrpAmount} totalMrpAmount = {totalMrpAmount} />
                <div>
                  <Plus />
                </div>
              </Row>
            </Container>
          </div>
        </>
      );
    }
    else {
      nav('/login ')
    }
   
  
};

export default CartDetail;
