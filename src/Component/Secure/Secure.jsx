import React from 'react'

const Secure = () => {
  return (
    <div>
       
     <div className=' h-20 px-5 border-x-'>
         <div className='h-full bg-white border-x'>  </div>
     </div>
     <div className=' h-20 px-5 bg-[#262525]'>
         <div className='h-full bg-[#262525] border-x'> </div>
     </div>
     <div className='h-50  bg-[#262525] '>
         <div className='bg-[#262525] h-50 grid grid-cols-3 '>
             <div className='col-span-2 border-r border-y bg-[#262525]  pl-5 '>
                <div className=' w-full h-50 border-l bg-[#262525] '> 
                    <p className='text-white  text-[2rem] mx-5'>SECURING SYSTEM <br /> FROM INPUT TO OUTPUT</p> 
                </div>
             </div>
             <div className='bg-[#262525] col-span-1 border-y pr-5'>
                <div className=' h-50 w-full bg-[#262525] border-r'></div>
             </div>
         </div>
     </div>
    </div>
  )
}

export default Secure