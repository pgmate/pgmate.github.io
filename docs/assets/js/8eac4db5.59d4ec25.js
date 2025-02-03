"use strict";(self.webpackChunkpgmate=self.webpackChunkpgmate||[]).push([[717],{8683:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"sql-studio","title":"\u2328\ufe0f SQL Studio","description":"SQL Studio is the main code editor of PGMate.","source":"@site/docs/sql-studio.mdx","sourceDirName":".","slug":"/sql-studio","permalink":"/docs/sql-studio","draft":false,"unlisted":false,"editUrl":"https://github.com/pgmate/pgmate.github.io/tree/main/docs/sql-studio.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u2328\ufe0f Keyboard Shortcuts","permalink":"/docs/keyboard-shortcuts"}}');var i=s(4848),o=s(8453);const r={},a="\u2328\ufe0f SQL Studio",d={},l=[{value:"Keyboard Shortcuts",id:"keyboard-shortcuts",level:2},{value:"Run Selection (*)",id:"run-selection-",level:2},{value:"Auto Completion",id:"auto-completion",level:2},{value:"Code Snippets",id:"code-snippets",level:2},{value:"Save to File",id:"save-to-file",level:3},{value:"Import/Export Snippets",id:"importexport-snippets",level:3},{value:"Import Code",id:"import-code",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"\ufe0f-sql-studio",children:"\u2328\ufe0f SQL Studio"})}),"\n",(0,i.jsx)(t.p,{children:"SQL Studio is the main code editor of PGMate."}),"\n",(0,i.jsxs)(t.p,{children:["You can run any query against the ",(0,i.jsx)(t.a,{href:"./connections-manager#switching-connections",children:"selected connection"})," and use any SQL feature that is allowed by your permission."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"SQL Studio - PGMate",src:s(1843).A+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(t.h2,{id:"keyboard-shortcuts",children:"Keyboard Shortcuts"}),"\n",(0,i.jsx)(t.p,{children:"PGMate aims for a seamless keyboard navigation experience."}),"\n",(0,i.jsxs)(t.p,{children:["Our editor is based on ",(0,i.jsx)(t.a,{href:"https://microsoft.github.io/monaco-editor/",children:"Monaco Editor"})," which is VSCode's choice; so chances are that you've already used it sometimes, and that you are already familiar with the basics of keyboard navigation:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"shortcut"}),(0,i.jsx)(t.th,{children:"description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cmd + Enter"}),(0,i.jsx)(t.td,{children:"execute current selection (*)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cmd + d"}),(0,i.jsx)(t.td,{children:"select next occurrence (multi cursor)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Opt + Up/Dowm"}),(0,i.jsx)(t.td,{children:"move selection up/down"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"shift + Opt + Up/Down"}),(0,i.jsx)(t.td,{children:"duplicate selection up/down"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"run-selection-",children:"Run Selection (*)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'When you use the "Run Selection" button from the UI only the code that is selected is committed for execution.'}),"\n",(0,i.jsxs)(t.li,{children:["When you use ",(0,i.jsx)(t.code,{children:"Cmd + Enter"})," and there is an active selection, that selection is commited as well."]}),"\n",(0,i.jsxs)(t.li,{children:["If you ",(0,i.jsx)(t.code,{children:"Cmd + Enter"})," without a selection, PGMate will ",(0,i.jsx)(t.strong,{children:"try to automatically identify"})," the portion of code that contains the SQL command around your cursor."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc49 This last behavior is an ",(0,i.jsx)(t.strong,{children:"experimental feature"})," and it is prone to errors with complex queries (CTEs), code blocks (DO/LOOP) and functions. Improving this is in our backlog and we are happy bunnies \ud83d\udc30 if ",(0,i.jsx)(t.strong,{children:"you decide to help us!"})]}),"\n",(0,i.jsx)(t.h2,{id:"auto-completion",children:"Auto Completion"}),"\n",(0,i.jsx)(t.p,{children:"SQL Studio supports the basics of the SQL language for auto completion purpose."}),"\n",(0,i.jsx)(t.p,{children:"PGMate's goal is to extend this support to be context-aware in real time. That means that you will soon enjoy auto completion for your schemas, tables, functions and more. Constantly updated as you modify your schema."}),"\n",(0,i.jsx)(t.h2,{id:"code-snippets",children:"Code Snippets"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"\ud83d\udea7 COMING SOON"})}),"\n",(0,i.jsx)(t.p,{children:"This feature will support saving SQL code for further execution."}),"\n",(0,i.jsx)(t.p,{children:"It is still not completely clear how this will be done. Here are some ideas."}),"\n",(0,i.jsx)(t.h3,{id:"save-to-file",children:"Save to File"}),"\n",(0,i.jsxs)(t.p,{children:["As PGMate runs as a container, it can easily interact with its own ",(0,i.jsx)(t.em,{children:"file system"})," and that can easily be mapped to the host's. The active context can be persisted to a default file and that file could be switched around to source the editor's code."]}),"\n",(0,i.jsx)(t.p,{children:'That could even span into a multi-tab UI where multiple contexts could be kept open and synced at once, and the editor would remember the active tab whenever switching back to the SQL Studio, or whenever using the "Send to SQL Studio" feature.'}),"\n",(0,i.jsx)(t.p,{children:"In this scenario, the sidebar content would be replaced with a File System navigation tree, allowing the user to freely interact with folders and files."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"\ud83e\udd13 There is even some sci-fi ideas about implementing a proprietary Import/Export mechanism and give to normal SQL files some of the Javascript's modules capabilities."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"importexport-snippets",children:"Import/Export Snippets"}),"\n",(0,i.jsxs)(t.p,{children:["The idea is to take a code selection and persist it as a ",(0,i.jsx)(t.strong,{children:"named snippet"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"A snippet would be a configurable object composed by:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"code"}),"\n",(0,i.jsx)(t.li,{children:"variables (optional)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Once a snipped is saved, it could then be used in a couple of interesting ways:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Re-imported into the editor by ",(0,i.jsx)(t.code,{children:"search->Enter"})]}),"\n",(0,i.jsxs)(t.li,{children:["Associated with a custom keyboard shortcut for seamless execution, with a UI for setting variables if needed","\n",(0,i.jsx)("small",{children:(0,i.jsx)(t.p,{children:"(imagine a snippet that resets stats or series on a particular table that is\ngiven as parameter)"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Associated with a visual shortcut in the sidebar\n",(0,i.jsx)("small",{children:"(click to run)"})]}),"\n",(0,i.jsxs)(t.li,{children:["Associated with a Dasboard Widget to automatically display data\n",(0,i.jsx)("small",{children:"(how many new users today?)"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc49 Snippets would be saved as json configuration files in a ",(0,i.jsx)(t.em,{children:"file system"})," area that could be mapped out as a volume, allowing the configuration of your PGMate to be a source of truth that can be ",(0,i.jsx)(t.strong,{children:"managed by a version control system"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"import-code",children:"Import Code"}),"\n",(0,i.jsx)(t.p,{children:"PGMate is full of code snippets that shows what the hell is happening behind the hood of the User Interface."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"The goal is to constantly expand your knowledge by looking at SQL code. If anything, you will see a lot of queries around Postgres' metadata \ud83d\ude0e."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Use the ",(0,i.jsx)(t.code,{children:"Send to SQL Studio"})," button from any of those snippets, as well as from Copilot's code blocks:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Import SQL Code - PGMate",src:s(7022).A+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(t.p,{children:"The snippet will be appended to the current SQL Studio open context."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7022:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/import-sql-code-45d6e54266d2102f4d52bc6741937ce8.gif"},1843:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/sql-studio-fba8c7f50458acab5ff16f6d82f7aa34.gif"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);