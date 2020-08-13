import React from "react";
import { Link } from "react-router-dom";

const MobileBlogEntry = ({ children }) => {
  return (
    <div className="mobile-blog">
      <Link className="mobile-header" to="/">
        HOME
      </Link>
      <h1>What The Duck</h1>
      <hr />
      <br />
      <img className="mobile-image" src={require("./images/duck.png")} />
      {children}
    </div>
  );
};
export default MobileBlogEntry;
