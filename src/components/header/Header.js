import React, { useState, useEffect } from "react";
import "./Header.css";
import Fade from "@mui/material/Fade";
import { greeting } from "../../portfolio.js";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { style } from "glamor";
import logoImage from "../../assets/images/letterm.png";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${theme.name === "light" ? "#F7D774" : "#646464"}`,
    },
  });

  const [currTheme, setCurrTheme] = useState(theme);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // trigger animation on mount
  }, []);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    }
  }

  const icon =
    theme.name === "dark" ? (
      <DarkModeIcon
        sx={{ fontSize: 24, color: theme.name === "light" ? "#F9D784" : "#A7A7A7" }}
      />
    ) : (
      <LightModeIcon
        sx={{ fontSize: 24, color: theme.name === "light" ? "#F9D784" : "#A7A7A7" }}
      />
    );

  return (
    <Fade in={fadeIn} timeout={1000}>
      <div className={theme.name === "light" ? "header-wrapper light" : "header-wrapper dark"}>
        <header className="header">
          {greeting && (
            <a href="/" className="logo">
              <span style={{ color: theme.text }}></span>
              <span className="logo-name" style={{ color: theme.text }}>
                <img className="logo-img" src={logoImage} alt="Man Vu's Brand Logo" />
                {greeting.logo_name} <span className="logo-title">{greeting.logo_title}</span>
              </span>
              <span style={{ color: theme.text }}></span>
            </a>
          )}

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu">
            <li>
              <a className="homei" href="/" style={{ borderRadius: 50, color: theme.text }}>
                Home
              </a>
            </li>
            <li>
              <a className="xp" href="#experiences" style={{ borderRadius: 50, color: theme.text }}>
                Professional Experience
              </a>
            </li>
            <li>
              <a className="ec" href="#educations" style={{ borderRadius: 50, color: theme.text }}>
                Education
              </a>
            </li>
            <li>
              <a className="projects" href="#projects" style={{ borderRadius: 50, color: theme.text }}>
                Projects
              </a>
            </li>
            <li>
              <a
                className="testimonials"
                href="#testimonials"
                style={{ borderRadius: 50, color: theme.text }}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a className="cr" href="#contact" style={{ borderRadius: 50, color: theme.text }}>
                Contact
              </a>
            </li>
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
