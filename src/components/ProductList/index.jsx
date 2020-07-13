import React, { useState } from "react";
import "./productlist.scss";
import { ProductCard } from "./../../components";

import productData from "./../../data/products.json";
const ProductList = () => {
  const [productList, setProductList] = useState(productData);

  function list(filterWord) {
    switch (filterWord) {
      case "new":
        setProductList(productData.filter((p) => p.isNew === true));
        break;
      case "men":
        setProductList(productData.filter((p) => p.forGender === "m"));
        break;
      case "women":
        setProductList(productData.filter((p) => p.forGender === "f"));
        break;
      default:
        setProductList(productData);
    }
  }

  return (
    <main>
      <nav className="product-list-filter">
        <p
          onClick={() => {
            list("new");
          }}
        >
          NEW
        </p>
        <p
          onClick={() => {
            list("all");
          }}
        >
          ALL
        </p>
        <p
          onClick={() => {
            list("men");
          }}
        >
          MEN
        </p>
        <p
          onClick={() => {
            list("women");
          }}
        >
          WOMEN
        </p>
      </nav>
      <section className="product-list-main">
        {productList.map((product, index) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </main>
  );
};

export default ProductList;
