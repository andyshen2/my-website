import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogEntry from "./BlogEntry";
import AppBlog from "./AppBlog";
import MobileBlogEntry from "./MobileBlogEntry";
import duck from "./images/duck.png";

const SpeciesApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  let width = window.innerWidth;
  if (width < 800) {
    return (
      <div>
        <MobileBlogEntry title="What The Duck" image={duck}>
          <AppBlog />
        </MobileBlogEntry>
      </div>
    );
  } else {
    return (
      <div>
        <BlogEntry image={duck} className="duck">
          <AppBlog />
        </BlogEntry>
      </div>
    );
  }
};

export default SpeciesApp;
