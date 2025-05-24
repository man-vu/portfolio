// Main.js
import React from "react";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Testimonials from "../pages/testimonials/Testimonials";
import { settings } from "../portfolio.js";
import Header from "../components/header/Header";

import "./Main.css";

export default function Main(propss) {
  const theme = propss.theme;
  const setTheme = propss.setTheme;

  return (
    <div className={`main-component${theme.name === "dark" ? " dark" : ""}`}>
      <HashRouter basename="/">
        {!settings.isSplash && <Header theme={theme} setTheme={setTheme} />}
        <Routes>
          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<Splash theme={theme} setTheme={setTheme} />} />
          <Route path="/home" element={<Home theme={theme} setTheme={setTheme} />} />
          <Route path="/experiences" element={<Experience theme={theme} setTheme={setTheme} />} />
          <Route path="/educations" element={<Education theme={theme} setTheme={setTheme} />} />
          <Route path="/contact" element={<Contact theme={theme} setTheme={setTheme} />} />
          <Route path="/projects" element={<Projects theme={theme} setTheme={setTheme} />} />
          <Route path="/testimonials" element={<Testimonials theme={theme} setTheme={setTheme} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
