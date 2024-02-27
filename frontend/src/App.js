import React from 'react';
import HealthkartHeader from './Header/header';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import Login from './User_login/login';
import ShopMenu from './ShopMenu/shopmenu';
import { Route, BrowserRouter , Routes } from 'react-router-dom'
import Login from './User_login/login';
import Registration from './User_login/registration';
import Admin from './Admin_login/adminonview';
import Static from './default static/static';
import Footer from './footer/footer';
import AdminLogin from './Admin_login/adminlogin';
import ProductList from './Product/productlist';
import ProductPage from './Product/productpage';
import AdminHome from './Admin_login/Adminhome';
import AdminAdded from './Admin_login/Adminadded';
import AdminOnOrder from './Admin_login/Adminonorder';
import EditedProduct from './Product/EditedProduct';
import CategoryView from './Category/categoryview';
import CategoryList from './Category/categorylist';
import SubCategoryFormView from './Subcategory/subcategoryformview';
import SubCategoryView from './Subcategory/Subcategoryview';
import Cart from './cart/cart';
import { useState,useEffect } from 'react';
import { baseurl } from './util/constants';
import axios from 'axios'
import CartDetail from './cart/cart-detail';
import ShippingContent from './shipping/shippingaddress';
import Shipping from './shipping/shipping';
import Payment from './cart/payment';
import FinalOrder from './order/finalorder';
import ProductCategory from './Product/productoncategory';

function App(){
  const [product,setproduct]=useState([])
  const [SignupData,setSignUpdata] =useState([]);
  const [updateui,setupdateui] = useState(false)
  // useEffect(()=>{
  //   axios.get(`${baseurl}/get`).then((res)=>{
  //     console.log(res.data);
  //     setSignUpdata(res.data)
  //   })
  // },[updateui])

  return(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path='/'element={
        <><HealthkartHeader/>
          <ShopMenu/>
          <Static/>
          <Footer/>
        </>
        }/>
        <Route path='/OnviewProduct' element={
          <>
          <Admin products={product} setupdateui={setupdateui}/>
          </>
        }/>
        <Route path='/OnOrderProduct' element={
          <>
          <AdminOnOrder/>
          </>
        }/>
        <Route path='/Cart' element={
          <>
          <Cart/>
          <CartDetail/>
          </>
        }/>
        <Route path='/finalorder/:price/:mail' element={
          <>
          <HealthkartHeader/>
          <ShopMenu/>
          <FinalOrder />
          <Footer/>
          </>
        }/>
        <Route path='/payment/:amount/:mail/:mrp' element={
          <>
          <Cart/>
          <Payment/>
          </>
        }/>
        <Route path='/shipping/:amount/:mrp' element={
          <>
          <Cart/>
          <Shipping/>
          </>
        }/>
        <Route path="/ProductEditPage/:Id/:productname/:price"element={
          <>
          <EditedProduct />
          </>
        }/>
        <Route path='/CategoryView' element={
          <>
          <CategoryView setupdateui={setupdateui}/>
          
          </>
        }/>
         <Route path='/CategoryList' element={
          <>
          <CategoryList setupdateui={setupdateui}/>
          </>
        }/>
        <Route path='/AddCategory' element={
          <>
          <CategoryView/>
          
          </>
        }/>

        <Route path='/SubCategoryView' element={
          <>
          <SubCategoryView/>
          
          </>
        }/>
        <Route path='/SubCategoryFormView' element={
          <>
          <SubCategoryFormView/>
          
          </>
        }/>

       
        <Route path='/Adminadd'element={
          <>
          <AdminAdded setupdateui={setupdateui}/> 
          </>
        }/>
         <Route path='/productpage/:id'element={
        <>
        <HealthkartHeader/>
        <ShopMenu/>
        <ProductPage/>
        <Footer/>
          </>
        }/>
         <Route path='/productlist'element={
        <>
        <HealthkartHeader/>
        <ShopMenu/>
        <ProductList/>
        <Footer/>
          </>
        }/>
        <Route path='/productcategory/:categoryname'element={
        <>
        <HealthkartHeader/>
        <ShopMenu/>
        <ProductCategory/>
        <Footer/>
          </>
        }/>
        <Route path='/login'element={
        <>
        <HealthkartHeader/>
        <ShopMenu/>
        <Login/>
        <Footer/>
          </>
        }/>
        <Route path="/Registration" element={<>
        <HealthkartHeader/>
        <ShopMenu/>
        <Registration signupdata={SignupData}setupdateui={setupdateui} />
        <Footer/>
        </>}/>
        <Route path="/Admin" element={
        <>
        <AdminHome/>
          </>}/>
          <Route path="/" element={
        <>
        <Cart/>
          </>}/>
        <Route path="/AdminLog" element={<AdminLogin/>}/>
        <Route path="/Productlist" element={<><HealthkartHeader/>
        <ShopMenu/>
        <ProductList/>
        <Footer/>
        </>}/>
        <Route path="/Productpage" element={
        <>
        <HealthkartHeader/>
        <ShopMenu/>
        <ProductPage/>
        <Footer/>
        </>
      }/>
      </Routes>
    </div>
  </BrowserRouter> 
 ) 
}
export default  App;
