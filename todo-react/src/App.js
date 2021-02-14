import React from "react";
import { Router } from "@reach/router";
import { light } from "./theme";
import Main from "./pages/Main";
import { ThemeProvider, CssBaseline } from "@material-ui/core";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <Router>
          <Main path="/" />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
