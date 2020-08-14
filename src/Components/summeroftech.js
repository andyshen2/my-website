import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogEntry from "./BlogEntry";
import "./NavBar.css";
import "./Summeroftech.css";
import "./Blog.css";
import "./mobile.css";
import SummerLogo from "./images/summeroftech.png";
import Summer from "./Summer";
import MobileBlogEntry from "./MobileBlogEntry";

const SummerOfTech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  let width = window.innerWidth;
  if (width < 800) {
    return (
      <div className="mobile-blog">
        <MobileBlogEntry title="A Summer of Tech" image={SummerLogo}>
          <Summer />
        </MobileBlogEntry>
      </div>
    );
  } else {
    return (
      <div>
        <BlogEntry image={SummerLogo} className="summer">
          <Summer />
        </BlogEntry>
      </div>
    );
  }
};
export default SummerOfTech;
