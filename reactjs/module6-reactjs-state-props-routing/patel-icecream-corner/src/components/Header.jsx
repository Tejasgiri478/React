import React from 'react'
import logoimg from '../assets/images/main-logo.png'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <section id='icecream-header' className='container-fluid w-full p-5 flex flex-row shadow-2xl'>
     <div className='icecrean-logo'>
      <img src={logoimg} alt='logo' className='img-fluid' />
     </div>
     <div className='icecrean-navbar'>
      <ul className='navbar navbar-expand-md flex space-x-8 ms-52 mt-4 text-xl'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About us</Link></li>
        <li><Link to="/made-it">How it Made ?</Link></li>
        <li><Link to="/our-products">Our Products</Link></li>
        <li><Link to="/contact-us">Contact</Link></li>
      </ul>
     </div>
     <div className='icecrean-buy-now mt-2 ms-16'>
      <button className='text-xl rounded-2xl bg-amber-600 p-3 w-36 text-white' type='button'>Buy Now <span className='bi bi-caret-right'></span></button>
     </div> 
    </section>
  )
}
