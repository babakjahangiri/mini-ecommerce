import React, { useContext, useState, useEffect } from "react";
import "./productdetails.scss";
import { NavLink } from "react-router-dom";
import { addToCart, getItemsCount } from "../../functions";
import { cartItemsCountContext } from "./../../context";
import allProducts from "./../../data/products.json";

const ProductDetails = ({ match }) => {
  const [productItem, setProductItem] = useState(null);
  const [itemAdded, setItemAdded] = useState(false);

  const productId = match.params.pid;
  const { setItemsCount } = useContext(cartItemsCountContext);
  useEffect(() => {
    setProductItem(allProducts.filter((p) => p.id === Number(productId)));
  }, [productId]);

  const addToCart_ClickHandle = (productId) => {
    addToCart(productId);
    setItemsCount(getItemsCount());

    //Manage the add to cart message
    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 600);
  };

  // console.log(JSON.stringify(!productItem));

  if (!productItem || productItem[0] === undefined) {
    return <h1>Product not found</h1>;
  } else {
    return (
      <section className="product-details-section">
        <div className="breadcrumbs">
          <p>
            <NavLink to="/" exact>
              HOME &nbsp;&gt;&nbsp;
            </NavLink>
          </p>
          <p> Products &nbsp;&gt;&nbsp; </p>
          <p> {productItem[0].name}</p>
        </div>
        <div className="product-details-container">
          <div className="product-image-container">
            {<img src={`/images/${productItem[0].image}`} alt="" />}
          </div>
          <div className="product-details-info">
            <div className="product-details-top">
              <h1>{productItem[0].name}</h1>
              <p>{productItem[0].sku}</p>
              <hr />
              <h5>£ {productItem[0].price}</h5>
              <p>Item in stock</p>
            </div>
            <div className="product-details-bottom">
              <span
                className={`${itemAdded === true ? "hide-element" : "hidden"}`}
              >
                Item added to your cart
              </span>
              <button
                className="btn-AddtoCart"
                onClick={() => addToCart_ClickHandle(productItem[0].id)}
              >
                Add To Cart
              </button>
              <p>FREE SHIPPING AND RETURNS</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ProductDetails;
