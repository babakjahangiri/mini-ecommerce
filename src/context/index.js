import { createContext } from "react";
import { getItemsCount, getCartTotal } from "./../functions";
export const cartItemsCountContext = createContext(getItemsCount());
export const cartTotalContext = createContext(getCartTotal());
