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
      <Route path="/google" element={<BlogPost />} />
      <Route path="/google/:id" element={<BlogViewer />} />
      <Route path="/calculus" element={<BlogPost />} />
      <Route path="/calculus/:id" element={<BlogViewer />} />
      <Route path="/statistics" element={<BlogPost />} />
      <Route path="/statistics/:id" element={<BlogViewer />} />
      <Route path="/probability" element={<BlogPost />} />
      <Route path="/probability/:id" element={<BlogViewer />} />
      <Route path="/linear-algebra" element={<BlogPost />} />
      <Route path="/linear-algebra/:id" element={<BlogViewer />} />
      <Route path="/editor" element={<PostEditor />} />
      <Route path="/edit-editor" element={<PostEditEditor />} />
    </Routes>
  );
}
