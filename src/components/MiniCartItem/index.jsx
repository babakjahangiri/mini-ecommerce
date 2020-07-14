import React, { useContext } from "react";
//import { cartItemsNumber } from "./../../functions";
import { cartItemsCountContext } from "./../../context";

import "./minicart-item.scss";

const MiniCartItem = () => {
  //let cartItemsCount = useContext(cartItemsCountContext);

  const { itemsCount } = useContext(cartItemsCountContext);

  return (
    <div>
      {/* <p>{itemsCount}</p> */}
      <p className="mc-items">
        {itemsCount === 0 && "empty"}
        {itemsCount === 1 && itemsCount + " item"}
        {itemsCount > 1 && itemsCount + " items"}
      </p>
    </div>
  );
};

export default MiniCartItem;
