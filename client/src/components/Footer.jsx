import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <Link to="/aboutus">
            <img src="/blacklogo.png" alt="logo" width={110} />
          </Link>
          <span className="secondaryText">
            Credits: Roof&Roots <br />
            By Rahul and friends
          </span>
        </div>

        <div className="flexColStart f-right">
          <Link to="/aboutus">
            <span className="primaryText">Information</span>
          </Link>
          <span className="secondaryText">Bhavnagar,Gujarat</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>

            <Link to="/aboutus">
              {" "}
              <span>About Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
