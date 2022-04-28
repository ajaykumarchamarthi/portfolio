import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Mobile.module.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className={classes.mobile}>
      <div onClick={() => setIsOpen(!isOpen)} className={classes.closeicon}>
        <AiOutlineClose size={24} />
      </div>
      <ul className={classes.mobileoptions}>
        <li className={classes.mobileoption} onClick={() => setIsOpen(!isOpen)}>
          <a href="#skills">Skills</a>
        </li>
        <li className={classes.mobileoption} onClick={() => setIsOpen(!isOpen)}>
          <a href="#projects">Projects</a>
        </li>
        <li className={classes.mobileoption} onClick={() => setIsOpen(!isOpen)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Mobile;
