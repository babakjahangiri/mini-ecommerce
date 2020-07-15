import React, { useState } from "react";
import { cartItemsCountContext } from "./../../context";
import { addToCart, getItemsCount, deleteCartItem } from "../../functions";
import removeIcon from "./../../images/remove.svg";
import "./cartrow.scss";

const CartRow = (cartProducts) => {
  console.log(cartProducts);
  function removeItemHanlder(pid) {
    deleteCartItem(pid);
  }

  function editCartHanler(pid) {}

  return (
    <div className="shoppingcart-row">
      <div className="shoppingcart-product-image">
        <img src="" alt="" />
      </div>

      <div className="shoppingcart-product-name">
        <h2>{cartProducts.qty}</h2>
        <h5>£{cartProducts.id}</h5>
      </div>

      <div className="shoppingcart-product-qty">
        <input
          type="number"
          id="qty"
          name="qty"
          min="1"
          max="99"
          value={cartProducts.qty}
          onChange={() => editCartHanler()}
        />
      </div>
      <div className="shoppingcart-product-price">
        <h3>£ 140 </h3>
      </div>
      <div className="shoppingcart-product-remove">
        <img
          src={removeIcon}
          alt="remove"
          onClick={() => {
            removeItemHanlder(3);
          }}
        />
      </div>
    </div>
  );
};

export default CartRow;
