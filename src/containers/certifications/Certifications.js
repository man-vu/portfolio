import React, { useEffect, useState } from "react";
import "./Certifications.css";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import Fade from "@mui/material/Fade";

function Certifications(props) {
  const theme = props.theme;
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="main" id="certifications">
      <div className="certifications-header-div">
        <Fade in={fadeIn} timeout={2000}>
          <h1 className="certifications-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certifications-body-div">
        {certifications.certifications.map((cert, index) => (
          <CertificationCard key={index} certificate={cert} theme={theme} />
        ))}
      </div>
    </div>
  );
}

export default Certifications;
