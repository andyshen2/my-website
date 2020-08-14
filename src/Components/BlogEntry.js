import React from "react";
import { Link } from "react-router-dom";
const BlogEntry = ({ children, image, className }) => {
  return (
    <div className="toplevel">
      <ul>
        <li>
          <Link id="special" to="/">
            HOME
          </Link>
        </li>
      </ul>
      <div className="blog">
        <div className="blogcard">
          <img className={className} src={image} />
          {children}
        </div>
      </div>
    </div>
  );
};
export default BlogEntry;
