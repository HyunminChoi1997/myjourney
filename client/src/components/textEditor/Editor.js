import React, { useRef } from "react";
import { $getRoot, $getSelection } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes } from "@lexical/html";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
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

function SubmitPlugin() {
  const [editor] = useLexicalComposerContext();

  const onClick = () => {
    editor.update(() => {
      const htmlString = $generateHtmlFromNodes(editor, null);
      console.log(htmlString);
      console.log(typeof htmlString);
      const json = JSON.stringify(editor.getEditorState());
      console.log(json);
    });
  };

  return <button onClick={onClick}>Submit</button>;
}

function Editor() {
  const editorStateRef = useRef();

  const onChange = (editorState) => {
    editorState.read(() => {
      editorStateRef.current = editorState;
      const root = $getRoot();
      const selection = $getSelection();
      console.log(root, selection);
    });
  };

  return (
    <>
      <LexicalComposer initialConfig={editorConfig}>
        <div className="editor-container">
          <ToolbarPlugin />
          <div id="editor" className="editor-inner">
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={<Placeholder />}
            />
            <OnChangePlugin onChange={onChange} />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <LinkPlugin />
            <ListMaxIndentLevelPlugin maxDepth={3} />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          </div>
        </div>
        <SubmitPlugin />
      </LexicalComposer>
    </>
  );
}

export default Editor;
