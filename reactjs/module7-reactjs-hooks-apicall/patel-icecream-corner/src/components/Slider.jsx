import React from 'react'
import sliderimg from '../assets/images/banner-big-cone.png'
import sliderimg1 from '../assets/images/card-seven-img.png'
export default function Slider() {
  return (
    <section id='icecream-slider' className='container-fluid w-full p-5 flex flex-row'>
     <div className='icecream-slider-text mt-2 w-1/2'>
     <h1 className='text-6xl mt-16 ms-10'> <span className='text-amber-400 text-7xl'>Ice cream  <br /> Made with <br /></span> <span className='text-pink-700'>Passion</span></h1>

     <button className='text-xl rounded-2xl bg-amber-600 p-3 w-40 ms-10 mt-10 text-white' type='button'>Products ? <span className='bi bi-caret-right'></span></button>

     <button className='text-xl rounded-2xl bg-amber-600 p-3 w-50 ms-10 mt-10 text-white' type='button'>How it Made <span className='bi bi-caret-right'></span></button>
     <div className='flex flex-row p-5 mt-16'>
     <div className='w-1/2'>
      <img src={sliderimg1} alt='' />
     </div>

     <div className='w-1/2'>
      <p className='justify-evenly text-center mt-20'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
     </div>
    </div>
     </div>
     <div className='icecream-slider-img mt-2'>
     <img src={sliderimg} alt='logo' className='img-fluid w-3/4' />
     </div>
     <div className='icecream-slider-notifications mt-2 ms-16'>
      <h1 className='text-6xl text-pink-700 font-extrabold mt-20'>16 <br /> <span className='font-light'>cafe</span></h1>
      <h1 className='text-6xl text-pink-700 font-extrabold mt-20'>120 <br /> <span className='font-light'>Food Trucks</span></h1>
     </div> 

    </section>
  )
}
