import React, { useState } from 'react';
import { Row, Col, Button, Card, Form } from "react-bootstrap";

const Orders = (props) => {
    const[list,setlist] = useState(null)
    
    return ( 
        <div className={`final-order-table`}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Strength</th>
                  <th scope="col">Image</th>
                  
                    </tr>
              </thead>
                <tbody>
                 
                    {list?.map(data=>{
                        <tr>
                        <th scope="row">index</th>
                        <td>{data?.productName}</td>
                        <td>{data?.productName}</td>
                        <td>{data?.productName}</td>
                        <td>{data?.productName}</td>
                      </tr>
                    }  
                      )}
                </tbody>
            </table>
        </div>
     );
}
 
export default Orders;