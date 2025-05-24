import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import Fade from "@mui/material/Fade";
import { testimonialsHeader, testimonials } from "../../portfolio.js";
import "./Testimonials.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function Testimonials(props) {
  const theme = props.theme;
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div id="testimonials" className="testimonials-main">
      <div className="basic-testimonials">
        <Fade in={fadeIn} timeout={2000}>
          <div className="testimonials-heading-div">
            <div className="testimonials-heading-text-div">
              <h1
                className="testimonials-heading-text"
                style={{ color: theme.text }}
              >
                {testimonialsHeader.title}
              </h1>
              <p
                className="testimonials-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {testimonialsHeader.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {testimonials.data.map((repo, index) => (
        <TestimonialCard key={index} repo={repo} theme={theme} />
      ))}

      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Testimonials;
