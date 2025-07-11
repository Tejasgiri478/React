import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export default function ContactUs() {
  return (
 <>
<Header />
<section className='container p-5 mt-5'>
{/* page banner */}
 <div className='p-5 shadow text-xl'>
    <ul className='flex space-x-3'>
        <li><Link to="/">Home</Link> / </li>
        <li><Link to="/" className='active text-pink-700'>Contact Us</Link></li>
    </ul>
 </div>
  {/* contact us section */}
  <h1 className='text-center  text-pink-400 text-5xl mt-5'>Send Your details</h1>
    <h1 className='text-center text-7xl font-extrabold text-pink-500 mt-4'>Contact us Form</h1>  
    {/* contact form */}
    <div className='w-full flex flex-row'>

    <div className='w-1/2 ms-20 mt-16'>
      <p><b className='text-xl'>Our Address :</b> Crescent "B" Shop No:4, Race Course Rd, <br/> near A.G.Office, Rajkot, Gujarat 360001 </p>

      <p><b className='text-xl'>Hours :</b> Open- close 12am </p>
      
      <p><b className='text-xl'>Phone :</b> 9998003879 </p>
      
      <p><b className='text-xl'>Orders :</b> swiggy-zomato </p>
      <p className=''>
      <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d118127.10433413243!2d70.70726697250888!3d22.29798179872166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3959cb5d65a360a7%3A0xf0116f696a15ba61!2sCrescent%20%22B%22%20Shop%20No%3A4%2C%20Race%20Course%20Rd%2C%20near%20A.G.Office%2C%20Rajkot%2C%20Gujarat%20360001!3m2!1d22.2980026!2d70.7896686!5e0!3m2!1sen!2sin!4v1741165294180!5m2!1sen!2sin" width="80%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </p>
    </div>
    <div className='w-1/2'>
      <form className='mt-16'>
        <div className='form-group mt-3'>
          <input type='text' placeholder='Name *' className='form-control w-full border border-bottom-2 border-pink-500 p-3' />
        </div>

        <div className='form-group mt-3'>
          <input type='text' placeholder='Name *' className='form-control w-full border border-bottom-2 border-pink-500 p-3' />
        </div>

        <div className='form-group mt-3'>
          <input type='text' placeholder='Email *' className='form-control w-full border border-bottom-2 border-pink-500 p-3' />
        </div>
        <div className='form-group mt-3'>
          <input type='text' placeholder='Phone *' className='form-control w-full border border-bottom-2 border-pink-500 p-3' />
        </div>
        <div className='form-group mt-3'>
          <input type='text' placeholder='Subject *' className='form-control w-full border border-bottom-2 border-pink-500 p-3' />
        </div>
        <div className='form-group mt-3'>
          <input type='text' placeholder='Comment *' className='form-control w-full border border-bottom-2 border-pink-500 p-3' />
        </div>

        <div className='form-group mt-5'>
          <input type='submit' className='bg-pink-700 text-white form-control w-52 border border-bottom-2 border-pink-500 p-3' value="Send" />

          <input type='reset' className='bg-pink-700 text-white form-control w-52 border border-bottom-2 border-pink-500 p-3 ms-5' value="Reset" />
        </div>
      </form>
    </div>
    </div>
    </section>
   <Footer />
   </> 
  )
}
