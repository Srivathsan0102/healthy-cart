import React from "react";

function Email(props){
    
    
    return(
        <div className="d-flex align-items-start justify-content-center flex-column" style={{gap: '5px'}}>
            <label>{props.label}</label>
            <input  
                name="email"
                value={props.value}
                style={props.style}
                onChange={props.onChange}
                placeholder="Enter Email"/>
            <span style={{color:"red"}}>{props.error}</span>
        </div>
    )
}
export default Email;