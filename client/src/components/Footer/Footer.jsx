import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText ftxt">
            N & R Star is one of the largest UAE based full-service real estate{" "}
            <br />
            and property management company. We offer expertise in the <br />
            marketing and sale of a wide range of properties, including <br />
            residential real estate, farms and lifestyle blocks, as well as{" "}
            <br /> commercial and industrial properties that we hope may
            interest you.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">43rd floor, Vision Tower, Business Bay, Dubai</span>
          <div className="flexCenter f-menu">
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
          </div>
          <span className="secondaryText paddings">Copyright@2023N&RSTAR</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
