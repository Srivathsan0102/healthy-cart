import React, { useState,useEffect,useRef } from 'react';
import './table.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { baseurl } from '../util/constants';
import { useDownloadExcel } from 'react-export-table-to-excel';
import MyProductUpdate from './productupdate';
import { Link } from 'react-router-dom';


function Tables({products}) {
  const [productData, setProductData] = useState(products);
  console.log(products);
  const [updateui,setupdateui] = useState(false)
  const tableStyle={padding: "10px",marginBottom:"20px",display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"50px"};

  const [editData, setEditData] = useState(null);
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Tasksheet',
    sheet: 'Users'
})
  useEffect(() => {
    fetchData();
  }, [updateui] );
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseurl}/getProductdata`);
      setProductData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  function handleDelete(products) {
    // const {id} = products
    // console.log(products.);
    axios.delete(`${baseurl}/deleteProductdata/${products.ProductId}`).then((res)=>{
      console.log(res);
    })
    setupdateui((prevState) => !prevState);
    
  }
  // function Onsearch(productname) {
  //   setProductData(productData.filter((searchproduct) => searchproduct.ProductID == productname));
  // }
  const defaultOption = { value: "", label: "All" };
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const uniqueCategories = [...new Set(productData.map((task) => task.Category))];
  const filteredTasks = productData.filter((task) => {
    return selectedOption === "" || task.Category === selectedOption;
  });
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        centered>
        <Modal.Header closeButton />
        <Modal.Body>
          Are you sure you want to delete this Product?
          <div style={{ minHeight: '30px' }}></div>
          <div
            className='d-flex align-items-center justify-content-center'
            style={{ gap: '20px' }}>
            
          </div>
        </Modal.Body>

        <Modal.Footer>
        <Button
              size="sm"
              style={{ backgroundColor: 'rgb(0, 184, 185)' }}
              onClick={() => {
                handleDelete(props.products);
                props.onHide();
              }}>
              Yes
            </Button>
            <Button
              size='sm'
              style={{ backgroundColor: 'rgb(0, 184, 185)' }}
              onClick={props.onHide}>
              No
            </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyModel(props) {
    const [modalShow, setModalShow] = useState(false);
    // console.log(props.myvalue);
    return (
      <>
        <img alt="delete"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzWMFGLR662VUJCBZ2P5BJqHYI6yEPDttDA&usqp=CAU'
          onClick={() => setModalShow(true)}
          value="Delete"
          style={{ color: '#fff',border:"none",backgroundColor: 'rgb(0, 184, 185)',height:"25px" }}
        />
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          products={props.myvalue}
        />
      </>
    );
  }
  
  return (
    <>



        <div className="col"style={tableStyle}>
            <h6 style={{textAlign:"start"}}>Hello,Welcome to HealthKart</h6>
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
            <select style={{border:"none",width:"150px",height:"35px",borderRadius:"5px"}}
          className="py-2 p-1 mx-2"
          id="category-selector"
          value={selectedOption}
          onChange={(e) => handleOptionChange(e)}
        >
          <option value={defaultOption.value}>{defaultOption.label}</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
           
        </select> 
          <Link to='/Adminadd'> 
          <button style={{border:"none",width:"150px",height:"35px",borderRadius:"5px"}}>
              <span>Add Product</span>
          </button>
      </Link>
      <button style={{border:"none",width:"150px",height:"35px",borderRadius:"5px"}} onClick={onDownload}>Export</button>

      </div>
        </div>
      <Table striped bordered hover  ref={tableRef}>
        
        <thead style={{ backgroundColor: '#4fb2b5' }}>
          <tr>
            <th style={{ textAlign: 'center',color:"#fff" }}>ProductID</th>
            <th style={{ textAlign: 'center', width: '300px',color:"#fff" }}>
              ProductName
            </th>
            <th style={{ textAlign: 'center', width: '300px',color:"#fff" }}>
              Category
            </th>
            <th style={{ textAlign: 'center',color:"#fff" }}>Price</th>
            <th style={{ textAlign: 'center',color:"#fff" }}>Action</th>
            <th style={{ textAlign: 'center',color:"#fff" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks .map((val) => {
            console.log(val)
            return (
              <tr key={val.ProductID}>
                <td>{val.ProductId}</td>
                <td>{val.ProductName}</td>
                <td>{val.Category}</td>
                <td>₹ {val.Price}</td>
                <td>
                  <MyProductUpdate product={val}  setupdateui={setupdateui}/>
                  
                </td>
                <td>
                  <MyModel myvalue={val} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      
    </>
  );
}

export default Tables;