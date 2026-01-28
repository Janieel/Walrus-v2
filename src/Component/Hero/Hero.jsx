import React from 'react'
import hero from "../../assets/Icons/Hero_Walrus.svg"
import files from "../../assets/Icons/files.svg"
import fold from "../../assets/Icons/folder.svg"
import coin from "../../assets/Icons/coin1.svg"
import lap from "../../assets/Icons/laptop.svg"

const Hero = () => {
  return (
    <div>
      <div className='bg-blue-300 h-10 flex justify-center items-center '>
        <p className='hover:underline text-[0.9rem]'> walrus is the developer platform that enables you to monetize and verify your data</p> 
      </div>
       
      <div className='bg-gradient-to-r from-[#160D38] to-[#354fe3] h- w-full'>
          <div className=' flex flex-col  justify-center items-center  '>
                <p className='text-white text-center  font-extralight text-[5rem] leading-tight tracking-wide '>Enabling Data Markets</p> 
                <span className='text-teal-300  text-center  w-full  font-normal text-[6rem] leading-tight tracking-wide -mt-8 '>for the AI Era</span>
          </div>
          <p className=' h-10 text-center text-[1.2rem] text-white font-semibold'> Walrus is Where the World's data becomes <span className='text-purple-300'>reliable,valuable</span> and <span className='text-purple-300'>governable</span>.</p>
          <div className='flex justify-center gap-10 '>
              <button className='h-10 w-40 bg-teal-300 rounded-[5px]'> Use Wal </button>
              <button className='h-10 w-40 bg-teal-300 rounded-[5px]'> Read Docs</button>
          </div>
          <div className='bg-gradient-to-r from-[#160D38] to-[#354fe3] h-98  w-full'> 
                 <div className="absolute inset-0 opacity-40">
                  <div className="absolute bottom-0 left-0 w-full h-40
                    bg-[linear-gradient(90deg,transparent_0%,transparent_10%,rgba(168,85,247,0.45)_10%,rgba(168,85,247,0.45)_20%,transparent_20%,transparent_30%,rgba(168,85,247,0.45)_30%,rgba(168,85,247,0.45)_75%,transparent_45%,transparent_100%)]
                    bg-repeat-x
                    bg-[length:200px_100%]
                  " />
                </div>
                <img className='h-101 ml-49  relative -top-3  ' src={hero} alt="" />
          </div>

           
          <div className=' h-30 px-5 bg-white'>
            <p className='flex items-center justify-center text-[4rem] border-x  h-full '> Who's building on Walrus?</p>

              {/* positioned elements */}
             <img src={files} alt="" className='h-35 relative -top-60 left-250 translate-x-10 rotate-50' />        
              <img src={fold} alt="" className='h-40 relative -top-150 left-10  transform-3d rotate-45 ' />
              
              
              <img src={coin} alt=""
               className='h-40 relative -top-200 
                translate-x-80  
                   animate-[bounce_7s_ease-in-out_infinite] rounded-[100%]
               ' />

               <img src={lap} alt="" className='h-30 relative -top-240 left-220  transform-3d rotate-50 ' />
              
          </div>
      </div> 
          
        
    </div>
  )
}

export default Hero