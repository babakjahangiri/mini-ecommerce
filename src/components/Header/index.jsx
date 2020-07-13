import React from "react";
import "./header.scss";

import WatchStoreLogo from "./../../images/wslogo.svg";
import cartIcon from "../../images/cart-ico.svg";
import { MiniCartItem } from "./../../components";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={WatchStoreLogo} alt="watch store logo" />
      </div>
      <div className="right-menu">
        <div className="cart-small">
          <img src={cartIcon} alt="cart" />
          <MiniCartItem />
        </div>
      </div>
    </header>
  );
};

export default Header;
