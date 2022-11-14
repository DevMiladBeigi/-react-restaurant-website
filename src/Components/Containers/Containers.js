import React from "react";
import Description from "../Descriptions/Descriptions";
import Background from "../Background/Background";
import Line from "../Line/Line";
import "./Containers.css";

const Containers = () => {
  return (
    <div className="Containers">
      <Line/>
      <Description />
      <Background />
    </div>
  );
};

export default Containers;
