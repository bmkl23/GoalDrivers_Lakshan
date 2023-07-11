import React from 'react'
import OrderDetail from './orderDetail/Orderdetail'
import BOindone from './Booluoo/boolian'
import OrderSummary from './orderSummary/OrderSS'
import NavHome from '../../components/NavBar/NavHome'
import Invoice from '../../components/Invoice/Invoice'
import { useParams } from 'react-router-dom'


export default function OrderHome(){
  const{price} = useParams()
  return (
    <div className='order-home-container'>
      <NavHome/>
    
      <div style={{display:'flex', justifyContent:'center'}}>    
       <div style={{width:'70%'}}> <OrderDetail/> </div>                 
       <div style={{width:'30%', marginRight:'4rem'}}>  <OrderSummary price={price}/></div>
      </div>
      {/* <div style={{marginTop:'16%'}}> <Invoice/></div>  */}

    
    </div>
  )
}

