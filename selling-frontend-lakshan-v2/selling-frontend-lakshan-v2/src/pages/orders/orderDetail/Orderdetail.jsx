import React, { useEffect, useState } from 'react'
import './Orderdetails.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import EditAdd from '../Popup/EditAddress'
import axios from 'axios'




export default function OrderDetail() {

  const [edited , setEdited] = useState(false)
  const [delivery , setDelivery] = useState({})

useEffect(()=>{
  let edit_id = localStorage.getItem("edit")
  console.log(edit_id)
  if(edit_id != null){
    axios.get("http://localhost:3002/api/payment/get_delivery_id/"+parseInt(edit_id),{
    }).then((res)=>{
      console.log(res.data)
      setDelivery(res.data[0])
      localStorage.clear()
      setEdited(true)
    }).catch((err)=>{
      alert(err)
    })
  }
})

  return (
    <>
    {!edited?<>
      <div>
      
      <div className='containe'>
      <div className='order-detail-summury' style={{height:'90vh'}}>
  
    <table className='forms' style={{width:'42vw'}}>

     <h3> Delivery Details</h3>

      <tr>
       
        <td>  Delivery To</td>
        
        <td> B.M.K.L BASNAYAKE  </td>

        <td>        </td>
      </tr>
      <tr>
        <td>Mobile Number </td>
        <td>0716189066
        </td>
        <td> </td>

      </tr>

      <tr>
        <td>Dsitrict </td>
        
        <td> Polonnaruwa </td>

      </tr>

      <tr>
        <td>Province</td>
       
        <td> North Central Province</td>

      </tr>

      <tr>
        <td>Address</td>
        
        <td>35/D 2nd Canal Road, Polonnaruwa </td>

      </tr>

      <tr>
        <td>Land Mark  </td>
      
        <td className='totall'>Near the Royal College Polonnaruwa</td>

      </tr>

      <tr>
        <td>E-Mail Address</td>
      
        <td>kbasnayake300@gmail.com </td>

      </tr><br/>
      <EditAdd/>

    </table>

    <br/>  
    
 



      </div>


      </div>

     

   </div>
    </>:<>
    <div>
      
       <div className='containe'>
       <div className='order-detail-summury' style={{height:'90vh'}}>
   
     <table className='forms' style={{width:'42vw'}}>

      <h3> Delivery Details</h3>

       <tr>
        
         <td>  Delivery To</td>
         
         <td> {delivery.firstname} {delivery.lastname}  </td>

         <td>        </td>
       </tr>
       <tr>
         <td>Mobile Number </td>
         <td>{delivery.contact}
         </td>
         <td> </td>

       </tr>

       <tr>
         <td>Dsitrict </td>
         
         <td> {delivery.district} </td>

       </tr>

       <tr>
         <td>Province</td>
        
         <td> {delivery.province}</td>

       </tr>

       <tr>
         <td>Address</td>
         
         <td>{delivery.address} </td>

       </tr>

       <tr>
         <td>Land Mark  </td>
       
         <td className='totall'>{delivery.landmarks}</td>

       </tr>

       <tr>
         <td>E-Mail Address</td>
       
         <td>kbasnayake300@gmail.com </td>

       </tr><br/>
       <EditAdd/>

     </table>

     <br/>  
     
  



       </div>


       </div>

      

    </div>
    </>}
    </>

  )
}
