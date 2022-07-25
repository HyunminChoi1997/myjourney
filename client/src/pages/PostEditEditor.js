import React from "react";
import Layout from "../components/layout/Layout";
import EditEditor from "../components/textEditor/EditEditor";
import "./PostEditor.css";

function PostEditEditor() {
  return (
    <Layout>
      <div className="EditorBody">
        <EditEditor />
      </div>
    </Layout>
  );
}

export default PostEditEditor;
