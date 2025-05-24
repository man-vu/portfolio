import React, { useEffect, useState, useMemo } from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import Fade from "@mui/material/Fade";

export default function Skills({ theme }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const fadeProps = useMemo(() => ({ in: fadeIn, timeout: 2000 }), [fadeIn]);

  return (
    <section className="main" id="skills">
      <div className="skills-header-div">
        <Fade {...fadeProps}>
          <h1 className="skills-header" style={{ color: theme?.text }}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </section>
  );
}
