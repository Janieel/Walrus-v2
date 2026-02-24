import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

export const App = () => {
  return (
    <div>
       <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>

    </div>
  )
}
export default App

