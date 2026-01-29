import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Hero from '../../Component/Hero/Hero'
import Info from '../../Component/Info/Info'
import Secure from '../../Component/Secure/Secure'



const Home = () => {
  return (
    <div>
         <Hero/>
         <Info/>
         <Secure/>
    </div>
  )
}

export default Home