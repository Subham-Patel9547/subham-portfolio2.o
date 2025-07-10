import React, { useEffect, useState } from "react";

const WelcomeScreen = ({ onFinish = () => {} }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500);
    const finishTimer = setTimeout(onFinish, 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  // Flicker effect letter by letter
  const renderFlickeringWord = (word) =>
    word.split("").map((char, i) => (
      <span
        key={i}
        className={i % 2 === 0 ? "flicker" : "fast-flicker"}
        style={{ margin: "0 0px" }}
      >
        {char}
      </span>
    ));

  return (
    <div
      className={`final-div transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="sign w-full  text-center flex flex-col items-center space-y-2">
        <div className="fast-flicker -mb-2 lg:-mb-4 text-3xl lg:text-6xl capitalize">Hi, I'm Subham</div>
        <div className="text-4xl lg:text-7xl capitalize">{renderFlickeringWord("Welcome To My")}</div>
        <div className="-mt-5 lg:-mt-8 text-5xl lg:text-8xl capitalize">{renderFlickeringWord("Portfolio Website")}</div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
