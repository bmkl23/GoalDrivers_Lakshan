import React, { useState } from 'react';
import {Customer, CurrencyType,PayhereCheckout, CheckoutParams} from 'payhere-js-sdk'
import larravel from '../../apis/larravel';

const Checkout = (amount) => {
    
    function onPayhereCheckoutError(errorMsg) {
        alert(errorMsg)
      }
      const [order_id] = useState("11234")

      async function getHash(){
        let hash = ""
        console.log(amount.amount)
       await larravel.post('/hash',{
            amount:amount.amount,
            order_id:order_id
        })
        .then((res) => { 
          console.log("result : ", res.data)
          hash = res.data
      })
    // Catch errors if any
    .catch((err) => { 
      alert(err)

    })
    return {
      hash : hash
    }
      } 

      async function checkout(){          
            // using async await
            localStorage.setItem('amount' , amount.amount)
            // const hash = getHash()
            // console.log(hash)
            try {
              const customer = new Customer({
                first_name: "Pavindu",
                last_name: "Lakshan",
                phone: "+94771234567",
                email: "plumberhl@gmail.com",
                address: "No. 50, Highlevel Road",
                city: "Panadura",
                country: "Sri Lanka",
              })
              const checkoutData = new CheckoutParams({
                returnUrl: 'http://localhost:3000/successpayment',
                cancelUrl: 'http://localhost:3000/canclepayment',
                notifyUrl: 'http://localhost:8080/notify',
                order_id: order_id,
                itemTitle: 'Meeting Payment',
                currency: CurrencyType.LKR,
                amount: 1000,
                hash:"CE880A7D441B37DE1A375AF0923F6DCE"
              })
            
              const checkout = new PayhereCheckout(customer,checkoutData,onPayhereCheckoutError)
              checkout.start()
            }
            catch(err){
              console.log(err)
            }
      }

    return (
        <div>
            <button className="card-button" style={{padding:'1rem'}} onClick={checkout}>Pay with Payhere</button>
        </div>
    );
};

export default Checkout;
