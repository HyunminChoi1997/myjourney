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
      <Route path="/programming" element={<Interview />} />\
      <Route path="/languages" element={<Home />} />
      <Route path="/ai" element={<Home />} />
      <Route path="/algorithm" element={<Home />} />
      <Route path="/calculus" element={<Home />} />
      <Route path="/statistics" element={<Home />} />
      <Route path="/probability" element={<Home />} />
      <Route path="/linear-algebra" element={<Home />} />
    </Routes>
  );
}
