import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppRoot } from "./components/AppRoot";

ReactDOM.render(
    <AppRoot compiler="TypeScript" framework="React" />,
    document.getElementById("main"),
);