import { Icon } from "@iconify/react";
import "./ProjectLinks.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


function ProjectLinks(props) {
  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank");
    if (win) {
      win.focus();
    }
  }

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
              <li
                className="software-skill-inline-languages"
                name={logo.skillName}
                onClick={() => openRepoinNewTab(logo.url)}
                style={{ cursor: "pointer" }}
              >
                <Icon icon={logo.iconifyClass} width="24" height="24" />
              </li>
            </OverlayTrigger>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLinks;
