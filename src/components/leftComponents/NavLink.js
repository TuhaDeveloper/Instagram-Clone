import React from 'react'
import './navLink.css'
const NavLink = ({ navIcon, iconText }) => {
    return (
        <div className='navIcon'>
            {navIcon}
            <p>{iconText}</p>
        </div>
    )
}

export default NavLink