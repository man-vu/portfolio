import React from "react";
import "./Main.css";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Testimonials from "../pages/testimonials/Testimonials";
import Header from "../components/header/Header";

export default function Main(props) {
  const theme = props.theme;
  const setTheme = props.setTheme;

return (
  <div className={`main-component${theme.name === "dark" ? " dark" : ""}`}>
    <Header theme={theme} setTheme={setTheme} />
    <div className="container">
      <Home theme={theme} setTheme={setTheme} />
      <Experience theme={theme} setTheme={setTheme} />
      <Education theme={theme} setTheme={setTheme} />
      <Projects theme={theme} setTheme={setTheme} />
      <Testimonials theme={theme} setTheme={setTheme} />
      <Contact theme={theme} setTheme={setTheme} />
    </div>
  </div>
);
}
