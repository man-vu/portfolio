import React, { useEffect, useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Fade from "@mui/material/Fade";
import "./ScrollTopButton.css";

export default function ScrollTopButton({ theme }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={show} timeout={500}>
      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
        style={{ backgroundColor: theme.accentColor, color: theme.body }}
        aria-label="Scroll to top"
      >
        <ExpandLessIcon />
      </button>
    </Fade>
  );
}
