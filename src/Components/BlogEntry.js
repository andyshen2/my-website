import React, { Children } from "react";

const BlogEntry = ({ children, className, img, mobile }) => (
  <div className="blog">
    <img className={mobile ? "mobile-image" : className} src={img} />
    <div className="blogcard">{children}</div>
  </div>
);

export default BlogEntry;
