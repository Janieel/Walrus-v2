import React from 'react'
import logo from "../../assets/Icons/logo.svg"
import Navdrop from '../Navdrop/Navdrop'


const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-white'>
        <div className='h-20 w-full  grid grid-cols-3  '>
           <div>
              <img src={logo} alt="logo" className='h-11 ml-10  mt-5'/>
           </div>
            <div className=' px-10 pt-5'>
               <Navdrop/>
           </div>
           <div className='flex justify-end items-center pr-10'> 
               <button className='w-30 h-8 bg-teal-300 rounded-[5px] '>READ DOCS</button>
           </div>
        </div>  
    </div>
  )
}

export default Navbar