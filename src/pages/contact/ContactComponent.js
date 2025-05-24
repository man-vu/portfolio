import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";

import Fade from "@mui/material/Fade";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div id="contact" className="contact-main">
      <div className="basic-contact">
        <Fade in={fadeIn} timeout={1000}>
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a
                {...styles}
                target="_blank"
                rel="noopener noreferrer"
                className="general-btn"
                href={greeting.resumeLink}
              >
                Download Resume
              </a>
            </div>
          </div>
        </Fade>

        <Fade in={fadeIn} timeout={1000}>
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a
                  {...styles}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="general-btn"
                  href={blogSection.link}
                >
                  My Facebook Profile
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
