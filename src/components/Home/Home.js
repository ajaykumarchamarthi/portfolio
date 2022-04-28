import React from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default Home;
