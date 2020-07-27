import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import GlobalStyles from "./Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/Theme";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
