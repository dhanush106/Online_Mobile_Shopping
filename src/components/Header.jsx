import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Header = () => {
    const {getCartCount} = useContext(ShopContext);
  return (
    <div className='header'>
        <Link to="/" className='Logo'>
            <div className="logo">
                <h1>Mobiles Shop</h1>
            </div>
        </Link>
    <div className="details">
            <div className="fav icon">
                <i class="fa-solid fa-heart"></i>
                <p>Favourites</p>
            </div>
            <div className="cart icon">
                <Link to="/cart" className='cart-link'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>Cart {getCartCount()} </p>
                </Link>   
            </div>
            <div className="profile-icon">
                <p><i class="fa-solid fa-user"></i></p>
            </div>
        </div>
    </div>
  )
}

export default Header
