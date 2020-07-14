import React from "react";
import { HomePage, ProductPage, CartPage } from "./Pages";
import { Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/product/:pid" component={ProductPage}></Route>
      <Route path="/cart" exact component={CartPage}></Route>
    </Switch>
  );
}

export default AppRouter;
