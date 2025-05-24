import React, { useEffect, useState } from "react";
import "./CertificationCard.css";
import Fade from "@mui/material/Fade";
import { style } from "glamor";

function CertificationCard(props) {
  const { certificate, theme } = props;

  const styles = style({
    boxShadow: `0px 2px 5px ${certificate.color_code}`,
    border: `1px solid ${certificate.color_code}`,
    ":hover": {
      boxShadow: `0 5px 15px ${certificate.color_code}`,
    },
  });

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in on mount
  }, []);

  return (
    <Fade in={fadeIn} timeout={2000}>
      <div className="cert-card" {...styles}>
        <div className="content">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="content-overlay"></div>
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assets/images/${certificate.logo_path}`)}
                alt={certificate.alt_name}
              />
            </div>
          </a>
        </div>

        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: theme.text }}>
            {certificate.title}
          </h2>
          <h3
            className="cert-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
        </div>

        <div className="cert-footer">
          {certificate.certificate_link && (
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="see-projects-btn">See Certification</button>
            </a>
          )}

          {certificate.projects && (
            <a
              href={certificate.projects}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="see-projects-btn">See Projects</button>
            </a>
          )}
        </div>
      </div>
    </Fade>
  );
}

export default CertificationCard;
