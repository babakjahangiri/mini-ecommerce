import React from "react";
import "./productcard.scss";
const ProductCard = (product) => {
  return (
    <div className="product-card">
      <div>
        <img src={"images/" + product.image} alt={product.name} />
      </div>
      <div className="product-card-down">
        <p className="product-card-title">{product.name}</p>
        <div>
          <p className="product-card-price">£{product.price}</p>
          <p className="product-card-Addbtn">Add To Card</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
