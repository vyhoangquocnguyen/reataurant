import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext"> Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 123 343 3531</p>
          <p className="p__opensans">+1 123 343 3531</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer logo" />
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img
            src={images.spoon}
            alt="sppon"
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext"> Working Hours</h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">8AM - 8PM</p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">7AM - 11PM</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">{year} Gericht. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
