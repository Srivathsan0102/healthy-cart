import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseurl } from "../util/constants";


function MyCategory(props) {
  const [ID, setID] = useState();

  const input_style = {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    width: "250px",
    height: "51px",
    borderRadius: "8px",
  };  
  const [updateui,setupdateui] = useState(false)
  const [newcategory, setnewcategory] = useState("");




  const [modalShow, setModalShow] = React.useState(false);
  console.log(props.category);

  console.log(props.category._id);
  console.log(ID);
  
  function MyVerticallyCategoryModal(props) {
    const [category,setcategory]=useState(newcategory);

    useEffect(() => {   
        setnewcategory(props.category.CategoryName);
        setID(props.category.CategoryId)
      },[]);


      
       function   HandleSubmit(e) {
        console.log(ID);
        e.preventDefault();
      axios
      .put(`${baseurl}/updatecategory/${ID}`, {
        CategoryName:category
      })
      .then((res) => {
        console.log(res.data);
        props.setupdateui((prevState) => !prevState);

      })
      .catch((err) => {
        console.log(err);   
      }); 
      props.onHide()

    }





    return (
      <Modal
        {...props}  
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Customize Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div
              className="d-flex align-items-start justify-content-around flex-row"
              style={{ gap: "5px" }}
            >
              <label>
                Category id
                <span style={{ color: "red", padding: "10px" }}>*</span>
              </label>
              <div className="form-input">
                <input
                  type="number"
                  name="Category"
                  disabled
                  value={props.category.CategoryId}
                  // placeholder="Category"
                  // onChange={((e)=>setCategory(e.target.value ))}
                  // onChange={HandleFormData}
                  style={input_style}
                />
                {/* <span style={{color:"red"}}>{CategoryError}</span> */}
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-around  flex-row">
              <label>
                Category Name
                <span style={{ color: "red", padding: "10px" }}>*</span>
              </label>
              <div className="form-input" style={{ gap: "5px" }}>
                <input
                  type="name"
                  name="CategoryName"
                  value={category}
                  placeholder="Category Name"
                  onChange={(e) => setcategory(e.target.value)}
                  // onChange={HandleFormData}

                  style={input_style}
                />
                {/* <span style={{color:"red"}}>{productNameError}</span> */}
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <button
                type="submit"
                onClick={HandleSubmit}
                id="Login"
                className="btn btn-primary"
                style={{
                  width: "326px",
                  height: "51px",
                  backgroundColor: "rgb(0, 184, 185)",
                  color: "#fff",
                  border: "none",
                  marginTop: "20px",
                }}
              >
                <a href id="register">
                  Update Category
                </a>
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <img
        alt="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShktj999MPvsXU24g1lBdtxfx_pYCPFfacoQ&usqp=CAU "
        style={{ height: "25px" }}
        className="product-edit"
        value="Edit"
        onClick={() => setModalShow(true)}
      />
      <MyVerticallyCategoryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        category={props.category}
        setupdateui={props.setupdateui} 
      />
    </>
  );
}

export default MyCategory;
