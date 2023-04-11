import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/eco-logo.png";
import { Link } from "react-router-dom";
import user from "../../assets/images/user-icon.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = parseInt(
    cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" width={30} /> <span>Multimart</span>
        </div>

        <div>
          <ul className={`nav__menu ${isOpen ? "nav__menu open" : ""}`}>
            <li>
              <span className="close" onClick={handleCloseMenu}>
                <i className="ri-close-line"></i>
              </span>
            </li>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/shop"> Shop</Link>
            </li>
            <li>
              {" "}
              <Link to="/cart" className="cart">
                {" "}
                Cart{" "}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="nav__user">
            <li>
              <Link to="/cart">
                <i className="ri-shopping-cart-line"></i>
              </Link>
              <div className="circle">
                <span className="cantidad"> {totalItems}</span>
              </div>
            </li>
            <li className="menu" onClick={handleMenuClick}>
              <i className="ri-menu-3-line"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
