import React from "react";
import { Link } from "react-router-dom";

const MobileBlogEntry = ({ children, title, image }) => {
  return (
    <div className="mobile-blog">
      <Link className="mobile-header" to="/">
        HOME
      </Link>
      <br />
      <img className="mobile-image" src={image} />
      {children}
    </div>
  );
};
export default MobileBlogEntry;
