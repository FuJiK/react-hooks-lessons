import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

//https://ja.react.dev/reference/react/useState#updating-state-based-on-the-previous-state

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // strictmodeだと、二回呼び出しが行われる
  // https://ja.react.dev/reference/react/useState#my-initializer-or-updater-function-runs-twice
  // 公式ドキュメントにも記載
  // 何故、2回呼び出されるかは純関数（計算だけで、何もしない）のため
  // https://ja.react.dev/learn/keeping-components-pure
);
