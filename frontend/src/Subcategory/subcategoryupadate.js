import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState,useEffect } from "react";
import axios from "axios";
import { baseurl } from "../util/constants";

function SubCategoryUpdate(props) {
    const [ID, setID] = useState();

  const input_style = {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    width: "250px",
    height: "51px",
    borderRadius: "8px",
  };
  // console.log(props.subcategory);
  const [newsubcategory, setnewsubcategory] = useState("");


  const [modalShow, setModalShow] = React.useState(false);
  function MyVerticallyCenteredModal(props) {
    const [subcategory,setsubCategory]=useState(newsubcategory);

    useEffect(() => {   
        setnewsubcategory(props.subcategory.subCategoryName);
        setID(props.subcategory._id)
      },[]);
       function   HandleSubmit(e) {
        e.preventDefault();
      axios
      .put(`${baseurl}/updatesubcategory/${ID}`, {
        subCategoryName:subcategory
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
            Customize  SubCategory
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={HandleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <div className="d-flex align-items-start justify-content-around  flex-row">
              <label>
                Sub Category id
                <span style={{ color: "red", padding: "10px" }}>*</span>
              </label>
              <div className="form-input">
                <input
                  type="number"
                  name="Category"
                  value={props.subcategory.subCategoryId}disabled
                  placeholder="Sub Category"
                  // onChange={HandleFormData}
                  style={input_style}
                />
                {/* {SubCategoryError && (
                  <span style={{ color: "red" }}>{SubCategoryError}</span>
                )}               */}
                </div>
            </div>
            <div className="d-flex align-items-start justify-content-around  flex-row">
              <label>
                sub Category Name
                <span style={{ color: "red", padding: "10px" }}>*</span>
              </label>
              <div className="form-input" style={{ gap: "5px" }}>
                <input
                  type="name"
                  name="CategoryName"
                  value={subcategory}
                  placeholder="Sub Category Name"
                  onChange={(e) => setsubCategory(e.target.value)}
                  // onChange={HandleFormData}

                  style={input_style}
                />
                {/* <span style={{color:"red"}}>{productNameError}</span> */}
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button
                type="submit"
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
                Update Sub Category
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick ={props.onHide}>Close</Button>
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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        subcategory={props.subcategory}
        setupdateui={props.setupdateui} 
      />
    </>
  );
}

export default SubCategoryUpdate;
