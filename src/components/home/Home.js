import React from "react";
import SunAnimation from "../../utils/SunAnimation";
import WovenImageList from "../WovenImageList";
import AboutUs from "../AboutUs";
import { Divider } from "@mui/material";
import Features from "../Features";

function Home() {
  const divStyle = {
    width: "100%", // Make the div full width
    height: "70vh", // Make the div full height of the viewport
    backgroundColor: "gray", // Light slate background color
  };

  return (
    <>
      <div style={divStyle}>
      <SunAnimation></SunAnimation>
      </div>
      <Features></Features>
      <WovenImageList></WovenImageList>
      <AboutUs></AboutUs>


    </>
  );
}

export default Home;
