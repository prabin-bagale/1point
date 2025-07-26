import SignInNav from "./SignInNav";
import "../css/orderNow.css";
import { useState } from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../AuthContext";
import { db, storage, serverTimestamp } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { ref as storageRef, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import 'react-html5-camera-photo/build/css/index.css';
import Camera from 'react-html5-camera-photo';


// Not needed in modular SDK, Firestore ignores undefined by default

function OrderNow() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([
    { productName: "", strength: "", quantity: "", imageURL: "" },
  ]);

   const [isUploading, setIsUploading] = useState(false);
   const [orderImage, setOrderImage] = useState("");
   const [progress, setProgress] = useState("");
   const [orderImageURL, setOrderImageURL] = useState([]);
   const [list,setList] = useState([])

  //Display Orders
  const[displayTable,setDisplayTable] = useState('d-none')
  const[displayCard,setDisplayCard] = useState('')
  const[displayConfirmAlert,setDisplayConfirmAlert] = useState('d-none')

  //Confirm Order
  const[confirm,setConfirm]=useState('')

  //OverLay Handler & Order Displays
  const[overlayDisplay,setOverlayDisplay]=useState('')
  const[fileuploaderDisplay,setFileuploaderDisplay]=useState('d-none')
  const[fileuploaderStatus,setFileuploaderStatus]=useState(false)

  const[detailDisplay,setDetailDisplay]=useState('d-none')
  const[detailStatus,setDetailStatus]=useState(false)
  

  // handle input change
  const handleInputChange = (e, index) => {
    
    const { name, value } = e.target;
    setList(orderList);
    const list = [...orderList];
    list[index][name] = value;
    setOrderList(list);
  };
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...orderList];
    list.splice(index, 1);
    setOrderList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
   
    setOrderList([
      ...orderList,
      { productName: "", strength: "", quantity: "", imageURL: "" },
    ]);
  };

  const ref = collection(db, "orders");

  function addOrder(newOrder) {
    
    if(list.length === 0 && orderImageURL.length===0){
      window.alert('Enter all Feild')
      return
    }else{
        setDisplayTable('')
        setDisplayConfirmAlert('')
        setDisplayCard('d-none')
      }
    }

   const handleUploadStart = () => {
     setIsUploading(true);
     setProgress("Uploading...");
   };
   const handleProgress = (progress) => {
     setProgress("Uploading...");
   };
   const handleUploadError = (error) => {
     setIsUploading(false);
     console.log(error);
   };
   const handleUploadSuccess = (filename) => {
     setOrderImage(filename);
     setProgress("Uploaded");
     setIsUploading(false);
     const imageRef = storageRef(storage, `ordersImage/${filename}`);
     getDownloadURL(imageRef).then((url) => setOrderImageURL([...orderImageURL, url]));
       
   };

   const confirmFalse=()=>{
  
          
         setDisplayTable('d-none')
         setDisplayConfirmAlert('d-none')
         setDisplayCard('')
   }

   const confirmTrue=(newOrder)=>{
      setDisplayConfirmAlert('d-none')
           setDoc(doc(ref, newOrder.id), {
             ...newOrder,
             orderedBy: currentUser.uid,
             email: currentUser.email,
             orderedAt: serverTimestamp(),
             status: 'Requested Order'
           })
             .then(() => {
               window.alert("Order Sucessfully Placed");
               navigate("/history");
             })
             .catch((err) => {
               console.error(err);
             });
   }

   const orderDetailHandler=()=>{
    setOverlayDisplay('d-none')
    setDetailDisplay('')
    setDetailStatus(true)
    
    
   }

   const orderImageHandler=()=>{
        setOverlayDisplay('d-none')
        setFileuploaderDisplay('')
        setFileuploaderStatus(true)
     
  }

  return (
    <>
      <SignInNav />
      <div className={overlayDisplay}>
      <div className="order-overlay-option d-flex justify-content-center align-items-center">
        <div className="order-popup-option d-flex flex-column justify-content-center align-items-center">
          <h4 className="mb-2">Order Through ?</h4>
          <div className="order-options d-flex flex-column">
              <Button
                variant="primary"
                className="mb-2"
                onClick={orderDetailHandler}
              >
                {" "}
                Detail
              </Button>
              <Button
                variant="info"
                onClick={orderImageHandler}
              >
                {" "}
                Images
              </Button>
          </div>
          
        </div>
      </div>
      </div>

      
      <div className="order-now d-flex flex-column" style={{ marginTop: "15vh" }}>
        <Card className={displayCard} style={{ marginBottom: "20px" }}>
          <Card.Body>
            <h2 style={{ textAlign: "center" }}>Order Now</h2>

            {orderList.map((x, i) => {
              return (
                <Form>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col className={detailDisplay} sm={3}>
                      <Form.Control
                        name="productName"
                        placeholder="Product Name"
                        value={x.productName}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </Col>
                    <Col className={detailDisplay} sm={4}>
                      <Form.Control
                        name="strength"
                        placeholder="Strength (mg / ml)"
                        value={x.strength}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </Col>
                    <Col className={detailDisplay} sm={2}>
                      <Form.Control
                        name="quantity"
                        placeholder="Quantity"
                        value={x.quantity}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </Col>
                    <Col className={fileuploaderDisplay} sm={2}>
                        <FileUploader
                        className="file-uploader"
                        accept="image/*"
                        name="ordersImage"
                        randomizeFilename
                        storageRef={storageRef(storage, "ordersImage")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                      />
                      
                      <Form.Control
                        className="hide-image-url"
                        name="orderImageURL"
                        value={x.imageURL=orderImageURL[i]}
                        onChange={(e) => handleInputChange(e, i)}
                        />
                    </Col>
                    <Col className={fileuploaderDisplay} sm={2}>{progress}</Col>
                    <Col sm={0}>
                      {orderList.length !== 1 && (
                        <Button
                          className="remove-btn"
                          variant="danger"
                          onClick={() => handleRemoveClick(i)}
                        >
                          <AiFillDelete />
                        </Button>
                      )}
                    </Col>
                  </Row>

                  {orderList.length - 1 === i && (
                    <Button
                      className="add-btn"
                      variant="primary"
                      onClick={handleAddClick}
                    >
                      <BsFillPlusCircleFill />
                    </Button>
                  )}
                </Form>
              );
            })}
            {/* <div style={{ marginTop: 20 }}>{JSON.stringify(orderList)}</div> */}
            <Button
              className="placeAnOrder-btn"
              variant="primary"
              onClick={() =>{addOrder()} }
            >
              {" "}
              Place Order
            </Button>
          </Card.Body>
        </Card>
        
        <div class={`container mb-2 alert-wrapper ${displayConfirmAlert}`}>
                      <div className="mb-2"><b>Do you want to place the Order?</b></div>
                      <div className="d-flex flex-row justify-content-center">
                        <div onClick={()=>{setConfirm(true);confirmTrue({ id: uuidv4(), orderList })}} className="alert-yes btn btn-primary mr-5">Yes</div>
                        <div onClick={()=>{setConfirm(false);confirmFalse()}} className="alert-no btn btn-danger">No!</div>
                      </div>
        </div>
        <div className={`final-order-table ${displayTable}`} >
          {(detailStatus===true)?
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Strength</th>        
                            </tr>
                      </thead>
                        <tbody>
                            {list.map((data,index)=>  
                                <tr>
                                  <th scope="row">{index+1}</th>
                                  <td>{data.productName}</td>
                                  <td>{data.quantity}</td>
                                  <td>{data.strength}</td>
                                </tr>
                              )}
                        </tbody>
                    </table>:
                    <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                  
                                      </tr>
                                </thead>
                                  <tbody>
                                      {orderImageURL.map((data,index)=>  
                                          <tr>
                                            <th scope="row">{index+1}</th>
                                            <td><img src={data} className="med-photo"  alt="image" /></td>
                                          </tr>
                                        )}
                                  </tbody>
                      </table>
                    }

        </div>
      </div>
       
    </>
  );
}

export default OrderNow;
