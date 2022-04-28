import React from "react";
import SkillCard from "./SkillCard";
import classes from "./Skills.module.css";
import { SkillsData } from "./../../Common/Skills/SkillsData";

function Skills() {
  const data = SkillsData;
  return (
    <div className={classes.skills} id="skills">
      <label className={classes.sectionTitle}>Professional Skill Set</label>
      <p className={classes.tech}>
        These are the technologies I've worked with
      </p>
      <div className={classes.skillsContainer}>
        {data.map((item) => {
          return (
            <div className={classes.skillsSection}>
              <label className={classes.skillsSectionTitle}>{item.type}</label>
              <div className={classes.skillsList}>
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
