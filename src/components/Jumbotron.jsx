import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import IphoneHand from "../assets/images/iphone-hand.png";

function Jumbotron() {
  const handleLearnMore = () => {
    const element = document.querySelector(".sound-section");
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img src={Iphone} className="logo" alt="iPhone 14 pro" />
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. for 24 mo. or $999 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={IphoneHand} alt="iPhone" />
    </div>
  );
}

export default Jumbotron;
