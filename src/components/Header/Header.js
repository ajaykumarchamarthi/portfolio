import React, { useState } from "react";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.header}>
      <div className={classes.logo}>AJ PORTFOLIO</div>
      <div className={classes.menu}>
        <div className={classes.webmenu}>
          <Web />
        </div>
        <div className={classes.mobilemenu}>
          <div className={classes.closeIcon} onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu size={28} />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
