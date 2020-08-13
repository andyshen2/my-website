import React from "react";

const BlogEntry = ({ children }) => {
  return (
    <div className="toplevel">
      <div className="blog">
        <div className="blogcard">
          <img className="duck" src={require("./images/duck.png")} />
          {children}
        </div>
      </div>
    </div>
  );
};
export default BlogEntry;
