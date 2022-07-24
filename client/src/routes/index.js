import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Interview from "../pages/Interview";
import PostEditEditor from "../pages/PostEditEditor";
import PostEditor from "../pages/PostEditor";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/front" element={<Interview />} />
      <Route path="/back" element={<Interview />} />
      <Route path="/programming" element={<Interview />} />
      <Route path="/languages" element={<PostEditor />} />
      <Route path="/ai" element={<PostEditEditor />} />
      <Route path="/algorithm" element={<Home />} />
      <Route path="/calculus" element={<Home />} />
      <Route path="/statistics" element={<Home />} />
      <Route path="/probability" element={<Home />} />
      <Route path="/linear-algebra" element={<Home />} />
      <Route path="/editor" element={<PostEditor />} />
      <Route path="/edit-editor" element={<PostEditEditor />} />
    </Routes>
  );
}
