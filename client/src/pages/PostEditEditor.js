import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import EditEditor from "../components/textEditor/EditEditor";
import "./PostEditor.css";

function PostEditEditor() {
  const { state } = useLocation();

  return (
    <Layout>
      <div className="EditorBody">
        <EditEditor state={state} />
      </div>
    </Layout>
  );
}

export default PostEditEditor;
