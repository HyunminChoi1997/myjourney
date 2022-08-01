import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PostContent from "../components/programming/postViewer/PostContent";
import "./PostEditor.css";

//Block Direct Access
function BlogViewer() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      const currURL = window.location.href.split("/");
      const endpoint = currURL[currURL.length - 2];
      navigate(`/${endpoint}`);
      return;
    }
  });

  return state ? (
    <Layout>
      <PostContent state={state} />
    </Layout>
  ) : null;
}

export default BlogViewer;
