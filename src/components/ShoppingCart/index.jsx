import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartItemsCountContext } from "./../../context";
import { CartRow } from "./../../components";
import {
  getCartProducts,
  deleteCartItem,
  getItemsCount,
} from "./../../functions";

import "./shoppingcart.scss";

const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState(getCartProducts());

  //for mini basket items count
  const { itemsCount, setItemsCount } = useContext(cartItemsCountContext);

  function removeItemHanlder(pid) {
    setCartProducts(deleteCartItem(pid));
    setItemsCount(getItemsCount());
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
        <div className="shoppingcart-footer">
          <div>
            <button>Continue Shopping</button>
          </div>
          <div>
            <button>Checkout</button>
            <p>FREE SHIPPING AND RETURNS</p>
          </div>
        </div>
      </div>
      {/* <p onClick={() => deleteItemHandler(6)}>Delete a Product</p> */}
    </section>
  );
};

export default ShoppingCart;
