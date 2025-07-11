import React from 'react'
export default function Footer() {
  return (
    <section className='bg-pink-50 mt-16 p-16 footer'>
    {/* footer */}
    <div className='flex flex-row'>
    <div className='ms-20 w-1/2'>
    <h1 className='text-center  text-pink-200 text-3xl mt-16'>Homemade Icecream made</h1>
    <h1 className='text-center text-5xl font-extrabold text-pink-500 mt-4'>With Passion</h1>  
    </div>
    <div className='ms-20 w-1/2'>
    <h1 className='text-center  text-pink-700 text-3xl mt-16 space-x-4'>
      <span className='bi bi-facebook'></span>
      <span className='bi bi-instagram'></span>
      <span className='bi bi-whatsapp'></span>
    </h1>

    <h6 className='font-light text-pink-700 text-center mt-16'>Feel Free to contact - <span className='text-black'>(+91)-9998003879</span></h6>
    </div>
    </div>
    <hr className='mt-10 border border-pink-100' />
    <h6 className='font-light text-pink-700 text-center mt-16 flex-col'>@copyright 2024-2025 All right reserved<span className='text-black'>copyright section</span></h6>

    </section>
  )
}
