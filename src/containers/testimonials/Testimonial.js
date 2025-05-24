import React, { useState } from "react";
import "./Testimonial.css";
import TestimonialCard from "../../components/TestimonialCard/";

export default function Testimonials() {
  const [repo, _] = useState([]);

  return (
    <div className="testimonial-main" id="opensource">
      <h1 className="Testimonial-title">Open Source Testimonials</h1>
      <div className="">
        {repo.map((v, i) => {
          return <TestimonialCard repo={v} key={v.node.id} />;
        })}
      </div>
      <a className="resume-btn" href="https://github.com/vuminhman">
        More Testimonials (Github)
      </a>
    </div>
  );
}
