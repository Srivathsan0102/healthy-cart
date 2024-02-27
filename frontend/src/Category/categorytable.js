import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { baseurl } from '../util/constants';
import CategoryUpadate from './categoryupdate';
import MyCategory from './categoryupdate';
 function CategoryTable(Category) {
  
  const [updateui,setupdateui] = useState(false)

  const input_style = {display:"flex",alignItem:"center",justifyContent:"center", width: '250px', height: '51px', borderRadius: '8px'}

  const [categoryData, setcategoryData] = useState([Category]);
  console.log(categoryData);
  const [category,setcategory]=useState()
  const [id,setid]=useState()
  const [ID,setID]=useState()

  useEffect(() => {
    fetchData();
    
  },[updateui]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseurl}/getCategoryData`);
      setcategoryData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    setupdateui((prevState) => !prevState);
  };

    // function handleDelete(category) {
    //   // const {id} = category._id
    //   console.log(category._id);
    //   // setProductData(productData.filter((val) => val.CategoryId !== id));
    //   axios.delete(`${baseurl}/deleteCategoryData/${category._id}`).then((res) => {
    //     setupdateui((prevState) => !prevState);
    //   });
    //   // setupdateui((prevState) => !prevState);

    // }
    const HandleDelete = (category) => {
      const id = category._id;
      console.log("hii");
        axios.delete(`${baseurl}/deleteCategoryData/${id}`).then((res) => {
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
            <img alt="img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzWMFGLR662VUJCBZ2P5BJqHYI6yEPDttDA&usqp=CAU'
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

  return (
	<>
    <Table striped bordered hover style={{width:"750px"}}>
      <thead style={{backgroundColor:'#4fb2b5'}}>
		<tr>
        <th style={{textAlign:"center",color:"#fff",width:"700px" }}>Category Id</th>
		<th style={{textAlign:"center",color:"#fff",width:"700px" }}>Category Name</th>
        <th style={{textAlign:"center",color:"#fff",width:"700px" }}>Action</th>
		<th style={{textAlign:"center",color:"#fff",width:"700px" }}>Delete</th>

		</tr>
      </thead>
      <tbody>
	  {categoryData.map((val,key) => {
		return (
			<tr key={key}>
            <td>{val.CategoryId }</td>
			<td>{val.CategoryName}</td>
        <td>    
            <MyCategory category={val}  setupdateui={setupdateui}/>
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
export default CategoryTable;	

