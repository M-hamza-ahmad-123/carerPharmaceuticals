import React from "react";
import { SunriseAnimation } from "../../utils/SunAnimation";
import WovenImageList from "../WovenImageList";

function Home() {
  const divStyle = {
    width: "100%", // Make the div full width
    height: "100vh", // Make the div full height of the viewport
    backgroundColor: "lightsteelblue", // Light slate background color
  };

  return (
    <>
      <div style={divStyle}>
        {/* <SunriseAnimation></SunriseAnimation> */}
        Hamza The Great
      </div>
      <WovenImageList></WovenImageList>
    </>
  );
}

export default Home;
