import React, { useRef } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const navRef=useRef()
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <header>
      <h3>Foodio</h3>
      <nav ref={navRef}>
        <a href="#">Menu</a>
        <a href="#">Our Deals</a>
        <a href="#">Categories</a>
        <a href="#">Restaurants</a>
       
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
};

export default Navbar