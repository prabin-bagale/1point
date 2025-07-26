import React, { useState, useEffect } from 'react';
import SignInNav from "./SignInNav";
import { DataGrid } from '@mui/x-data-grid';
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "../AuthContext";

const History = () => {
  const [data,setData]=useState([])
  const { currentUser } = useAuth();


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'productName', headerName: 'Product Name', width: 200, sortable: true },
  { field: 'strength', headerName: 'Strength', width: 120, sortable: true },
  { field: 'quantity', headerName: 'Quantity', width: 120, sortable: true },
  {
    field: 'imageURL',
    headerName: 'Image',
    width: 150,
    renderCell: (params) => (
      <img
        style={{ height: "100px", width: "auto" }}
        src={params.value === "undefined" ?
          'https://firebasestorage.googleapis.com/v0/b/onepoint-website.appspot.com/o/ordersImage%2Fbf77e646-a0e7-4ee2-90d4-b8a838b18324.png?alt=media&token=fac2321f-fbc4-4893-a0b6-e58631633dae'
          : params.value}
        alt="order"
      />
    ),
    sortable: false,
    filterable: false,
  },
  { field: 'date', headerName: 'Date', width: 180, sortable: true },
];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'orders'), where('email', '==', currentUser.email));
        const snapshot = await getDocs(q);
        let data = [];
        snapshot.forEach(doc => {
          const orderData = doc.data();
          data.push(orderData);
        });
        let orderList = data.map(data => data.orderList);
        let totalOrder = orderList.map(data => data.length);
        let date = data.map(data => data.orderedAt?.seconds);
        let totalOrderList = data.length;
        let rows = [];
        let rowId = 1;
        for (let index = 0; index < totalOrderList; index++) {
          for (let j = 0; j < totalOrder[index]; j++) {
            let dateObject = new Date(date[index] * 1000);
            const order = orderList[index][j];
            rows.push({
              id: rowId++,
              productName: order.productName,
              strength: order.strength,
              quantity: order.quantity,
              imageURL: order.imageURL,
              date: dateObject.toLocaleString(),
            });
          }
        }
        setData(rows);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser]);


  

  return (
    <>
      <SignInNav />
      <div className="col-md-12 col-lg-12" style={{ marginTop: "15vh" }}>
        <h2>Order History</h2>
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
    </>
  );
}
 
export default History;