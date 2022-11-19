import React from "react";
import Navbar from "./Components/Navigations/Navbar/Navbar";
import  Containers  from './Components/Containers/Containers'
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Containers/>
    </React.Fragment>
  );
};

export default App;
