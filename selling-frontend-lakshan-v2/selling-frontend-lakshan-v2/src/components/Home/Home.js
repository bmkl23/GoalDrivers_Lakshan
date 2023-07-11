import React from 'react'
import { Link } from 'react-router-dom';
import NavHome from '../NavBar/NavHome';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <div>
      <div><NavHome/></div>
      <div style={{height:'43.65vh'}}></div> 
      <div><Footer/></div>
    </div>
  );
}




