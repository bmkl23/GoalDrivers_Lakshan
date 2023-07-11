import React from 'react'
import "./Payment.css";
import { Link } from 'react-router-dom';

export default function Payment() {
  return (
    <div>

    <div className='container' >
      <from >

      <div className='inputBox'>
          <span className='spann'>Card number :</span>
          <input type="text" maxLength="16" className='card-number-input'></input>
       </div>

     
       <div className='inputBox'>
          <span>Card Holder :</span>
          <input type="text" maxLength="50" className='card-holder-input'></input>
       </div>

          
        <div className='flexbox'>
          <div className='inputBox' >
            <span>Expiration mm :</span>
            <select className='month-input' >

              <option value="Month" selected disabled>Month</option>
        <option value="January"> January</option>
        <option value="February"> February</option>
        <option value="March"> March</option>
        <option value="April"> April</option>
        <option value="May"> May</option>
        <option value="June"> June</option>
        <option value="July"> July</option>
        <option value="August"> August</option>
        <option value="September"> September</option>
        <option value="October"> October</option>
        <option value="November"> November</option>
        <option value="December"> December</option>
        

            </select>
          </div>
        </div>
       
         
        <div className='flexbox'>
          <div className='inputBox' >
            <span>Expiration Year :</span>
            <select className='year-input' >
            <option value="year" selected disabled  >Year</option>
        <option value="2021"> 2021</option>
        <option value="2022"> 2022</option>
        <option value="2023"> 2023</option>
        <option value="2024"> 2024</option>
        <option value="2025"> 2025</option>
        <option value="2026"> 2026</option>
        <option value="2027"> 2027</option>
        <option value="2028"> 2028</option>
      </select>

              </div>
              </div>

      <div className='inputBox'>
          <span>cvv :</span>
          <input type="text" maxLength="4" className='cvv-input'></input>
       </div>
           
         <div> <button type='submit'>Cancel</button></div> 
        <Link to="/"> <div> <button type='submit'>Submit</button></div></Link>
      
       </from>
                                            
                                                 </div>

                                                 
    </div>
  )
}
