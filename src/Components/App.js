import React, { useRef } from "react";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import NavBar from "./navbar";

const App = (props) => {
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
  return (
    <div>
      <NavBar handleClick={handleClick.bind(this)} />
      <div className="toplevel">
        <div className="wrapper">
          <h1 className="child">
            Andy Shen
            <br />
            <p className="subtitle">
              Bachelor of Computing and Mathematical Sciences{" "}
            </p>
            <p className="subtitle">
              with First Class Honours, University of Waikato
            </p>
          </h1>
          <div className="parent"></div>
        </div>
        <Blog {...props} setRef={setRef} />
      </div>
      <Contact {...props} setRef={setRef} />
    </div>
  );
};

export default App;
