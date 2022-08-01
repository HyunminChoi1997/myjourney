import React from "react";
import Layout from "../components/layout/Layout";
import PostList from "../components/programming/postViewer/PostList";

function BlogPost() {
  const currURL = window.location.href.split("/");
  const endpoint = currURL[currURL.length - 1];

  return (
    <Layout>
      <PostList subject={endpoint} />
    </Layout>
  );
}
export default BlogPost;
