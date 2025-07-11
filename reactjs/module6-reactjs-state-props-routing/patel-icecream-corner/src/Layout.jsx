import React,{ useState,useEffect} from 'react'
import loaderimg from '../src/loader.gif'
import Header from './components/Header';
import Slider from './components/Slider';
import Content from './components/Content';
import Footer from './components/Footer';
export default function Layout() {
    // destructuring of data
    const[loader,setLoader]=useState(true);
    // create a function or hooks of useEffect to load promises for loader
    useEffect(()=>{
    //call a function for loader to load for a time
    setTimeout(()=>{
       setLoader(false);
    },3000)
    });
  return (
     loader ?
    <>
      <div className='loader-app'>
        <img src={loaderimg} alt='loader-photo' />
      </div>   
    </> 
     :
    <div className='container-fluid'>
    <Header />
    <Slider />
    <Content />
    <Footer />
    </div>
  )
}
