/* @refresh reload */
import { customElement } from "solid-element";

import App from "./App";
import Css from "./Css";

customElement("my-app", { appName: "" }, (props) => {
  return (
    <>
      <Css />
      <App appName={props.appName} />
    </>
  );
});
