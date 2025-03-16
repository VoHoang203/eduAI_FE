import React from 'react'
import { 
  FaHome, 
  FaBell, 
  FaComments, 
  FaShoppingCart, 
  FaStore,
  FaBookmark ,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiHeadCircuitLight } from "react-icons/pi"
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png"
import profile from "../assets/profile2.jpg"
import "../styles/homepage.css";
import { IoBarChartSharp } from "react-icons/io5";
export default function Header() {
  return (
    <header className="header">
      

        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="navbar-left">
          <div className="logo-container">
            <img src={logo} className="logo-image"  alt="Logo" />
          </div>
            <div className="search-container">
              <IoSearch className="search-icon" />
              <input type="text" placeholder="Tìm kiếm trên EduAI" className="search-input" />
            </div>
          </div>
          <div className="navbar-center">
            <Link to="/" className="nav-icon-container">
              <FaHome className="nav-icon" />
            </Link>
            <Link to="/ai-tools" className="nav-icon-container">
              <PiHeadCircuitLight className="nav-icon" />
            </Link>
            <Link to="/courses" className="nav-icon-container">
              <FaStore className="nav-icon" />
            </Link>
            <Link to="/ai-tools" className="nav-icon-container">
              <IoBarChartSharp className="nav-icon" />
            </Link>
            
            
            <div className="nav-icon-container">
              <FaBookmark className="nav-icon" />
            </div>
          </div>
          <div className="navbar-right">
          <div className="nav-icon-container">
              <FaBell className="nav-icon" />
              <span className="notification-badge">1</span>
            </div>
            <div className="nav-icon-container">
              <FaComments className="nav-icon" />
            </div>
            <div className="nav-icon-container">
              <FaShoppingCart className="nav-icon" />
            </div>
            <Link to="/profile" className="nav-icon-container">
              <div className="user-avatar">
                <img src={profile} alt="User"className="logo-image"  />
              </div>
            </Link>
          </div>
        </nav>
      </header>
  )
}
