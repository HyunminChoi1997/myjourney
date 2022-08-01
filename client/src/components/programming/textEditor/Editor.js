import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes } from "@lexical/html";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import theme from "./themes/Theme";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import { postBlogPost } from "../../../requests/progblogRequest";

import { Title, CenterContainer, Button } from "./styles";
import { $getSelection } from "lexical";

function Placeholder() {
  return <div className="editor-placeholder">작성하세요... Enter text...</div>;
}

const editorConfig = {
  // The editor theme
  namespace: "MyEditor",
  theme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

function SubmitForm({ title, subject, navigate }) {
  const [editor] = useLexicalComposerContext();

  const onClick = () => {
    if (title === "") {
      return Swal.fire("Title Needed", "제목이 필요합니다", "error");
    }

    Swal.fire({
      title: "Upload Post?",
      text: "포스팅 하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        editor.update(() => {
          const htmlString = $generateHtmlFromNodes(editor, null);
          const json = JSON.stringify(editor.getEditorState());
          postBlogPost(title, json, htmlString, subject).then((res) => {
            if (res.err) {
              return Swal.fire("Error", res.err, "error");
            }
            Swal.fire("Completed", "작성했습니다", "success");
            navigate(`/${subject}`);
          });
        });
      }
    });
  };

  return <Button onClick={onClick}>Submit</Button>;
}

function Editor({ subject }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const onCancel = () => {
    Swal.fire({
      title: "Are you sure? Everything written won't be saved",
      text: "정말 나가시겠습니까? 작성하신 글은 저장되지 않습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Leave",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/${subject}`);
      }
    });
  };

  const titleOnChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <LexicalComposer initialConfig={editorConfig}>
        <CenterContainer>
          <Title
            placeholder="제목 Title"
            value={title}
            onChange={(e) => titleOnChange(e)}
          />
        </CenterContainer>
        <div className="editor-container">
          <ToolbarPlugin />
          <div id="editor" className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<Placeholder />}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <LinkPlugin />
            <ListMaxIndentLevelPlugin maxDepth={3} />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          </div>
        </div>
        <CenterContainer>
          <SubmitForm title={title} subject={subject} navigate={navigate} />
          <Button onClick={onCancel}>Leave</Button>
        </CenterContainer>
      </LexicalComposer>
    </>
  );
}

export default Editor;
