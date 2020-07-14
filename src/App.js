import React, { useState } from "react";
import "./App.scss";
import AppRouter from "./AppRouter";
import { Header, Footer } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
import { cartItemsCountContext } from "./context";
import { getItemsCount } from "./functions";

function App() {
  const [itemsCount, setItemsCount] = useState(getItemsCount());
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <cartItemsCountContext.Provider value={{ itemsCount, setItemsCount }}>
        <Header />
        <AppRouter />
      </cartItemsCountContext.Provider>
      <Footer />
    </Router>
  );
}

export default App;
