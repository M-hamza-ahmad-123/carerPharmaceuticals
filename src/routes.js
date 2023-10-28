import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Products from "./components/products/products";
import Main from "./components/main";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:page" element={<Main />} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </Router>
  );
}

export default Routers;
