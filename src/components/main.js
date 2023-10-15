import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import SunAnimation from "../utils/SunAnimation";
function Main() {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <Navbar></Navbar>
    </div>
  );
}

export default Main;
