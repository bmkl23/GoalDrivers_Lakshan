import React from 'react'
import './Payment.css'
import PaymentForm from './PaymentForm/PaymentForm' 
import Cards from './Cards/Cardss'
import PopModal from './PayAfterDElivery/popModal'
import NavHome from '../../components/NavBar/NavHome'
import Footer from '../../components/Footer/Footer'




export default function PaymentHome() {
  return (<>
  <NavHome/>
    <div>
     
     <Cards/>

     <br></br><br></br><br></br>


    </div>
    <Footer/>
    </>
  )
}
    