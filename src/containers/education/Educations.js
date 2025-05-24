import React, { useEffect, useState } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import Fade from "@mui/material/Fade";

function Educations(props) {
  const theme = props.theme;
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade when component mounts
  }, []);

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade in={fadeIn} timeout={2000}>
          <h1 className="educations-header" style={{ color: theme.text }}>
            Credentials Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, index) => (
          <DegreeCard key={index} degree={degree} theme={theme} />
        ))}
      </div>
    </div>
  );
}

export default Educations;
