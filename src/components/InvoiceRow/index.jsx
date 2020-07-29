import React, { useState } from "react";

import { getProductStock } from "../../functions";

import { Link } from "react-router-dom";
import "./invoicerow.scss";

const InvoiceRow = ({ cartItem }) => {
  //for invoice items

  const [productData] = useState(getProductStock(cartItem.id));
  const [productQty] = useState(cartItem.qty);

  return (
    <div className="invoice-row">
      <div className="invoice-product">
        <div className="invoice-product-image">
          <Link to={"../product/" + productData.id}>
            <img
              src={`../images/${productData.image}`}
              alt={productData.name}
            />
          </Link>
        </div>

        <div className="invoice-product-name">
          <Link to={"../product/" + productData.id}>
            <h2>{productData.name}</h2>
            <h5>£ {productData.price}</h5>
          </Link>
        </div>
      </div>
      <div className="invoice-product-qty">{productQty}</div>
      <div className="invoice-product-price">
        <h3>£ {productData.price * productQty}</h3>
      </div>
    </div>
  );
};

export default InvoiceRow;
