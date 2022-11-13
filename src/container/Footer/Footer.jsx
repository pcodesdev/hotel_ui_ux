import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-links_contact">Contact Us</h1>
          <p className="p__opensans">Kirinyaga Bussiness Center, Room No B47</p>
          <p className="p__opensans">+254 702 897 412</p>
          <p className="p__opensans">+254 798 000 768</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.logo1} alt="footer_logo" />
          <p className="p__opensans">
            “Your most unhappy customers are your greatest source of learning.”
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiInstagram />
            <FiTwitter />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-links_contact">Working Hours</h1>
          <p className="p__opensans">Monday - Friday</p>
          <p className="p__opensans">8:00 Am - 7:00 Pm</p>
          <p className="p__opensans">Weekend</p>
          <p className="p__opensans">9:00 Am - 3:00 Pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">
          &copy; {year} Peter's Cafe. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
