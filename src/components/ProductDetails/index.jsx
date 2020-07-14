import React, { useState, useEffect } from "react";
import "./productdetails.scss";
import { NavLink } from "react-router-dom";
import allProducts from "./../../data/products.json";

const ProductDetails = ({ match }) => {
  const [productItem, setProductItem] = useState(null);
  const productId = match.params.pid;

  useEffect(() => {
    setProductItem(allProducts.filter((p) => p.id === Number(productId)));
  }, [productId]);

  console.log(JSON.stringify(!productItem));

  if (!productItem || productItem === null) {
    return <h1>product not found</h1>;
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
              <button className="btn-AddtoCart">Add To Cart</button>
              <p>FREE SHIPPING AND RETURNS</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default ProductDetails;
