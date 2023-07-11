import React from 'react'
import './invoicee.css';

export default function Invoice() {
  return (
    <div>
       <body className='Bcolr'>
          <article>
            <address>
              <p> Budget POS </p>            
            </address>        
            
            <table className="firstTable">
              <tr>
                <th><span >Invoice #</span></th>
                <td><span >101138</span></td>
              </tr>
              <tr>
                <th><span >Date</span></th>
                <td><span >January 1, 2012</span></td>
              </tr>
              <tr>
                <th><span >Amount Due</span></th>
                <td><span id="prefix" >$</span><span>600.00</span></td>
              </tr>
            </table>

            <table className="secondTable">
              <thead>
                <tr>
                  <th><span >Item</span></th>
                  <th><span >Description</span></th>
                  <th><span >Quantity</span></th>
                  <th><span >Price</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a class="cut">-</a><span >Front End Consultation</span></td>
                  <td><span >Experience Review</span></td>
               
                  <td><span >4</span></td>
                  <td><span data-prefix>$</span><span>600.00</span></td>
                </tr>
              </tbody>
            </table>
            <table className="firstTable">
              <tr>
                <th><span >Total</span></th>
                <td><span data-prefix>$</span><span>600.00</span></td>
              </tr>
              <tr>
                <th><span >Amount Paid</span></th>
                <td><span data-prefix>$</span><span >0.00</span></td>
              </tr>
              <tr>
                <th><span >Balance Due</span></th>
                <td><span data-prefix>$</span><span>600.00</span></td>
              </tr>
            </table>                      
          </article>

           
        </body>
    </div>
  )
}
