const {Router} = require("express");
const express = require("express");
const app = express();

const {getSignupData,saveSignupData,deleteUserData} = require("../contolller/registration");
const {getProductData,saveProductData,deleteProductData,updateProduct,getProductonCategoryData,getProductonid}= require("../contolller/product");
const {getCategoryData,saveCategoryData,deleteCategoryData,updatecategory}=require("../contolller/category")
const {getSubCategoryData,saveSubCategoryData,updatesubcategory,deleteSubCategoryData,getSubCategoryName}=require("../contolller/subcategory")
const { getAdmin, saveAdmin, checkAdmin } = require('../contolller/Admin');
const { getship, deleteship, saveship, updateship } = require('../contolller/shipping');

const {getCartData,saveCartData,checkdata,deleteCartData,updatecart}=require("../contolller/cart")

const router = Router();

router.get('/get',getSignupData);
router.post('/save',saveSignupData);
router.delete('/delete',deleteUserData)

router.get('/getproductdata',getProductData);
router.post('/saveProductdata',saveProductData);
router.delete('/deleteProductdata/:id',deleteProductData);
router.put('/updateproduct/:id',updateProduct);
router.get('/getcategoryproduct/:categoryname',getProductonCategoryData)
router.get('/getProductdata/:id',getProductonid)




router.get('/getcategorydata',getCategoryData);
router.post('/savecategorydata',saveCategoryData);
router.put('/updatecategory/:id',updatecategory)
router.delete('/deleteCategoryData/:id',deleteCategoryData)



router.get('/getsubcategorydata',getSubCategoryData);
router.post('/savesubcategorydata',saveSubCategoryData);
router.delete('/deleteSubCategoryData/:id',deleteSubCategoryData)
router.put('/updatesubcategory/:id',updatesubcategory)
router.get('/getSubCategoryData/:subcategoryName',getSubCategoryName)



router.get('/getAdmin',getAdmin);
router.get('/saveAdmin',saveAdmin)
router.post('/checkAdmin',checkAdmin)


router.get('/getship/:id',getship);
router.delete('/deleteship',deleteship)
router.post('/saveship',saveship)
router.get('/updateship',updateship)

router.get('/getcartdata',getCartData);
router.post('/saveCartdata',saveCartData);
router.put('/updateCart/:id',updatecart)
router.post('/checkdata',checkdata)
router.delete('/deleteCartData/:id',deleteCartData)

router.get('getpproduct',)
module.exports = router;