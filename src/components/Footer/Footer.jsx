import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__title  ">
          <h4>Multimart</h4>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            veritatis.
          </span>
        </div>

        <div className="footer__card">
          <h4>Top Categories</h4>
          <ul className="footer__menu">
            <li>
              <span>Mobile Phones</span>
            </li>
            <li>
              <span>Modern Sofa</span>
            </li>
            <li>
              <span>Arm Chair</span>
            </li>
            <li>
              <span>Smart Watches</span>
            </li>
          </ul>
        </div>

        <div className="footer__card">
          <h4>Useful Links</h4>
          <ul className="footer__menu">
            <li>
              <span>Shop</span>
            </li>
            <li>
              <span>Cart</span>
            </li>
            <li>
              <span>Login</span>
            </li>
            <li>
              <span>Privacy Policy</span>
            </li>
          </ul>
        </div>

        <div className="footer__card">
          <h4>Contact</h4>
          <ul className="footer__menu">
            <li>
              <span>
                <i className="ri-map-pin-2-line"></i> 4321 Juan B. Justo,
                <br />
                <span>Mar del plata, Argentina</span>
              </span>
            </li>
            <li>
              <span>
                <i className="ri-phone-line"></i> 2234660949
              </span>
            </li>
            <li>
              <span>
                <i className="ri-mail-line"></i> axel_cadona@hotmail.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy">
        <span>
          Copyright 2023 developed by Axel Cadona. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
