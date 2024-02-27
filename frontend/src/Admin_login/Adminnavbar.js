import React from 'react';
import Collapsible from './adminmenu';
import { Link } from 'react-router-dom';
export function AdminNav(){
    return(
        <div className="col-3 mt-4 rounded-3" style={{width: '260px'}}>
            <div className="dropdown  my-2">
                <Link to='/admin' style={{textDecoration:'none'}}>
                    <button className=" card dropdown-toggle collapsible" type="button" id="dropdownMenuButton1" style={{width: '230px', paddingRight: '100%', paddingTop: '15px', border: 'none!important'}}>
                        <span style={{fontSize: '16px', lineHeight: '24px', fontWeight: 600}}>Home</span>
                    </button>
                </Link>
            </div>
            <Collapsible/>
        </div>
    )
}