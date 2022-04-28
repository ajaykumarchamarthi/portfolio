import React from "react";
import classes from "./SocialContact.module.css";

function SocialContact() {
  return (
    <div className={classes.socialContact}>
      <div className={classes.socialIconDiv}>
        <a
          href="https://www.linkedin.com/in/ajay-kumar-c-762290143/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("./../../../assets/icons/LinkedIn.png")}
            className={classes.socialIcon}
            alt="LinkedIn Icon"
          />
        </a>
      </div>

      <div className={classes.socialIconDiv}>
        <a
          href="https://github.com/ajaykumarchamarthi"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("./../../../assets/icons/Github.png")}
            className={classes.socialIcon}
            alt="Github Icon"
          />
        </a>
      </div>
    </div>
  );
}

export default SocialContact;
