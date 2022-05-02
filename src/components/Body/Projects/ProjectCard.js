import React from "react";
import classes from "./ProjectCard.module.css";
import { GrDeploy } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";
import { DiNodejsSmall } from "react-icons/di";

function ProjectCard({ project }) {
  return (
    <div className={classes.projectCard}>
      <div className={classes.projectInfo}>
        <h2 className={classes.projectTitle}>{project.title}</h2>
        <div className={classes.projectLinks}>
          {project.demo && (
            <a
              className={classes.projectLink}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <div className={classes.linkButton}>
                <GrDeploy size={18} />
                <span className={classes.linkContent}>Demo</span>
              </div>
            </a>
          )}
          {project.frontend && (
            <a
              className={classes.projectLink}
              href={project.frontend}
              target="_blank"
              rel="noreferrer"
            >
              <div className={classes.linkButton}>
                <GrReactjs size={18} />
                <span className={classes.linkContent}>Frontend</span>
              </div>
            </a>
          )}
          {project.backend && (
            <a
              className={classes.projectLink}
              href={project.backend}
              target="_blank"
              rel="noreferrer"
            >
              <div className={classes.linkButton}>
                <DiNodejsSmall size={21} />
                <span className={classes.linkContent}>Backend</span>
              </div>
            </a>
          )}
        </div>
        <p className={classes.description}>{project.about}</p>
        <div className={classes.projectTags}>
          {project.tags.map((tag) => {
            return <label className={classes.tag}>{tag}</label>;
          })}
        </div>
      </div>
      <img
        src={project.image}
        className={classes.projectPhoto}
        alt="Project Pic"
      />
    </div>
  );
}

export default ProjectCard;
