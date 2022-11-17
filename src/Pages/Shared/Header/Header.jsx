import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/Authcontext";
import "./Header.css";

const Header = () => {
  const {user , logOut} = useContext(UserContext);
  const logoutHandeler = ()=>{
    logOut()
    .then(()=>{
      toast.success("Log out successfully")
    })
  }
  const menuItem = (
    <>
      <li>
        <Link  to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/contract">Contract Us</Link>
      </li>
      {
        user?.uid ? 
        <>
       <li> <button>{user?.displayName}</button></li>
       <li> <button onClick={logoutHandeler }>Logout</button></li>
        </>
        :
        <>
        <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
        </>


      }
      
    </>
  );
  return (
    <div className="navbar flex justify-between">
      <div className="navbar-start w-full mobile_menu ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-1 shadow right-3 bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Doctor Portal
          </a>
        </div>
      </div>
      <div className="navbar-center hidden md:flex ">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
    </div>
  );
};

export default Header;
