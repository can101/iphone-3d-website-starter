import React from "react";
import AnimatedLogo from "../assets/images/logo-animated.gif";

function Loader() {
  return (
    <div className="loader">
      <img src={AnimatedLogo} className="logo" alt="iphone loader" />
    </div>
  );
}

export default Loader;
