import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function ExperienceAccordion(props) {
  const theme = props.theme;

  const muiTheme = createTheme({
    palette: {
      mode: theme.name === "light" ? "light" : "dark",
      primary: {
        main: theme.accentColor || "#1976d2",
      },
      background: {
        default: theme.name === "light" ? "#fff" : "#121212",
      },
      text: {
        primary: theme.text,
        secondary: theme.secondaryText,
      },
    },
  });

  return (
    <div className="experience-accord">
      <ThemeProvider theme={muiTheme}>
        {props.sections.map((section) => (
          <div key={section.title}>
            <h3>{section.title}</h3>
            {section.experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} theme={theme} />
            ))}
          </div>
        ))}
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
