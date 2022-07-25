import React, { useEffect, useRef } from "react";
import { $getRoot, $getSelection } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateNodesFromDOM } from "@lexical/html";
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

function CallHTMLPlugin() {
  const [editor] = useLexicalComposerContext();
  //보여줄때는 HTML로 보여주고

  // const htmlString = `<code class="editor-code" spellcheck="false" data-highlight-language="javascript"><span>asfdasdfsdafaf</span></code><p class="editor-paragraph"><span>asdfasdfsdaf</span></p><p class="editor-paragraph"><span>sdafasdfdfsdaf</span></p><h1 class="editor-heading-h1"><span>asfsafd</span></h1>`;

  // const onClick = () => {
  //   editor.update(() => {
  //     const dom = new DOMParser().parseFromString(
  //       htmlString,
  //       "application/xml"
  //     );
  //     console.log(dom);

  //     const nodes = $generateNodesFromDOM(editor, dom);
  //     console.log("nodes: ", nodes);

  //     $getRoot().select();

  //     const selection = $getSelection();
  //     selection.insertNodes(nodes);
  //   });
  // };

  //Text 수정할때는 json으로 불러오고
  const json = `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"for","type":"code-highlight","version":1,"highlightType":"keyword"}],"direction":"ltr","format":"","indent":0,"type":"code","version":1,"language":"javascript"}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`;
  const parsedJson = JSON.parse(json);
  const state = editor.parseEditorState(json);
  editor.setEditorState(state);
}

function EditEditor() {
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
            <CallHTMLPlugin />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <CodeHighlightPlugin />
            <ListPlugin />
            <LinkPlugin />
            <ListMaxIndentLevelPlugin maxDepth={3} />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          </div>
        </div>
      </LexicalComposer>
    </>
  );
}

export default EditEditor;
