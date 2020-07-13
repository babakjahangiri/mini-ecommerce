import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

import WatchStoreLogo from "./../../images/wslogo.svg";
import cartIcon from "../../images/cart-ico.svg";
import { MiniCartItem } from "./../../components";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" exact>
          <img src={WatchStoreLogo} alt="watch store logo" />
        </NavLink>
      </div>
      <div className="right-menu">
        <div className="cart-small">
          <NavLink to="/cart">
            <img src={cartIcon} alt="cart" />
          </NavLink>
          <NavLink to="/cart">
            <MiniCartItem />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
