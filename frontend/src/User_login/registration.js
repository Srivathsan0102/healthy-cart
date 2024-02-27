import React  from "react";
import RegistrationForm from "./registrationform";

function Registration({signupdata,setupdateui}){
    

    return(
        <div className="col d-flex flex-column align-items-flex-start">
            <RegistrationForm signupdata={signupdata}/>
      </div>
    )
}
export default Registration;