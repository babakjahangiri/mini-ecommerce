import React, { Fragment } from "react";
import { ProductDetails } from "./../../components";
const ProductPage = ({ match }) => {
  //console.log(match);
  return (
    <Fragment>
      <ProductDetails match={match} />
    </Fragment>
  );
};

export default ProductPage;
