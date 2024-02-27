import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import { baseurl } from '../util/constants';
import axios from 'axios';

function OrderTable() {
// 	const data = [
//         { RefId:456,OrderCreated:"13/03/2023", CustomerName:"Vijay", ProductName: "fair lovely",Price:"$22", Status:"Ordered",DeliveryStatus:"Out For Deleivery"},
//         { RefId:457,OrderCreated:"02/03/2023",CustomerName:"Sankar", ProductName: "VVD coconut Oil", Price: "$800",Status:"Ordered",DeliveryStatus:"Out For Deleivery"},
//         {RefId:458,OrderCreated: "22/03/2023", CustomerName:"vikram",ProductName: "Face Cream", Price: "$30",Status:"Ordered",DeliveryStatus:"Out For Deleivery"},
//         {RefId:459,OrderCreated:"14/03/2023",CustomerName:"Ram", ProductName: "Face Cream", Price: "$30",Status:"Ordered",DeliveryStatus:"Out For Deleivery"},
//         {RefId:460,OrderCreated:"12/03/2023",CustomerName:"Sankar", ProductName: "muscle balze Cream", Price: "$30",Status:"Ordered",DeliveryStatus:"Out For Deleivery"},
//         {RefId:461,OrderCreated:"12/03/2023",CustomerName:"laxman", ProductName: "Protein Shake", Price: "$30",Status:"Ordered",DeliveryStatus:"Out For Deleivery"},
//         {RefId:462,OrderCreated:"12/03/2023",CustomerName:"Rajesh", ProductName: "Face Cream", Price: "$30",Status:"Ordered",DeliveryStatus:"Out For Deleivery"},
//   ]

  const [updateui,setupdateui] = useState(false)


  
  const [cart,setCartData]=useState("")
  useEffect(() => {
      fetchData();
    }, [updateui] );
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/getCartdata`);
        setCartData(response.data);
        console.log(response.data)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

  return (
	<>
    <Table striped bordered hover>
      <thead style={{backgroundColor:'#4fb2b5'}}>
		<tr>
        <th style={{textAlign:"center",color:"#fff" }}>Ref Id</th>
		<th style={{textAlign:"center",color:"#fff" }}>Product Name</th>
		<th style={{textAlign:"center",color:"#fff" }}>Product Price</th>
		<th style={{textAlign:"center",color:"#fff" }}>Quantity</th>
		</tr>
      </thead>
      <tbody>
	  {cart && cart.map((val, key) => {
		return (
			<tr key={key}>
            <td>{val._id  }</td>
			<td>{val.ProductName}</td>
			<td>{val.Price}</td>
			<td>{val.Quantity}</td>
			</tr>
		)
		})}
      </tbody>
    </Table>
	</>
  );
}
export default OrderTable;	

