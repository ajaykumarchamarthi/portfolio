import React from "react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
