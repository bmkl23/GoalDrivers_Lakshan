import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home"
// Payment
import PaymentHome from "./pages/payment/PaymentHome";
import PaymentForm from "./pages/payment/PaymentForm/PaymentForm";
import PopModal from "./pages/payment/PayAfterDElivery/popModal";
import Cards from "./pages/payment/Cards/Cardss";
import Modal from "./pages/payment/PayModal";
// Order Detail
import OrderDetail from "./pages/orders/orderDetail/Orderdetail";
import OrderHome from "./pages/orders/OrderHome";
import EditAdd from "./pages/orders/Popup/EditAddress";
import OrderSummary from "./pages/orders/orderSummary/OrderSS";
import BOindone from './pages/orders/Booluoo/boolian'
import { AccountCategory, Payhere } from "payhere-js-sdk";
import SuccessPayment from "./pages/payment/SuccessPayment";
import CanclePayment from "./pages/payment/CanclePayment";
import OrderConfirm from "./pages/orders/OrderConfirm";

const App = () => {
    Payhere.init("1223275",AccountCategory.SANDBOX)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="order_confirm" element={<OrderConfirm/>}/>
                <Route path="payment_home" element={<PaymentHome/>}/>
                <Route path="order_home/:price" element={<OrderHome/>}/>  
                <Route path="payment_form" element={<PaymentForm/>}/>
                <Route path="pop_modal" element={<PopModal/>}/>
                <Route path="cards" element={<Cards/>}/>
                <Route path="modal" element={<Modal/>}/>   
                <Route path="order_detail" element={<OrderDetail/>}/>
                <Route path="order_summary" element={<OrderSummary/>}/>
                <Route path="edit_address" element={<EditAdd/>}/>
                <Route path="boindone" element={<BOindone/>}/> 
                <Route path="successpayment" element={<SuccessPayment/>}/>  
                <Route path="canclepayment" element={<CanclePayment/>}/> 
            </Routes>
        </BrowserRouter>
    );
};

export default App;
