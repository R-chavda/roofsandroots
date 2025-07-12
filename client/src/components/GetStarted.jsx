import React from "react";
import { Link } from "react-router-dom";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Roof&Roots</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <Link to="/contact">Get started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
