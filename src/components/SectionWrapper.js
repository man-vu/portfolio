import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./SectionWrapper.css";

export default function SectionWrapper({ children, animationClass }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(inView);
  }, [inView]);

  return (
    <div ref={ref} className={`section-wrapper ${visible ? animationClass : "hidden"}`}>
      {children}
    </div>
  );
}
