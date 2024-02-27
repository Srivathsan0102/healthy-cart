import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from 'react';
import SubCategoryUpdate from './subcategoryupadate';
import axios from 'axios';
import { baseurl } from '../util/constants';
 function SubCategoryTable() {
	const [productData,setProductData] = useState([])
  const [updateui,setupdateui] = useState(false)
  const tableStyle={padding: "10px",marginBottom:"20px",display:"flex",justifyContent:"flex-start",gap:"50px"};


     useEffect(() => {
      fetchData();
    }, [updateui]);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/getSubCategoryData`);
        setProductData(response.data);
        console.log(response.data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
      setupdateui((prevState) => !prevState);
    }; 

    
    // function HandleDelete(subcategory,setupdateui) {
    //   // const {id} = products
    //   // console.log(products.);
    //   axios.delete(`${baseurl}/deleteSubcategory/${subcategory._id}`).then((res)=>{
    //     console.log(res);
    //     setupdateui((prev)=>!prev);
    //   })
    // }
  
    const HandleDelete = (subcategory) => {
      const id = subcategory._id;
      console.log("hii");
        axios.delete(`${baseurl}/deleteSubCategoryData/${id}`).then((res) => {
          setupdateui((prevState) => !prevState);
        });
        setupdateui((prevState) => !prevState);

      
    };





    
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
                HandleDelete(props.myvalue);
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
    
        return (
          <>
            <img alt="img"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzWMFGLR662VUJCBZ2P5BJqHYI6yEPDttDA&usqp=CAU'
              onClick={() => setModalShow(true)}
              value="Delete"
              style={{ color: '#fff',border:"none",backgroundColor: 'rgb(0, 184, 185)',height:"25px" }}
            />
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              myvalue={props.myvalue}
            />
          </>
        );
      }


      const defaultOption = { value: "", label: "All" };
      const [selectedOption, setSelectedOption] = useState("");
      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const uniqueCategories = [...new Set(productData.map((task) => task.category))];
      const filteredTasks = productData.filter((task) => {
        return selectedOption === "" || task.category === selectedOption;
      });
  return (
	<>

<div className="col"style={tableStyle}>
            <h6 style={{textAlign:"start"}}>Hello,Welcome to HealthKart</h6>
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
            <select style={{border:"none",width:"150px",height:"35px",borderRadius:"5px"}}
          className="py-2 p-1 mx-5"
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
          <Link to='/SubCategoryFormView'> 
          <button style={{border:"none",width:"150px",height:"35px",borderRadius:"5px",marginLeft:"50px"}}>
              <span>Add SubCategory</span>
          </button>
      </Link>
      {/* <button style={{border:"none",width:"150px",height:"35px",borderRadius:"5px"}} onClick={onDownload}>Export</button> */}

      </div>
        </div>
    <Table striped bordered hover style={{width:"750px"}}>
      <thead style={{backgroundColor:'#4fb2b5'}}>
		<tr>
        <th style={{textAlign:"center",color:"#fff",width:"700px" }}>SubCategory Id</th>
		<th style={{textAlign:"center",color:"#fff",width:"700px" }}>SubCategory Name</th>
		<th style={{textAlign:"center",color:"#fff",width:"700px" }}>Category</th>
        <th style={{textAlign:"center",color:"#fff",width:"700px" }}>Action</th>
		<th style={{textAlign:"center",color:"#fff",width:"700px" }}>Delete</th>

		</tr>
      </thead>
      <tbody>
	  {filteredTasks.map((val,key) => {
		return (
			<tr key={key}>
            <td>{val.subCategoryId }</td>
			      <td>{val.subCategoryName}</td>
            <td>{val.category}</td>

            <td>
              <SubCategoryUpdate subcategory={val}  setupdateui={setupdateui}/>
            </td>
            <td>
              <MyModel myvalue={val} />
            </td>
			</tr>
		)
		})}
      </tbody>
    </Table>
	</>
  );
}
export default SubCategoryTable;	

