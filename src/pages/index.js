import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import React from "react";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
