import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";

function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  // const [currentUser, setCurrentUser] = useState({});
  // useEffect(() => {
  //   const userDetailsOnly = async () => {
  //     try {
  //       const res = await axios.post("/userDetails/get", { userID: user._id });
  //       console.log(res.data);
  //       setCurrentUser(res.data[0]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   userDetailsOnly();
  // }, [user._id]);

  //Logout Handler
  // const handleLogout = (e) => {
  //   dispatch({ type: "LOGOUT" });
  //   navigate("/");
  // };

  return (
    <div className="navbar">
      <img src="/assets/logo.svg" alt="" className="navbarLogo" />

      <div className="navbarLinks">
        <Link to="/" className="link">
          <span className="navLink">Home</span>
        </Link>

        <span className="navLink">About </span>
        <span className="navLink">Contact</span>

        <Link to="/blogs" className="link">
          <span className="navLink">Blog</span>
        </Link>

        <Link to="/jobSearch" className="link">
          <span className="navLink">Jobs</span>
        </Link>
      </div>

      <div className="navSearchCon">
        <SearchIcon className="navSearchIcon" />
        <input
          type="text"
          className="navSearchInput"
          placeholder="Type Search Word"
        />
      </div>

      <div className="navbarButtons">
        <Link to="/register">
          <button className="navbarButton">Sign Up</button>
        </Link>

        <Link to="/login">
          <button className="navbarButton  navbarButton1">Log In</button>
        </Link>
      </div>

      <Link to="/profile">
        <img
          // src={currentUser.profilePic}
          alt=""
          className="navbarCircleAvatar"
        />
      </Link>

      <button className="navbarLogOutBut">
        <LogoutIcon />
        <span className="logOutSpan">Logout</span>
      </button>
    </div>
  );
}

export default Navbar;
