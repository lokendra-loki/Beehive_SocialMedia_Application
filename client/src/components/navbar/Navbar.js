import React, { useState } from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'




function Navbar() {





    return (
        <div className='navbar'>

            <img src="/assets/logo.svg" alt="" className="navbarLogo" />

            <div className="navbarLinks">
                <span className='navLink'>Home</span>
                <span className='navLink'>About </span>
                <span className='navLink'  >Contact</span>

                <span className='navLink'>Blog</span>

                {/* <div className="blogDropdown">
                    <span className='dropDownNavLink'>Read Blogs</span>
                    <span className='dropDownNavLink'>Write Blogs </span>
                </div> */}






                <Link to="/jobSearch" className='link'>
                    <span className='navLink'>Jobs</span>
                </Link>



            </div>

            <div className="navSearchCon">
                <SearchIcon className="navSearchIcon" />
                <input type="text" className="navSearchInput" placeholder='Type Search Word' />
            </div>

            <div className="navbarButtons">

                <Link to="/register">
                    <button className="navbarButton">Sign Up</button>
                </Link>

                <Link to="/login">
                    <button className="navbarButton  navbarButton1">Log In</button>
                </Link>
            </div>
        </div>

    )
}

export default Navbar