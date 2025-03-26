import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(){
    return (
    <div className='navbar'>
        <ul>
            <NavLink to='/'>
                <p>HOME</p>
            </NavLink>
            <NavLink to='/collections'>
                <p>Collections</p>
            </NavLink>
            <NavLink to='/about'>
                <p>About</p>
            </NavLink>
            <NavLink to='/contact'>
                <p>Contact</p>
            </NavLink>
        </ul>
    </div>
    )
}

export default Navbar;
