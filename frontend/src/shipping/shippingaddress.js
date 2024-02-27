import React from "react";
// import $ from "jquery";
import { useState } from "react";
import { Link } from "react-router-dom";

import  "./shipping.css"

export default function ShippingContent() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mobile, setmobile] = useState("");
  const [Address, setAddress] = useState("");
  const [pin, setpin] = useState("");
//   function Handlesubmit(event) {
//     $(".error").remove();
//     if (fname.length < 1) {
//       $("#id").after(
//         '<p style="color: red" class="error"><small>This field is required</small></p>'
//       );
//     } else {
//       var regfname = /^[A-Za-z\s]*$/;
//       var validfname = regfname.test(fname);
//       if (!validfname) {
//         $("#id").after(
//           '<p style="color: red" class="error"><small>Invalid Name</small></p>'
//         );
//       }
//     }
//     if (lname.length < 1) {
//       $("#lname").after(
//         '<p style="color: red" class="error"><small>This field is required</small></p>'
//       );
//     } else {
//       var regfirstname = /^[A-Za-z\s]*$/;
//       var validfirstname = regfirstname.test(lname);
//       if (!validfirstname) {
//         $("#lname").after(
//           '<p style="color: red" class="error"><small>Invalid Name</small></p>'
//         );
//       }
//     }
//     if (mobile.length < 1) {
//       $("#mobile").after(
//         '<p style="color: red" class="error"><small>This filed is required</small></p>'
//       );
//     } else {
//       var regmob = /[0-9]{10}/;
//       var validmob = regmob.test(mobile);
//       if (!validmob) {
//         $("#mobile").after(
//           '<p style="color: red" class="error"><small>enter 10 digit number</small></p>'
//         );
//       }
//     }
//     if (Address.length < 1) {
//       $("#address").after(
//         '<p style="color: red" class="error"><small>This field is required</small></p>'
//       );
//     }
//     if (pin.length < 1) {
//       $("#pin").after(
//         '<p style="color: red" class="error"><small>This field is required</small></p>'
//       );
//     }
//     event.preventDefault();
//   }
  return (
    <div className="container">
      <p style={{ fontsize: "small" }} className="fs-2">
        Contact Information
      </p>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Email"
          className="border-1 border p-2"
          style={{ width: "70%", borderRadius: "5px" }}
        ></input>
      </div>
      <div className="d-flex align-items-center mt-1">
        <input type="checkbox" style={{ color: "#f38189" }} />
        <p className="mb-1 ms-1">Email me with news and offers</p>
      </div>
      <div className="mt-2 d-flex justify-content-center flex-column">
        <p style={{ fontsize: "small" }} className="fs-2">
          Shipping address
        </p>
        <form className="forminput">
          <div class="mb-4 d-flex justify-content-center">
            <input
              type="text"
              id="id"
              placeholder="First Name"
              className="border border-1 p-2"
              onChange={(e) => {
                setfname(e.target.value);
              }}
            />
          </div>
          <div class="mb-4 d-flex justify-content-center">
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              className="border border-1 p-2"
              onChange={(e) => {
                setlname(e.target.value);
              }}
            />
          </div>
          <div class="mb-4 d-flex justify-content-center">
            <input
              type="text"
              id="mobile"
              placeholder="Phone Number"
              className="border border-1 p-2"
              onChange={(e) => {
                setmobile(e.target.value);
              }}
            />
          </div>
          <div class="mb-4 d-flex justify-content-center">
            <textarea
              type="text"
              id="address"
              className="border border-1 p-2"
              placeholder="Address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="mb-4 d-flex justify-content-center">
            <input
              type="text"
              placeholder="city"
              className="border border-1 p-2"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <input
              type="text"
              placeholder="State"
              className="border border-1 p-2"
              style={{ width: "35%", borderRadius: "5px" }}
            />
          </div>
          <div class="mb-4 d-flex justify-content-center">
            <input
              type="text"
              id="pin"
              placeholder="Country"
              className="border border-1 p-2"
              style={{ width: "35%", borderRadius: "5px" }}
            />
            <input
              type="number"
              id="pin"
              placeholder="Pin Code"
              className="border border-1 p-2"
              onChange={(e) => {
                setpin(e.target.value);
              }}
              style={{ width: "35%", borderRadius: "5px" }}
            />
          </div>

          <div class="my-4 d-flex justify-content-center">
            <Link to="/payment" className="text-decoration-none">
              <button className="butn" style={{ width: "100%" }}>
                Continue
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}