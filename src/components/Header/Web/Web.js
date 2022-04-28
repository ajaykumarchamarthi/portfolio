import React from "react";
import classes from "./Web.module.css";

function Web() {
  return (
    <ul className={classes.web}>
      <li className={classes.weboption}>
        <a href="#projects">Projects</a>
      </li>
      <li className={classes.weboption}>
        <a href="#skills">Skills</a>
      </li>
      <li className={classes.weboption}>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}

export default Web;
