import React, { useState, useEffect } from 'react';
import SignInNav from "./SignInNav";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {db} from "../firebase";
import firebase from "firebase";
import { useAuth } from "../AuthContext";



// class History extends Component {
//     state = { 
//         data : []
//      }

//     columns = [
    
//         {
//          name: "productName",
//          label: "Product Name",
//          options: {
//           filter: true,
//           sort: false,
//          }
//         },
//         {
//           name: "strength",
//           label: "Strength",
//           options: {
//            filter: true,
//            sort: false,
//           }
//          },
//          {
//             name: "quantity",
//             label: "Quantity",
//             options: {
//              filter: true,
//              sort: false,
//             }
//            },
//            {
//             name: "imageURL",
//             label: "Image",
//             options: {
//              filter: true,
//              sort: false,
             
//             }
//            }
//            ,
//            {
//             name: "date",
//             label: "Date",
//             options: {
//              filter: true,
//              sort: false,
//              sortDescFirst: true,
//             }
//            }
        
        
//        ];

//     componentDidMount(){
//         db.collection('orders').where("email","==",currentUser.email).get().then(snapshot=>{
//             let data = []
//             snapshot.forEach(doc=>{
//               const orderData = doc.data()
//               data.push(orderData)
//             })
           
//             let orderList=data.map(data=>data.orderList)
//             let totalOrder = orderList.map(data=>data.length)
//             let date = data.map(data=>data.orderedAt.seconds)
//             let totalOrderList = data.length
//             for (let index = 0; index < totalOrderList ; index++) {
//               for (let j = 0; j < totalOrder[index]; j++) {
//                 let dateObject = new Date(date[index]*1000)
//                 orderList[index][j].date = dateObject.toLocaleString()                
//               } 
//             }

//             let count = 0
//             let userData = []
//             let dataLen = []
//             dataLen = data.map(data=>data.orderList.length)

//             for (let i = 0; i < data.length; i++) {
//               for (let k = 0; k < dataLen[i]; k++) {
//                   userData[count] = data[i].orderList[k]
//                   count++
//               }    
//           }
           
//             console.log(userData)
//             this.setState({data:userData})
//         }).catch(error=> console.log(error))


//       }
//     render() { 
//         return ( 
//             <>
//            <SignInNav/>
           
//         <div className="col-md-12 col-lg-12" style={{ marginTop: "15vh" }}>
//           <MuiThemeProvider>
//             <MUIDataTable 
//             title={"All Orders"}  
//             columns = {this.columns}
//             data = {this.state.data}
//             />
            

//           </MuiThemeProvider>
//         </div>
//         </>
//          );
//     }
// }
 
// export default History;

const History = () => {
  const [data,setData]=useState([])
  const { currentUser } = useAuth();


const columns = [

    {
     name: "productName",
     label: "Product Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      name: "strength",
      label: "Strength",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
        name: "quantity",
        label: "Quantity",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "imageURL",
        label: "Image",
        options: {
         filter: true,
         sort: true,
         customBodyRender: (value, tableMeta, updateValue) => (
          <img style={{height:"100px",width:"auto"}} src={(value==="undefined")?'https://firebasestorage.googleapis.com/v0/b/onepoint-website.appspot.com/o/ordersImage%2Fbf77e646-a0e7-4ee2-90d4-b8a838b18324.png?alt=media&token=fac2321f-fbc4-4893-a0b6-e58631633dae':value}/>
          )
        }
       }
       ,
       {
        name: "date",
        label: "Date",
        options: {
         filter: true,
         sort: true,
         sortDescFirst: true,
        }
       }
    
    
   ]; 

   useEffect(() => {
    db.collection('orders').where("email","==",currentUser.email).get().then(snapshot=>{
      let data = []
      snapshot.forEach(doc=>{
        const orderData = doc.data()
        data.push(orderData)
      })
     
      let orderList=data.map(data=>data.orderList)
      let totalOrder = orderList.map(data=>data.length)
      let date = data.map(data=>data.orderedAt.seconds)
      let totalOrderList = data.length
      for (let index = 0; index < totalOrderList ; index++) {
        for (let j = 0; j < totalOrder[index]; j++) {
          let dateObject = new Date(date[index]*1000)
          orderList[index][j].date = dateObject.toLocaleString()                
        } 
      }

      let count = 0
      let userData = []
      let dataLen = []
      dataLen = data.map(data=>data.orderList.length)

      for (let i = 0; i < data.length; i++) {
        for (let k = 0; k < dataLen[i]; k++) {
            userData[count] = data[i].orderList[k]
            count++
        }    
    }
     
      console.log(userData)
      setData(userData)
    }).catch(error=> console.log(error))
},[]);


  

  return ( 
    <>
    <SignInNav/>
    
 <div className="col-md-12 col-lg-12" style={{ marginTop: "15vh" }}>
   <MuiThemeProvider>
     <MUIDataTable 
     title={"Order History"}  
     columns = {columns}
     data = {data}
     options={{selectableRows: false}}
     />
     

   </MuiThemeProvider>
 </div>
 </>
   );
}
 
export default History;