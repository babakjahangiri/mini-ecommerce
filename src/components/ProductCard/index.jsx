import React from "react";
import { addToCart } from "../../functions";

import "./productcard.scss";
const ProductCard = (product) => {
  const addToCart_ClickHandle = (productId) => {
    addToCart(4);
  };

  return (
    <div className="product-card">
      <div>
        <img src={"images/" + product.image} alt={product.name} />
      </div>
      <div className="product-card-down">
        <p className="product-card-title">{product.name}</p>
        <div>
          <p className="product-card-price">£{product.price}</p>
          <p
            className="product-card-Addbtn"
            onClick={() => addToCart_ClickHandle(product.id)}
          >
            Add To Card
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
