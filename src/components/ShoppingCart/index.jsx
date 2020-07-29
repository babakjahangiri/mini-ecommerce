import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartItemsCountContext, cartTotalContext } from "./../../context";
import { CartRow } from "./../../components";
import {
  getCartProducts,
  deleteCartItem,
  getItemsCount,
  getCartTotal,
} from "./../../functions";

import "./shoppingcart.scss";

const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState(getCartProducts);

  //for mini basket items count
  const { setItemsCount } = useContext(cartItemsCountContext);
  const { totalCart, setTotalCart } = useContext(cartTotalContext);

  function removeItemHanlder(pid) {
    setCartProducts(deleteCartItem(pid));
    setItemsCount(getItemsCount());
    setTotalCart(getCartTotal());
  }

  function continueShoppingHandler() {
    window.open(`${process.env.PUBLIC_URL}/`);
  }

  function checkoutHandler() {
    let yourname = window.prompt("Please Enter your name: ");

    if (yourname != null) {
      window.open(`${process.env.PUBLIC_URL}/checkout/${yourname}`);
    }
  }

  return (
    <section className="shoppingcart-container">
      <div className="breadcrumbs">
        <p>
          <NavLink to="/" exact>
            HOME &nbsp;&gt;&nbsp;
          </NavLink>
        </p>
        <p> Products &nbsp;&gt;&nbsp; </p>
        <p> Shopping Cart</p>
      </div>
      <div className="shoppingcart">
        <div className="shoppingcart-header">
          <ul>
            <li>Products</li>
            <li>Quantity</li>
            <li>Price</li>
            <li></li>
          </ul>
        </div>

        <div className="shoppingcart-body">
          {cartProducts.map((product, index) => (
            <CartRow
              cartProduct={product}
              key={product.id}
              removeItemHanlder={removeItemHanlder}
            />
          ))}
        </div>
        <div className="shopping-cart-totalprice">
          <div> </div>
          <div> </div>
          <div>Total Price :</div>
          <div>£ {totalCart}</div>
          <div></div>
        </div>

        <div className="shoppingcart-footer">
          <div>
            <button
              className="btn-shopping"
              onClick={() => continueShoppingHandler()}
            >
              Continue Shopping
            </button>
          </div>
          <div>
            <button className="btn-checkout" onClick={() => checkoutHandler()}>
              Checkout
            </button>
            <p>FREE SHIPPING AND RETURNS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
