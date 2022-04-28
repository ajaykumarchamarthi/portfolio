import React from "react";
import classes from "./SkillCard.module.css";

function SkillCard({ skill }) {
  return (
    <div className={classes.skillCard}>
      <div className={classes.skillIcon}>{skill.icon}</div>
      <label className={classes.skillName}>{skill.name}</label>
    </div>
  );
}

export default SkillCard;
