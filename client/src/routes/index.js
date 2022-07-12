import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Interview from "../pages/Interview";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/front" element={<Interview />} />
      <Route path="/back" element={<Interview />} />
      <Route path="/programming" element={<Interview />} />
    </Routes>
  );
}
