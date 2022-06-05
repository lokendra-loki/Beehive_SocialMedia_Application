import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <Link to={"/"} className="link">
        <img src="/assets/logo.svg" alt="" className="navbarLogo" />
      </Link>

      <div className="navbarLinks ">
        <NavLink to="/" activeclassname="active" className="link">
          <div className="navLinkCon ">
            <span className="navLink">Home</span>
          </div>
        </NavLink>

        <NavLink to="/blogs" activeclassname="active" className="link">
          <div className="navLinkCon">
            <span className="navLink">Blogs</span>
          </div>
        </NavLink>

        <NavLink to="/jobSearch" activeclassname="active" className="link">
          <div className="navLinkCon">
            <span className="navLink">Jobs</span>
          </div>
        </NavLink>

        <NavLink to="/settings" activeclassname="active" className="link">
          <div className="navLinkCon ">
            <span className="navLink">Settings</span>
          </div>
        </NavLink>

        <NavLink
          to={`/profile/${user?._id}`}
          activeclassname="active"
          className="link"
        >
          <div className="navLinkCon">
            <span className="navLink">Profile </span>
          </div>
        </NavLink>

        <NavLink to="/bookmark" activeclassname="active" className="link">
          <div className="navLinkCon">
            <span className="navLink">Saved </span>
          </div>
        </NavLink>
      </div>

      <div className="navRight">
        {/* <div className="navSearchCon">
          <SearchIcon className="navSearchIcon" />
          <input
            type="text"
            className="navSearchInput"
            placeholder="Type Search Word"
          />
        </div> */}

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
