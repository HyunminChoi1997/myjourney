import React from "react";
import Layout from "../components/layout/Layout";
import Editor from "../components/textEditor/Editor";
import "./PostEditor.css";

function PostEditor() {
  return (
    <Layout>
      <div className="EditorBody">
        <Editor />
      </div>
    </Layout>
  );
}

export default PostEditor;
