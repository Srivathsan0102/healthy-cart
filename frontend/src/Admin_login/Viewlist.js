import React from 'react';
import { useNavigate } from 'react-router-dom';
function ViewList(){
    
    const nav = useNavigate();
        function OnViewProductlist(){
        nav('/OnviewProduct', { replace: { from: 'AdminLog' } });
    }
    function OnViewOrderedlist(){
        nav('/OnOrderProduct', { replace: { from: 'AdminLog' } });
    }
    return(
        <div className="viewcard row d-flex align-items-center justify-content-space-between flex-row"style={{columnGap: "40px"}}>
            <div className=" col-4 ">
                <div className="card d-flex align-items-center justify-content-center flex-column">
                    <img alt="order"style={{width:"100px",height:"100px"}} src="https://ps.w.org/woo-product-table/assets/icon-256x256.png?rev=2538364"/>
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={OnViewProductlist}
                        style={{width: '5opx', height: '40px', backgroundColor : '#00b5b7', color: '#fff', border: 'none',marginTop:"10px"}}>View Poduct List</button>
                </div>
            </div>
            <div className="col-4   ">
                <div className="card d-flex align-items-center justify-content-center flex-column">
                    <img alt="order" style={{width:"100px",height:"100px"}} src={process.env.PUBLIC_URL + '/ordered.jpg'}/>
                    <button 
                        type="button" 
                        className="btn btn-primary" 
                        onClick={OnViewOrderedlist}
                        style={{width: '5opx', height: '40px', backgroundColor : '#00b5b7', color: '#fff', border: 'none',marginTop:"10px"}}>View Order List</button>
                </div>
            </div>
        </div>
    )

}
export default ViewList;