import React from "react";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import classes from "./Body.module.css";

function Body() {
  return (
    <div className={classes.body}>
      <section id="#about">
        <About />
      </section>
      <section id="#skills">
        <Skills />
      </section>
      <section id="#projects">
        <Projects />
      </section>
      <section id="#contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
