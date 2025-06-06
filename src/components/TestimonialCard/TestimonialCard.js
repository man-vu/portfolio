import React, { useEffect, useState } from "react";
import "./TestimonialCard.css";
import Fade from "@mui/material/Fade";
import { style } from "glamor";

export default function TestimonialCard({ repo, theme }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

return (
  <div className="testimonial-wrapper">
    <Fade in={fadeIn} timeout={2000}>
<div
  {...styles}
  key={repo.id}
  style={{ backgroundColor: theme.projectCard }}
  className={`testimonial-card decorated-card ${theme.name === 'dark' ? 'dark-bg' : 'light-bg'}`}
>

        <div className="testimonial-name-div">
          <div className="avatar-circle">{repo.name[0]}</div>
<p
  className={`testimonial-name badge-name ${theme.name === 'dark' ? 'dark-badge' : 'light-badge'}`}
  style={{ color: theme.testimonialName }}
>
  {repo.name}
</p>

        </div>

        <p className="testimonial-description" style={{ color: theme.text }}>
          {repo.testimonial}
        </p>

        <p className="testimonial-position" style={{ color: theme.secondaryText }}>
          {repo.position}
        </p>
      </div>
    </Fade>
  </div>
);

}
