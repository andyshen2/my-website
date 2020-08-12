import React, { useRef, useState } from "react";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import NavBar from "./navbar";
import Me from "./Me";
import MeMobile from "./MeMobile";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

const App = (props) => {
  var mobile = false;
  var reffArray = [];
  var myRef = useRef(null);

  const setRef = (ref) => {
    reffArray.push(ref);
  };
  const handleClick = (value) => {
    if (value == "blog") {
      myRef = reffArray[0];
    } else if (value == "contact") {
      myRef = reffArray[1];
    }
    window.scrollTo(0, myRef.offsetTop);
  };
  let width = window.innerWidth;

  if (width < 800) mobile = true;

  return (
    <div>
      <div className={mobile ? "mobile-blog" : "toplevel"}>
        {mobile ? (
          <MeMobile />
        ) : (
          <div>
            <NavBar handleClick={handleClick.bind(this)} /> <Me />
          </div>
        )}
        <Blog {...props} mobile={mobile} setRef={setRef} />
      </div>
      <Contact {...props} setRef={setRef} />
    </div>
  );
};

export default App;
