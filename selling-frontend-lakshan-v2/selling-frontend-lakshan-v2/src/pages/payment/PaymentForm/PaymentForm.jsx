import React from 'react';
import './Paymentforms.css';
import { Link } from 'react-router-dom';


 export default function PaymentForm (){

  return (
    <>
    <div className='d-flex justify-content-center'>
    <div className="payment-form-container">
      
    
      <form  className="payment-form">
        <div className="form-group">
          <label  className="form-label">
            Card number
          </label>
          <input
            type="text"
           placeholder='009 899 342 213'
            id="cardNumber"
            className="form-control"
    
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolderName" className="form-label">
            Cardholder name
          </label>
          <input
            type="text"
            placeholder='B.M.K.L BASNAYAKE '
            id="cardHolderName"
            className="form-control"
    
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="expiryMonth" className="form-label">
              Expiry month
            </label>
            <input
              type="text"
              placeholder='00/00'
              id="expiryMonth"
              className="form-control"
          
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="expiryYear" className="form-label">
              Expiry year
            </label>
            <input
              type="text"
              placeholder='2023'
              id="expiryYear"
              className="form-control"
         
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cvv" className="form-label">
            CVV
          </label>
          <input
            type="text"
            placeholder='5364'
            id="cvv"
            className="form-control"
      
          />
        </div>
       < center>
        <Link to="/pop_modal"> <button type="submit" className="btn btn-primary">
          Make The Payment 
        </button>
        </Link> 
       </center>
      </form>
    </div>
    </div>
    </>
  );
}


