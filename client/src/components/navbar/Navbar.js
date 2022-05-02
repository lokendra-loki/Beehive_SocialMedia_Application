import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    return (
        <div className='navbar'>
            <img src="/assets/logo.svg" alt="" className="navbarLogo" />

            <div className="navbarLinks">
                <span className='navLink'>Home</span>
                <span className='navLink'>About </span>
                <span className='navLink'>Contact</span>
                <span className='navLink'>Forum</span>
                <span className='navLink'>Jobs</span>
            </div>

            <div className="navSearchCon">
                <SearchIcon className="navSearchIcon" />
                <input type="text" className="navSearchInput" placeholder='Type Search Word' />
            </div>

            <div className="navbarButtons">
                <button className="navbarButton">Sign Up</button>
                <button className="navbarButton  navbarButton1">Log In</button>
            </div>
        </div>

    )
}

export default Navbar