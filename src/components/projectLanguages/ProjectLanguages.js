
import { Icon } from "@iconify/react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo) => (
            <OverlayTrigger
              key={logo.name}
              placement="top"
              overlay={
                <Tooltip id={`tooltip-${logo.name}`}>
                  <strong>{logo.name}</strong>
                </Tooltip>
              }
            >
              <li className="software-skill-inline-languages" name={logo.skillName}>
                <Icon icon={logo.iconifyClass} width="24" height="24" color={logo.color || "inherit"} />
              </li>
            </OverlayTrigger>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
