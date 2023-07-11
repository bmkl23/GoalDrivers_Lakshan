import React, { useEffect } from "react";

export default function CanclePayment(){


    useEffect(()=>{
      alert("Payment Has Canceled")
      window.location = "/"
    },[])
    return(
        <>
        <h1>Cancle Payment</h1>
        </>
    )
}