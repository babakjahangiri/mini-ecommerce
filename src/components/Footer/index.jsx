import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="font-default">
          <ul>
            <li>Products</li>
            <li>ShoppingCart</li>
            <li>About us</li>
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
          <div className="text-right">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
