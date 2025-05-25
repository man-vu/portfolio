import "./Main.css";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Testimonials from "../pages/testimonials/Testimonials";
import Header from "../components/header/Header";
import SectionWrapper from "../components/SectionWrapper";

export default function Main(props) {
  const theme = props.theme;
  const setTheme = props.setTheme;

  return (
    <div className={`main-component${theme.name === "dark" ? " dark" : ""}`}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <SectionWrapper animationClass="fade-in">
          <Home theme={theme} setTheme={setTheme} />
        </SectionWrapper>

        <SectionWrapper animationClass="slide-left">
          <Experience theme={theme} setTheme={setTheme} />
        </SectionWrapper>

        <SectionWrapper animationClass="zoom-in">
          <Education theme={theme} setTheme={setTheme} />
        </SectionWrapper>

        <SectionWrapper animationClass="fade-in">
          <Projects theme={theme} setTheme={setTheme} />
        </SectionWrapper>

        <SectionWrapper animationClass="slide-left">
          <Testimonials theme={theme} setTheme={setTheme} />
        </SectionWrapper>

        <SectionWrapper animationClass="zoom-in">
          <Contact theme={theme} setTheme={setTheme} />
        </SectionWrapper>
      </div>
    </div>
  );
}
