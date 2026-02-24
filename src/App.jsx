import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

export const App = () => {
  return (
    <div>
       <Navbar/>
      <div style={{ paddingTop: 'calc(env(safe-area-inset-top) + 80px)' }}>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}
export default App

