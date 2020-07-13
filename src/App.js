import React from "react";
import "./App.scss";
import { HomePage, ProductPage, CartPage } from "./Pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/product/:id" component={ProductPage}></Route>
      <Route path="/cart" exact component={CartPage}></Route>
    </Switch>
  );
}

export default App;
