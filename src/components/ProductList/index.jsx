import React, { useState } from "react";
import "./productlist.scss";
import { ProductCard } from "./../../components";

import productData from "./../../data/products.json";
const ProductList = () => {
  const [productList, setProductList] = useState(productData);
  const [selectedFilter, setSelectedFilter] = useState("all");

  function list(filterWord) {
    switch (filterWord) {
      case "new":
        setProductList(productData.filter((p) => p.isNew === true));
        setSelectedFilter("new");
        break;
      case "men":
        setProductList(productData.filter((p) => p.forGender === "m"));
        setSelectedFilter("men");
        break;
      case "women":
        setProductList(productData.filter((p) => p.forGender === "f"));
        setSelectedFilter("women");
        break;
      default:
        setProductList(productData);
        setSelectedFilter("all");
    }
  }

  return (
    <main>
      <nav className="product-list-filter">
        <p
          className={
            selectedFilter === "new" ? "product-list-filter-selected" : ""
          }
          onClick={() => {
            list("new");
          }}
        >
          NEW
        </p>
        <p
          className={
            selectedFilter === "all" ? "product-list-filter-selected" : ""
          }
          onClick={() => {
            list("all");
          }}
        >
          ALL
        </p>
        <p
          className={
            selectedFilter === "men" ? "product-list-filter-selected" : ""
          }
          onClick={() => {
            list("men");
          }}
        >
          MEN
        </p>
        <p
          className={
            selectedFilter === "women" ? "product-list-filter-selected" : ""
          }
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
