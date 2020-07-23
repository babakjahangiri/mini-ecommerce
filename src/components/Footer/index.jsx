import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="font-default">
          <ul>
            <li>
              <Link to={`/`}>Products</Link>
            </li>
            <li>
              <Link to={`/cart`}>Shopping Cart</Link>
            </li>
            <li>
              <Link to={`#`}>About us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-down">
        <div>
          <div className="text-left">
            <p className="font-default">
              Designed and Developed by Babak Jahangiri
            </p>
          </div>
          <div className="social text-right">
            <a href="http://www.facebook.com">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="http://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="http://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
