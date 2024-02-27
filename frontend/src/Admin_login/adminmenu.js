import React, { useState } from 'react';
import '../Admin_login/Admin.css';
import { Link, useNavigate } from 'react-router-dom';

function Collapsible() {
    const nav = useNavigate();
const admin_menu = [
{ menuName: 'Product', menu1: 'Product list', menu2: 'Add Product' },
{ menuName: 'Utilities', menu1: 'Category ',menu2:"Sub Category" },
{ menuName: 'Order', menu1: 'Order List', menu2: '' },
];

const [activeMenus, setActiveMenus] = useState(
  admin_menu.map(() => {  return false})
);

const handleToggle = (index) => {
  setActiveMenus((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
  );
};
function Handleclick(){
    console.log("kk");
   localStorage.removeItem("adminname");
   localStorage.removeItem("Islogin")
   nav('/AdminLog')
}


 
return (
  <>
      <div
          className="col-3 mt-4 rounded-3"
          style={{ width: '260px' }}
      >
          {admin_menu.map((menu, index) => {
            if(menu.menuName==="Utilities"){
                return (
                    <>

                      <button
                          className="card dropdown-toggle collapsible"
                          id="dropdownMenuButton2"
                          onClick={() => handleToggle(index)}
                          type="button"
                          style={{
                              width: '230px',
                              paddingRight: '100%',
                              marginTop: '15px',
                              border: 'none!important',
                          }}
                      >
                          <span
                              style={{
                                  fontSize: '16px',
                                  lineHeight: '24px',
                                  fontWeight: 600,
                              }}
                          >
                              {menu.menuName}
                          </span>
                      </button>
                      {activeMenus[index] && (
                            
                            <ul
                                style={{ width: '230px',marginTop:"10px",color:'',lineHeight: "27px",
                                fontSize: "small" }}
                                aria-labelledby="dropdownMenuButton2">
                                
                                <Link to='/CategoryList' style={{textDecoration:"none",color:"#000"}}>
                                    <li style={{ marginLeft: '5px' }}>
                                    {menu.menu1}
                                </li>
                                </Link>
                                <Link to='/SubCategoryview' style={{textDecoration:"none",color:"#000"}}>
                                    <li style={{ marginLeft: '5px' }}>
                                    {menu.menu2}
                                </li>
                                </Link>
                            </ul>
                        )}
                  </>
              );
            }
            else if(menu.menuName==="Product"){
                return(
                    <>
                    <Link to='/OnviewProduct' style={{textDecoration:"none",color:"#000"}}>
                    <button
                          className="card dropdown-toggle collapsible"
                          id="dropdownMenuButton2"
                          onClick={() => handleToggle(index)}
                          type="button"
                          style={{
                              width: '230px',
                              paddingRight: '100%',
                              marginTop: '15px',
                              border: 'none!important',
                          }}
                      >
                        
                          <span
                              style={{
                                  fontSize: '16px',
                                  lineHeight: '24px',
                                  fontWeight: 600,
                              }}
                          >
                              {menu.menuName}
                          </span>
                      </button>
                    </Link>
                    </>
                )
            }
            else{
                return(
                    <>
                    <Link to='/OnOrderProduct' style={{textDecoration:'none',color:"#000"}}>  <button
                          className="card dropdown-toggle collapsible"
                          id="dropdownMenuButton2"
                          onClick={() => handleToggle(index)}
                          type="button"
                          style={{
                              width: '230px',
                              paddingRight: '100%',
                              marginTop: '15px',
                              border: 'none!important',
                          }}
                      >
                          <span
                              style={{
                                  fontSize: '16px',
                                  lineHeight: '24px',
                                  fontWeight: 600,
                              }}
                          >
                              {menu.menuName}
                          </span>
                      </button>
                      </Link>
                    </>
                )
            }
              
          })}
            <button
                className="card dropdown-toggle collapsible"
                type="button"
                style={{
                    width: '230px',
                    paddingRight: '100%',
                    marginTop: '15px',
                    border: 'none!important',
                    
                }}
                 onClick={Handleclick}

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
            
      </div>
  </>
);
        }
export default Collapsible;