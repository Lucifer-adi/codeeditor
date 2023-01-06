import "./App.css";
import React, { useEffect, useState } from "react";
import Editor from "./component/Editor";
import useLocalStorage from "./component/hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage('html',"");
  const [javascript, setJavascript] = useLocalStorage('javascript',"");
  const [css, setCss] = useLocalStorage('css',"");

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
        `);
    }, 750)
    return(() =>clearTimeout(timeout))          //this will stop from requeing
  }, [html, javascript, css]);

  return (
    <>
    <div className="pane top-pane">
      <Editor
        language="xml"
        displayName="HTML"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language="javascript"
        displayName="JavaScript"
        value={javascript}
        onChange={setJavascript}
      />
      <Editor language="css" displayName="CSS" value={css} onChange={setCss} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
