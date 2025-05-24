import { useEffect, useState } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import Fade from "@mui/material/Fade";

function SkillSection(props) {
  const theme = props.theme;
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in animation once component mounts
  }, []);

  return (
    <div>
      {skills.data.map((skill, index) => {
        return (
          <div key={index} className="skills-main-div">
            <div className="skills-text-div">
              <Fade in={fadeIn} timeout={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade in={fadeIn} timeout={1500}>
                <div>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </div>
              </Fade>
              <Fade in={fadeIn} timeout={2000}>
                <div>
                  {skill.skills.map((sentence, idx) => (
                    <p
                      key={idx}
                      className="subTitle skills-text"
                      style={{ color: theme.primaryText }}
                    >
                      {sentence}
                    </p>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillSection;
