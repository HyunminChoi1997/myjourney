import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Editor from "../components/programming/textEditor/Editor";
import "./PostEditor.css";

function PostEditor() {
  const { state } = useLocation();
  const { subject } = state;

  return (
    <Layout>
      <div className="EditorBody">
        <Editor subject={subject} />
      </div>
    </Layout>
  );
}

export default PostEditor;
