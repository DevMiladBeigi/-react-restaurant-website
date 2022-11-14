import React from "react";
import "./Descriptions.css";
const Description = () => {
  return (
    <div className="description-container">
      <div className="description-title">Healthy Diet Everyday</div>
      <div className="description-body">
        Order today and receive your package tomorrow
      </div>
      <div className="description-btn">
        <div className="description-menu-btn">
          <button className="description-menu-btn-view">View Menu</button>
        </div>
        <div className="description-table-btn">
          <button className="description-table-btn-book">Book a Table</button>
        </div>
      </div>
      <div className="description-meal">
        <div className="meal">
          <h3>Breakfast</h3>
          <h5>9:00 am - 11:00 am</h5>
          <div className="food">
          </div>
        </div>
      </div>
      {/* <div className="arrows">
        <img src="./social-icons.svg" alt=""></img>
        slm
       </div> */}
    </div>
  );
};

export default Description;
