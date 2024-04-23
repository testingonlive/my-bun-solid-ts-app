/* @refresh reload */
import { customElement } from "solid-element";

import IndexCSS from "./index.css?inline";
import App from "./App";

customElement("my-app", { appName: "" }, (props) => {
  return (
    <>
      <style>{IndexCSS}</style>
      <App appName={props.appName} />
    </>
  );
});
