import React, { useEffect, useState } from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import Fade from "@mui/material/Fade";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <Fade in={fadeIn} timeout={2000}>
      <div
        {...styles}
        key={repo.id}
        style={{ backgroundColor: theme.projectCard }}
        className="project-card"
      >
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>
        <p className="repo-description" style={{ color: theme.text }}>
          {repo.description}
        </p>
        <div className="flexDiv">
          <div className="repo-details Leftitem">
            <ProjectLanguages logos={repo.languages} />
          </div>
          <div className="repo-details Rightitem">
            <ProjectLinks logos={repo.links} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
