import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { baseurl } from "../util/constants";

function MyProductUpdate(props) {
  const input_style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "250px",
    height: "51px",
    borderRadius: "8px",
  };

  const [newProduct, setNewProduct] = useState("");
  const [ID, setID] = useState("");
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCategoryModal(props) {
    const [product, setProduct] = useState(newProduct);
    const [productError, setProductError] = useState("");

    useEffect(() => {
      setProduct(props.product.ProductName);
      setID(props.product._id);
    }, [props.product]);

    function handleSubmit(e) {
      e.preventDefault();

      if (product.trim().length !== 0) {
        axios
          .put(`${baseurl}/updateproduct/${ID}`, {
            ProductName: product,
          })
          .then((res) => {
            console.log(res.data);
            setProductError("Enter the Product Name");
            props.setupdateui((prevState) => !prevState);
          })
          .catch((err) => {
            console.log(err);
          });

        props.onHide();
      } else {
      }
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
            Customize Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className="d-flex align-items-start justify-content-around flex-row"
              style={{ gap: "5px" }}
            >
              <label>
                Product Id
                <span style={{ color: "red", padding: "10px" }}>*</span>
              </label>
              <div className="form-input">
                <input
                  type="number"
                  name="productId"
                  disabled
                  value={props.product.ProductId}
                  placeholder="ProductId"
                  style={input_style}
                />
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-around  flex-row">
              <label>
                Product Name
                <span style={{ color: "red", padding: "10px" }}>*</span>
              </label>
              <div className="form-input" style={{ gap: "5px" }}>
                <input
                  type="text"
                  name="ProductName"
                  value={product}
                  placeholder="Product Name"
                  onChange={(e) => setProduct(e.target.value)}
                  style={input_style}
                />
                {productError && (
                  <span style={{ color: "red" }}>{productError}</span>
                )}
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
                Save Changes
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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShktj999MPvsXU24g1lBdtxfx_pYCPFfacoQ&usqp=CAU"
        style={{ height: "25px" }}
        className="product-edit"
        value="Edit"
        onClick={() => setModalShow(true)}
      />
      <MyVerticallyCategoryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={props.product}
        setupdateui={props.setupdateui} 
         />
    </>
  );
}

export default MyProductUpdate;
