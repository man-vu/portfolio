import React, { useState, useEffect } from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import { settings } from "./portfolio";
import ReactGA from "react-ga4";
// src/global.js or App.js
import './assets/fonts/fonts.css';


function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID); // e.g., G-XXXXXXXXXX
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <Main theme={themes[theme]} setTheme={setTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
