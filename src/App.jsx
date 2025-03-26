import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Collections from './pages/Collections';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <ToastContainer />
      <header>
        <Header />
      </header>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path='/collections' element = {<Collections />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='/cart' element = {<Cart />}/>
        <Route path='/product/:productid' element = {<Product />}/>
        <Route path='/login' element = {<Login />}/>
        <Route path='/placeorder' element = {<PlaceOrder />}/>
        <Route path='/orders' element = {<Orders />}/>
      </Routes>
      <Navbar />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
