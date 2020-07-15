import React, { useContext } from "react";
//import { cartItemsNumber } from "./../../functions";
import { cartItemsCountContext } from "./../../context";

import "./minicart-item.scss";

const MiniCartItem = () => {
  const { itemsCount } = useContext(cartItemsCountContext);

  return (
    <div>
      <p className="mc-items">
        {itemsCount === 0 && "empty"}
        {itemsCount === 1 && itemsCount + " item"}
        {itemsCount > 1 && itemsCount + " items"}
      </p>
    </div>
  );
};

export default MiniCartItem;
