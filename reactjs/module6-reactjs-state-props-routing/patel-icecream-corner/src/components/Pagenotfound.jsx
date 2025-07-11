import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
export default function Pagenotfound() {
  return (
    <>
    <Header />
   <section id='icecream-pagenot-found' className='container-fluid w-full mt-16'>
    
       <img src='https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif' alt='pagenotfound' className='img-fluid w-1/3 mx-auto'/>
       
       <Link to="/"><button className='text-xl rounded-2xl bg-amber-600 p-3 w-80 mx-auto text-white ms-128' type='button'>Go To Home <span className='bi bi-caret-right'></span></button></Link>
    
    </section>
    </>
  )
}
