import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Email from "../Email";
import "./login.css";
import { useNavigate } from "react-router-dom";
// import { validate } from "../../../../backend/models/registrationSchema";
import { baseurl } from "../util/constants";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function RegistrationForm({ signupdata, setupdateui }) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  console.log(selectedOption);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  };
  const nav = useNavigate()
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const firstname = formValues.firstName;
  const lastname = formValues.lastName;
  const useremail = formValues.email;
  const Password = formValues.password;
  const Gender = selectedOption;
  console.log(useremail);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    const validate = (values) => {
      // console.log(values);
      const errors = {};
      let regex = /^[a-zA-Z]+$/;
      let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      let validEmail = emailRegex.test(values.email);
      let validfirstName = regex.test(values.firstName);
      let validlastName = regex.test(values.lastName);
      console.log(`Submitted DOB: ${dob}`);
  
      if (values.firstName.length < 1 || !validfirstName) {
        errors.firstName = "Please enter a valid last name ";
      }
      if (values.lastName.length < 1 || !validlastName) {
        errors.lastName = "Please enter a valid last name ";
      }
  
      if (!validEmail) {
        errors.email = "Please enter a valid email address";
      }
      if (values.password.length < 8) {
        errors.password = "Password should be at least 8 characters long";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
      return errors
    };
    
    const formErrors = validate(formValues);
    setFormErrors(formErrors);
    console.log(formErrors);
    setIsSubmit(true);
  };
  console.log(formErrors);
  const handleSubmit = (e) => {
    console.log("check");
    e.preventDefault();
    // const formErrors = validate(formValues);
    // setFormErrors(formErrors);
    // setIsSubmit(true);
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && formValues.firstName.length !=0) {
      console.log("Sending data to backend...");
      axios
        .post(`${baseurl}/save`, {
          task: {
            firstName: firstname,
            lastName: lastname,
            email: useremail,
            Password: Password,
            gender: Gender,
          },
        })
        .then((res) => {
          console.log("Data sent to backend successfully:", res.data);
          setfirstName("");
          setlastName("");
          setEmail("");

          toast.success('User Registered Successfully', { toastId: 'success-toast',autoClose:750 })
        })
        .catch((err) => {
          console.log("Error sending data to backend:", err);
        });
        nav('/login')
    }
    else {
      toast.error('User has not registered successfully', { toastId: 'danger-toast', autoClose: 750 });
    }
      };
 

 
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
 
  function handleInputChange(event) {
    setDob(event.target.value);
  }

  const input_style = { width: "300px", height: "51px" };
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <form
            className="register d-flex  justify-content-center flex-column"
            method="get"
            action="#"
            style={{
              width: "500px",
              marginTop: "30px",
              padding: "20px 100px 100px 100px",
            }}
            onSubmit={handleSubmit}
          >
            <div className="my-4 headregister">
              <h2 style={{ textAlign: "center", marginLeft: "10px" }}>
                Become a Member
              </h2>
            </div>
            <Col
              lg={4}
              className="d-flex align-items-start justify-content-center flex-column"
              style={{ gap: "20px" }}
            >
              <div
                className="d-flex align-items-start justify-content-center flex-column"
                style={{ gap: "5px" }}
              >
                <label>
                  First Name
                  <span style={{ color: "red", padding: "10px" }}>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formValues.firstName}
                  placeholder="Enter your First Name"
                  onChange={changeHandler}
                  style={input_style}
                />
                <span style={{ color: "red" }}>{formErrors.firstName}</span>
              </div>
              <div
                className="d-flex align-items-start justify-content-center flex-column"
                style={{ gap: "5px" }}
              >
                <label>
                  Last Name
                  <span style={{ color: "red", padding: "10px" }}>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formValues.lastName}
                  placeholder="Enter your Last Name"
                  onChange={changeHandler}
                  style={input_style}
                />
                <span style={{ color: "red" }}>{formErrors.lastName}</span>
              </div>
              <div
                className="d-flex align-items-start justify-content-center flex-column"
                style={{ gap: "5px" }}
              >
                <label>Date Of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formValues.dob}
                  onChange={changeHandler}
                  style={{
                    width: "300px",
                    height: "51px",
                    alignItems: "flex-start",
                  }}
                  placeholder="Enter the DOB"
                />
              </div>
              <Email
                value={formValues.email}
                style={input_style}
                onChange={changeHandler}
                error={formErrors.email}
              />

              <div
                className="d-flex align-items-start justify-content-center flex-column"
                style={{ gap: "5px" }}
              >
                <label>Create Password</label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={changeHandler}
                  style={input_style}
                  placeholder="Enter Password"
                />
                <span style={{ color: "red" }}>{formErrors.password}</span>
              </div>
              <div
                className="d-flex align-items-start justify-content-center flex-column"
                style={{ gap: "5px" }}
              >
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={changeHandler}
                  style={input_style}
                  placeholder="Re-enter Password"
                />
                <span style={{ color: "red" }}>
                  {formErrors.confirmPassword}
                </span>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <div className="d-flex align-items-center" id="gender">
                  <p className="mb-0 px-2" style={{ fontSize: 15 }}>
                    Gender:
                  </p>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={selectedOption === "male"}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="male"
                    className="mx-2"
                    style={{ fontSize: 14 }}
                  >
                    Male
                  </label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={selectedOption === "female"}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="female"
                    className="mx-2"
                    style={{ fontSize: 14 }}
                  >
                    Female
                  </label>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    checked={selectedOption === "other"}
                    onChange={handleOptionChange}
                  />
                  <label
                    htmlFor="other"
                    className="mx-2"
                    style={{ fontSize: 14 }}
                  >
                    Other
                  </label>
                </div>
                <p style={{ color: "red", fontSize: 12 }}>
                  {formErrors.gender}
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  width: "300px",
                  height: "51px",
                  backgroundColor: "#00b5b7",
                  color: "#fff",
                  border: "none",
                }}
              
                
              >
                Proceed
              </button>
            
            </Col>
          </form>
        </Row>
      </Container>
      <ToastContainer toastContainerClassName="custom-toast-container"
        position={toast.POSITION.TOP_RIGHT}/>
    </>
  );
}
export default RegistrationForm;
