import React from "react";
import { FiTwitter, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__social-icons">
        <FiTwitter />
        <FiFacebook />
        <FiInstagram />
        <FiYoutube />
      </div>
      <div className="footer__copyright">
        &copy; 2017 by Economiphones. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
