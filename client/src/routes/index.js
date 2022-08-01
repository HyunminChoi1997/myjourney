import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Interview from "../pages/Interview";
import BlogPost from "../pages/BlogPost";
import BlogViewer from "../pages/BlogViewer";
import PostEditEditor from "../pages/PostEditEditor";
import PostEditor from "../pages/PostEditor";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/front" element={<Interview />} />
      <Route path="/back" element={<Interview />} />
      <Route path="/programming" element={<Interview />} />
      <Route path="/python" element={<BlogPost />} />
      <Route path="/python/:id" element={<BlogViewer />} />
      <Route path="/ai" element={<BlogPost />} />
      <Route path="/ai/:id" element={<BlogViewer />} />
      <Route path="/algorithm" element={<BlogPost />} />
      <Route path="/algorithm/:id" element={<BlogViewer />} />
      <Route path="/Google" element={<BlogPost />} />
      <Route path="/Google/:id" element={<BlogViewer />} />
      <Route path="/calculus" element={<Home />} />
      <Route path="/statistics" element={<Home />} />
      <Route path="/probability" element={<Home />} />
      <Route path="/linear-algebra" element={<Home />} />
      <Route path="/editor" element={<PostEditor />} />
      <Route path="/edit-editor" element={<PostEditEditor />} />
    </Routes>
  );
}
