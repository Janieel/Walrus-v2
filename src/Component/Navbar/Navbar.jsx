import React from 'react'
import logo from "../../assets/Icons/logo.svg"
import Navdrop from '../Navdrop/Navdrop'
import ham from "../../assets/Icons/menu-burger.svg"
import { div } from 'framer-motion/client'


const Navbar = () => {
  return (
    
    <div className='sticky top-0 z-50 bg-white'>
        <div className='h-20 w-full flex  lg:grid grid-cols-3 justify-between lg:justify-normal '>
           <div>
              <img src={logo} alt="logo" className='h-11 ml-2 md:ml-10  mt-5'/>
           </div>
           <div className='flex justify-center items-center lg:hidden  w-20 '>
               <div className=' flex justify-center items-center h-12 w-12 border border-black rounded-[6px]'>
                   <img src={ham} className=' justify-center items-center h-5' alt="" />
               </div>
           </div>
            <div className=' hidden lg:flex justify-center items-center w-full'>
               <Navdrop/>
           </div>
           <div className='lg:flex justify-end items-center pr-10 hidden  '> 
               <button className='w-30 h-8 bg-teal-300 rounded-[5px] '>READ DOCS</button>
           </div>
        </div>  
    </div>
  )
}

export default Navbar