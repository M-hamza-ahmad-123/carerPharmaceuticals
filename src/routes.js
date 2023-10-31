import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/main";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:page" element={<Main />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/products/:id" element={<Main />} />

      </Routes>
    </Router>
  );
}

export default Routers;
