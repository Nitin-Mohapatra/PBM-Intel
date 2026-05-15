import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ThemeProvider from "./shared-theme/ThemeProvider";

import "./styles/font.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);