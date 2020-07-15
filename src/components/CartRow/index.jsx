import React, { useState, useContext } from "react";
import { cartItemsCountContext } from "./../../context";
import {
  updateCartItem,
  getProductStock,
  getItemsCount,
} from "../../functions";
import removeIcon from "./../../images/remove.svg";
import "./cartrow.scss";

const CartRow = ({ cartProduct, removeItemHanlder, editCartHanler }) => {
  //for mini basket items count
  const { itemsCount, setItemsCount } = useContext(cartItemsCountContext);

  const [productData, setProductData] = useState(
    getProductStock(cartProduct.id)
  );
  const [productQty, setProductQty] = useState(cartProduct.qty);

  function editCartHanler(pid, qty) {
    setProductQty(qty);
    updateCartItem(pid, qty);
    setItemsCount(getItemsCount());
  }

  return (
    <div className="shoppingcart-row">
      <div className="shoppingcart-product-image">
        <img src={`images/${productData.image}`} alt="" />
      </div>

      <div className="shoppingcart-product-name">
        <h2>{productData.name}</h2>
        <h5>£ {productData.price}</h5>
      </div>

      <div className="shoppingcart-product-qty">
        <input
          type="number"
          id="qty"
          name="qty"
          min="1"
          max="99"
          value={productQty}
          //onChange={() => editCartHanler(cartProduct.id, productQty)}

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
