import React, { useEffect, useState } from 'react';
import './Cardfs.css';
import '../PayAfterDElivery/popmOdel.css'
import PopModal from '../PayAfterDElivery/popModal';
import Checkout from '../Checkout';

const Cards = () => {
  const [Amount] = useState(200)
  const [isPay , setIsPay] = useState(false)

  return (
    <div className="payment-cards-container">
      <div className="payment-card">
        <h3 className="card-title">Payment on Cards</h3>
        <p className="card-description">University of Moratuwa is one of the top public universities in Moratuwa, Sri Lanka. It is ranked #501-550 in Asian University Rankings 2023.</p>
        <br></br>
        {isPay?<Checkout Amount={Amount} />:<><button className="card-button" style={{padding:'1rem'}} onClick={()=>setIsPay(true)}>Pay Now</button></>}
      </div>
      <div className="payment-card">
        <h3 className="card-title">Pay after Delivery</h3>
        <p className="card-description">University of Moratuwa is one of the top public universities in Moratuwa, Sri Lanka. It is ranked #501-550 in Asian University Rankings 2023.</p>
        <button className="card-button"> <PopModal/></button>
      </div>
    </div>
  );
};

export default Cards;
