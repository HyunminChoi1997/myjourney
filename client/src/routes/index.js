import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import InterviewFront from "../pages/InterviewFront";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interviewfront" element={<InterviewFront />} />
    </Routes>
  );
}
