import React from 'react'
import hero from "../../assets/Icons/hero_walrus.svg"
import files from "../../assets/Icons/files.svg"
import fold from "../../assets/Icons/folder.svg"
import coin from "../../assets/Icons/coin1.svg"
import lap from "../../assets/Icons/laptop.svg"

const Hero = () => {
  return (
    <div>
      <div className='bg-blue-300  flex justify-center items-center  '>
        <p className='hover:underline text-[0.9rem] text-center'> walrus is the developer platform that enables you to monetize and verify your data</p> 
      </div>
       
      <div className='bg-gradient-to-r from-[#160D38] to-[#203088]  w-full sm:px-10 lg:px-0'>
          <div className=' flex flex-col  justify-center items-center  '>
                <p className='text-white text-center font-extralight  sm:font-light text-[2.5rem] sm:text-[3rem] md:text-[5rem] leading-tight tracking-wide mt-5 '>Enabling Data Markets</p> 
                <span className='text-teal-300  text-center  w-full  font-normal text-[3rem]  sm:text-[4rem] md:text-[6rem] leading-tight tracking-wide md:-mt-8 sm:-mt-6 -mt-3 '>for the AI Era</span>
          </div>
          <p className=' pb-10 text-center text-[1rem] md:text-[1.2rem] text-white font-extralight mx-5 '> Walrus is Where the World's data becomes <span className='text-purple-300'>reliable,valuable</span> and <span className='text-purple-300'>governable</span>.</p>
          <div className='flex justify-center gap-10  -mt-2 '>
              <button className='h-10 w-40 bg-teal-300 rounded-[5px]'> Use Wal </button>
              <button className='h-10 w-40 bg-teal-300 rounded-[5px]'> Read Docs</button>
          </div>
       </div>    
      
   <div className='relative bg-gradient-to-r from-[#160D38] to-[#203088] h-[12.5rem] sm:h-[15.25rem] md:h-[18.5rem] lg:h-[18.5rem] xl:h-[24.5rem] w-full overflow-hidden'> 
    
            {/* Gradient stripe - always at bottom */}

            <div className="absolute bottom-0 left-0 right-0 w-full opacity-40
                            h-24 sm:h-28 md:h-32 lg:h-48 xl:h-40
                            bg-[linear-gradient(90deg,transparent_0%,transparent_10%,rgba(168,85,247,0.45)_10%,rgba(168,85,247,0.45)_20%,transparent_20%,transparent_30%,rgba(168,85,247,0.45)_30%,rgba(168,85,247,0.45)_75%,transparent_45%,transparent_100%)]
                            bg-repeat-x
                            bg-[length:120px_100%] sm:bg-[length:150px_100%] md:bg-[length:170px_100%] lg:bg-[length:185px_100%] xl:bg-[length:200px_100%]
                            " />
            
            {/* Hero image */}
            <img 
                className='h-[16.75rem] sm:h-[17.5rem] md:h-80 lg:h-[20.5rem] xl:h-101 
                          mx-auto xl:ml-49 
                          relative -top-3 sm:-top-4 md:-top-6 lg:-top-8 xl:-top-3 xl:-left-6 lg:left-20
                          px-5 
                          ' 
                src={hero} 
                alt="" 
            />
        </div>

           
          <div className=' h-25 sm:h-30 px-5 bg-white'>
            <p className='flex items-center  justify-center text-[2rem] sm:text-[3rem]  md:text-[3.5rem] border-x  h-full '><span className=' text-center  '> Who's building on Walrus?</span></p>

              {/* positioned elements */}
             <img src={files} alt="" className='xl:h-35  h-15 relative xl:-top-60 xl:left-250 left-72 -top-45 translate-x-10 rotate-50
              sm:left-110 md:h-25 md:left-143 md:-top-55  lg:left-180
              '
              
             />   


              <img src={fold} alt="" className='xl:h-45 h-20 md:h-30 lg:h-35 md:left-20 relative -top-65 xl:-top-110 xl:left-20 left-2 md:-top-80 transform-3d rotate-45 ' />
              
              
              <img src={coin} alt=""
               className='xl:h-40 md:h-30 lg:h-35 relative md:-top-150 xl:-top-200 xl:right-20 h-25 -top-110 right-70
                translate-x-80 sm:-top-120 lg:right-30 lg:-top-160
                   animate-[bounce_7s_ease-in-out_infinite] rounded-[100%]
               ' />

               <img src={lap} alt="" className='md:h-25 xl:h-30 h-15 left-72   sm:left-120 sm:-top-140 ml-5 sm:ml-0 
                -top-130 relative md:-top-180 xl:-top-220   md:left-150 lg:left-200 xl:left-220   transform-3d rotate-50 
               
               ' />
              
          </div>
     </div>
   
        
    
  )
}

export default Hero