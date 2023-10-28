import React, { useEffect, useState } from "react";

const SunriseAnimation = () => {
  const [sunLeft, setSunLeft] = useState(-10); // Starting position of the sun
  const [shineOpacity, setShineOpacity] = useState(0);
  const [sloganRight, setSloganRight] = useState(0); // Starting position of the slogan

  useEffect(() => {
    const sunAnimation = setInterval(() => {
      if (sunLeft < 20) {
        setSunLeft(sunLeft + 0.2);
        if (sunLeft >= 0) {
          setShineOpacity(0.4);
        }
      } else {
        clearInterval(sunAnimation);
      }
    }, 50);

    setTimeout(() => {
      setSloganRight(0);
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-300 to-blue-600 relative">
      <div
        className="w-24 h-24 bg-yellow-400 rounded-full absolute -left-6 transition-all ease-in-out duration-300"
        style={{ left: `${sunLeft}%` }}
      ></div>
      <div
        className="w-full h-full bg-yellow-400 opacity-0 absolute transition-opacity ease-in-out duration-300"
        style={{ opacity: shineOpacity }}
      ></div>
      <div
        className="text-4xl font-bold text-white absolute right-4"
        style={{ right: `${sloganRight}%` }}
      >
        We Cure the Best Diseases
      </div>
    </div>
  );
};

export default SunriseAnimation;
