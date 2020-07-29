import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { cartItemsCountContext, cartTotalContext } from "./../../context";
import {
  updateCartItem,
  getProductStock,
  getItemsCount,
  getCartTotal,
} from "../../functions";
import removeIcon from "./../../images/remove.svg";
import "./cartrow.scss";

const CartRow = ({ cartProduct, removeItemHanlder }) => {
  //for mini basket items count
  const { setItemsCount } = useContext(cartItemsCountContext);
  const { setTotalCart } = useContext(cartTotalContext);

  const [productData] = useState(getProductStock(cartProduct.id));
  const [productQty, setProductQty] = useState(cartProduct.qty);

  function editCartHanler(pid, qty) {
    if (Number(qty) < 100) {
      setProductQty(qty);
      updateCartItem(pid, qty);
      setItemsCount(getItemsCount());
      setTotalCart(getCartTotal());
    }
  }
  // function validateQtyHandler(number) {
  //   number.toString().length > 2 &&
  //     setProductQty(Number(number.toString().substr(0, 2)));
  // }

  return (
    <div className="shoppingcart-row">
      <div className="shoppingcart-product-image">
        <Link to={"product/" + productData.id}>
          <img src={`images/${productData.image}`} alt={productData.name} />
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
          // onKeyUp={(e) => validateQtyHandler(e.target.value)}
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
