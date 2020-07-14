import React, { useContext } from "react";
import { addToCart, getItemsCount } from "../../functions";
import { cartItemsCountContext } from "./../../context";
import { Link } from "react-router-dom";
import "./productcard.scss";

const ProductCard = (product) => {
  const { setItemsCount } = useContext(cartItemsCountContext);

  const addToCart_ClickHandle = (productId) => {
    addToCart(productId);
    setItemsCount(getItemsCount());
  };

  return (
    <div className="product-card">
      <div>
        <Link to={"product/" + product.id}>
          <img src={"images/" + product.image} alt={product.name} />
        </Link>
      </div>
      <div className="product-card-down">
        <p className="product-card-title">
          <Link to={`product/${product.id}`}>{product.name}</Link>
        </p>
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
