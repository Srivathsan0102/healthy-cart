import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductTable(props){
    return(
        <div className="col"style={props.tableStyle}>
            <h6 style={{textAlign:"start"}}>Hello,Welcome to HealthKart</h6>
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                    <input type="search"id="search"style={{width:"300px",height:"35px"}}/>
                    <Link to={props.link}> 
                        <button style={{border:"none",width:"150px",height:"35px",borderRadius:"5px"}}>
                            <span>{props.label}</span>
                        </button>
                    </Link>
            </div>
        </div>
    )
}