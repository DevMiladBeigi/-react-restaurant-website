import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div class="menu-container">
      <div class="menu">
        <span className="logo" ><a  href="#">Foodie</a></span>
        <div class="menu-nav"><a href="#">Menu</a></div>
        <div class="deals"><a href="#">Our Deals</a></div>
        <div class="categories"><a href="#">Categories</a></div>
        <div class="restaurants"><a href="#">Restaurants</a></div>
      </div>
    </div>
  );
};

export default Navbar;
