import React, { useEffect } from "react";

export default function SuccessPayment(){

    useEffect(()=>{
      alert("Succefully Payed")
      window.location = '/'
    },[])
    return(
        <>
        </>
    )
}