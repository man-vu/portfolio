import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import "./EducationComponent.css";
import Fade from "@mui/material/Fade";

function Education(props) {
  const theme = props.theme;
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="education-main">
      <div className="basic-education">
        <Fade in={fadeIn} timeout={2000}>
          <div className="heading-div">

            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively attend community tech events, showcasing a
                commitment to continuous learning and networking within the
                tech industry.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={theme} />
        <Certifications theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default Education;
