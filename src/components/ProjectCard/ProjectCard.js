import React, { useEffect, useState } from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import Fade from "@mui/material/Fade";
import { style } from "glamor";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactMarkdown from "react-markdown";


export default function ProjectCard({ repo, theme }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const styles = style({
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };


  return (
    <Fade in={fadeIn} timeout={2000}>
      <div
        {...styles}
        key={repo.id}
        style={{ backgroundColor: theme.projectCard }}
        className="project-card"
      >
{repo.badge && (
  <div className={`project-badge badge-${repo.badge.color || 'primary'}`}>
    {repo.badge.icon && <span className="badge-icon">{repo.badge.icon}</span>}
    {repo.badge.text}
  </div>
)}


        {(repo.images || repo.videos) && (
          <div className="project-media-wrapper">
            <Slider {...sliderSettings}>
            
              {repo.images &&
                repo.images.map((img, idx) => (
                  <div key={`img-${idx}`}>
                    <img
                      src={require(`../../assets/images/projects/${img}`)}
                      alt={`${repo.name} screenshot ${idx}`}
                      className="project-media"
                    />
                  </div>
                ))}

          {repo.videos &&
            repo.videos.map((videoUrl, idx) => (
              <div key={`vid-${idx}`} className="project-video-container">
                <iframe
                  className="project-media"
                  src={videoUrl}
                  title={`Video ${idx}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}

            </Slider>
          </div>
        )}

        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>

<ReactMarkdown>
  {Array.isArray(repo.description)
    ? repo.description.map((item) => `- ${item}`).join("\n")
    : repo.description}
</ReactMarkdown>

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
