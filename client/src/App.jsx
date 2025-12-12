import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrder';

function App() {
 
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<MyOrders/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
