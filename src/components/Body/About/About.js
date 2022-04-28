import React from "react";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.about}>
      <div className={classes.aboutInfo}>
        <p className={classes.intro}>Hi, my name is </p>
        <h1>Ajay Kumar C</h1>
        <h2>Aspiring MERN Stack Developer.</h2>
        <p className={classes.aboutMe}>
          I'm MERN stack developer.Currently,I'm focused on building responsive
          full-stack web applications.
        </p>
        <a
          href={require("./../../../assets/Ajay Kumar-Resume.pdf")}
          target="_blank"
          rel="noreferrer"
          className={classes.btn}
          onClick
        >
          View Resume
        </a>
      </div>
    </div>
  );
}

export default About;
