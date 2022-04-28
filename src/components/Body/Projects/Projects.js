import React from "react";
import { ProjectData } from "../../../Data/ProjectsData";
import ProjectCard from "./ProjectCard";
import classes from "./Projects.module.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className={classes.projects} id="projects">
      <label className={classes.sectionTitle}>Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
