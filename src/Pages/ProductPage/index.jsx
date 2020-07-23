import React from "react";
import { ProductDetails } from "./../../components";
const ProductPage = ({ match }) => {
  //console.log(match);
  return <ProductDetails match={match} />;
};

export default ProductPage;
