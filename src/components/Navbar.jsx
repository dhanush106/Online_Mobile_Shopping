import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(){
    return (
    <div className='navbar'>
        <ul>
            <NavLink to='/' className="navlinks">
                <p>HOME</p>
            </NavLink>
            <NavLink to='/collections' className="navlinks">
                <p>Collections</p>
            </NavLink>
            <NavLink to='/about' className="navlinks">
                <p>About</p>
            </NavLink>
            <NavLink to='/contact' className="navlinks">
                <p>Contact</p>
            </NavLink>
        </ul>
    </div>
    )
}

export default Navbar;
