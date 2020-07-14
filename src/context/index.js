import { createContext } from "react";
import { getItemsCount } from "./../functions";
export const cartItemsCountContext = createContext(getItemsCount());
