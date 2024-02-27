import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderSummary = (props) => {

  const{Cartamount,amounttopay,MRP,totalMrpAmount}= props;
  console.log(Cartamount, amounttopay,totalMrpAmount);
    return (  
        <div style={{ width: "34%" }}>
              
              <Col
                style={{
                  width: "400px",
                  marginLeft: "28px",
                  backgroundColor: "#fff",
                  marginTop: "20px",
                  borderStartStartRadius: "12px",
                  padding: "24px",
                }}
              >
                <div>
                  <h4>Order Summary</h4>
                </div>
                <Col className="d-flex justify-content-between p-2">
                  <div>Total MRP</div>
                  <div>₹ {totalMrpAmount && totalMrpAmount || totalMrpAmount}</div>
                </Col>
                <Col className="d-flex justify-content-between p-2">
                  <div>Shipping Charges</div>
                  <div style={{ color: "green" }}>Free</div>
                </Col>
                
              </Col>
              
              <Col
                style={{
                  width: "400px",
                  marginLeft: "28px",
                  backgroundColor: "#fff",
                  marginTop: "2px",
                  borderEndEndRadius: "12px",
                  padding: "24px",
                }}
              >
                <Col className="d-flex justify-content-between ">
                  <h6>Payable Amount</h6>
                  <div>₹  {props.Cartamount && props.Cartamount} {props.amounttopay}</div>
                </Col>
              </Col>
              <Col
                style={{
                  marginTop: "8px",
                  borderRadius: "12px",
                  padding: "24px 24px 0px 24px",
                }}
              >
                <Link to={`/shipping/${props.Cartamount && props.Cartamount}/${props.totalMrpAmount && props.totalMrpAmount}`}style={{textDecoration:"none",color:"#000"}}>

                <button
                  style={{
                    width: "400px",
                    height: "60px",
                    background: "#00b5b7",
                    borderRadius: "12px",
                  }}
                >
                  <span style={{ color: "#fff" }}>Proceed to Pay</span>
                </button>
                </Link>
              </Col>
            </div>
     );
}
 
export default OrderSummary;