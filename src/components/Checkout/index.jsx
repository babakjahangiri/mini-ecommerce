import React, { useState, useEffect } from "react";
import { getCartProducts } from "./../../functions";

import { InvoiceRow } from "./../../components";
import "./checkout.scss";

const Checkout = ({ match }) => {
  //const { setItemsCount } = useContext(cartItemsCountContext);
  const [customerName, setCustomerName] = useState("");
  const Name = match.params.name;

  const [cartItems] = useState(getCartProducts());

  //props.location.query.name

  useEffect(() => {
    setCustomerName(Name);
  }, [Name]);

  return (
    <div className="checkout-page-container">
      <p>
        Dear <b>{customerName}</b>, Thank you for your order.
      </p>
      <p>we will deliver below order asap.</p>

      <div className="invoice-container">
        <div className="invoice-header">
          <ul>
            <li>Products</li>
            <li>Quantity</li>
            <li>Price</li>
          </ul>
        </div>
        <div className="invoice-body">
          {cartItems.map((product, index) => (
            // <div key={product.name}>{product.name}</div>
            <InvoiceRow key={product.id} cartItem={product}></InvoiceRow>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
