import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <img src="/assets/logo.svg" alt="" className="navbarLogo" />

      <div className="navbarLinks ">
        <NavLink to="/" activeclassname="active" className="link">
          <div className="navLinkCon ">
            <span className="navLink">Home</span>
          </div>
        </NavLink>

        <NavLink to="/blogs" activeclassname="active" className="link">
          <div className="navLinkCon">
            <span className="navLink">Blog</span>
          </div>
        </NavLink>

        <NavLink to="/jobSearch" activeclassname="active" className="link">
          <div className="navLinkCon">
            <span className="navLink">Jobs</span>
          </div>
        </NavLink>

        <NavLink to="/trending" activeclassname="active" className="link">
          <div className="navLinkCon ">
            <span className="navLink">Trending</span>
          </div>
        </NavLink>

        <NavLink to="/askQuery" activeclassname="active" className="link">
          <div className="navLinkCon">
            <span className="navLink">AskQuery </span>
          </div>
        </NavLink>

        <NavLink to="/about" activeclassname="active" className="link">
          <div className="navLinkCon">
            <span className="navLink">About </span>
          </div>
        </NavLink>
      </div>

      <div className="navRight">
        <div className="navSearchCon">
          <SearchIcon className="navSearchIcon" />
          <input
            type="text"
            className="navSearchInput"
            placeholder="Type Search Word"
          />
        </div>

        <Link to="/profile">
          <img
            src="/assets/profile.jpeg"
            alt=""
            className="navbarCircleAvatar"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
