import React, { useEffect, useState } from 'react'
import './OrderSSD.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


export default function OrderSummary({price}) {

  const [delivery , setDelivery] = useState(0)
  const [discount , setDiscount] = useState(0)
  const [total , setTotal] = useState(0)

  useEffect(()=>{
      let deliv = Math.floor(Math.random() * 300) + 100
    let disc = Math.floor(Math.random() * 1000)
    setDelivery(deliv)
    setDiscount(disc)
    setTotal(deliv + disc + price)
    localStorage.removeItem('rand')
  } , [])


  return (
    <div>
      
       <div >
       <div className='order-summury'>
       <h3 className='orderH' style={{textAlign:'center'}}>Order Summary </h3>
     
                    
                   <br></br>  <br></br>   <br></br> 
     <table className='widthth' >

       <tr>
        
         <td>  Total Item Price</td>
         <td>:</td>
         <td>Rs.{price}.00 </td>

         <td>        </td>
       </tr>
       <tr>
         <td>Delivery charge </td>
         <td>:</td>
         <td>Rs.{delivery}  </td>

       </tr>

       <tr>
         <td>Discount Allowance</td>
         <td>:</td>
         <td>Rs.{discount}</td>

       </tr>

       <tr>
         <td>Total   </td>
         <td>:</td>
         <td className='totall'>Rs.  {total}</td>

       </tr>
     </table>

     <br/>  

     <Link to='/payment_home'><button className='Butoo' variant="danger" style={{width:'8rem', height:'2.5rem'}}>Place The Order</button></Link>

       </div>


       </div>

    </div>
  )
}