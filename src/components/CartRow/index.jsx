import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartItemsCountContext } from "./../../context";
import {
  updateCartItem,
  getProductStock,
  getItemsCount,
} from "../../functions";
import removeIcon from "./../../images/remove.svg";
import "./cartrow.scss";

const CartRow = ({ cartProduct, removeItemHanlder }) => {
  //for mini basket items count
  const { setItemsCount } = useContext(cartItemsCountContext);

  const [productData] = useState(getProductStock(cartProduct.id));
  const [productQty, setProductQty] = useState(cartProduct.qty);

  function editCartHanler(pid, qty) {
    setProductQty(qty);
    updateCartItem(pid, qty);
    setItemsCount(getItemsCount());
  }

  return (
    <div className="shoppingcart-row">
      <div className="shoppingcart-product-image">
        <Link to={"product/" + productData.id}>
          <img src={`images/${productData.image}`} alt="{productData.name}" />
        </Link>
      </div>

      <div className="shoppingcart-product-name">
        <Link to={"product/" + productData.id}>
          <h2>{productData.name}</h2>
          <h5>£ {productData.price}</h5>
        </Link>
      </div>

      <div className="shoppingcart-product-qty">
        <input
          type="number"
          id="qty"
          name="qty"
          min="1"
          max="99"
          value={productQty}
          onChange={(e) => editCartHanler(cartProduct.id, e.target.value)}
        />
      </div>
      <div className="shoppingcart-product-price">
        <h3>£ {productData.price * productQty}</h3>
      </div>
      <div className="shoppingcart-product-remove">
        <img
          src={removeIcon}
          alt="remove"
          onClick={() => {
            removeItemHanlder(cartProduct.id);
          }}
        />
      </div>
    </div>
  );
};

export default CartRow;
