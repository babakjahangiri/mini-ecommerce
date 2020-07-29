import React from "react";
import { HomePage, ProductPage, CartPage, CheckoutPage } from "./Pages";
import { Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/product/:pid" component={ProductPage}></Route>
      <Route path="/cart" exact component={CartPage}></Route>
      <Route path="/checkout/:name" component={CheckoutPage}></Route>
    </Switch>
  );
}

export default AppRouter;
