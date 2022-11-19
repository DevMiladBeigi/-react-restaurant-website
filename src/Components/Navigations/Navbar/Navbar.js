import React,{useState} from "react";
import "./Navbar.css";
import  ReorderIcon  from "@material-ui/icons/Reorder";

// const Navbar = (props) => {
//   return (
//     <div class="menu-container">
//       <div class="menu">
//         <span className="logo" ><a  href="#">Foodie</a></span>
//         <div class="menu-nav"><a href="#">Menu</a></div>
//         <div class="deals"><a href="#">Our Deals</a></div>
//         <div class="categories"><a href="#">Categories</a></div>
//         <div class="restaurants"><a href="#">Restaurants</a></div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const[showLinks,setShowLinks]=useState(false)
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="logo">
          <a href="#">Foodio</a>
        </div>
      </div>
      <div className="rightSide">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="#">Menu</a>
          <a href="#">Our Deals</a>
          <a href="#">Categories</a>
          <a href="#">Restaurants</a>
        </div>
        <button onClick={()=>setShowLinks(!showLinks)}><ReorderIcon/></button>
      </div>
    </div>
  );
};
export default Navbar;
