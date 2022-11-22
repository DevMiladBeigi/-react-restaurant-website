import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";
import { FaBars, FaSlack, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  let menRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!menRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div ref={menRef}>
      <header>
        <h3>Foodio</h3>
        <nav className={showMenu ? "responsive_nav" : ""}>
          <a href="#">Menu</a>
          <a href="#">Our Deals</a>
          <a href="#">Categories</a>
          <a href="#">Restaurants</a>
        
        </nav>

        <button className="nav-btn" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Navbar;
