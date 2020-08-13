import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BlogEntry from "./BlogEntry";
import AppBlog from "./AppBlog";
import "./NavBar.css";
import "./App.css";
import "./Species.css";
import "./Blog.css";
import "./mobile.css";
import MobileBlogEntry from "./MobileBlogEntry";

const SpeciesApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  let width = window.innerWidth;
  if (width < 800) {
    return (
      <div>
        <MobileBlogEntry>
          <AppBlog />
        </MobileBlogEntry>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li className="nav">
            <Link id="special" to="/">
              HOME
            </Link>
          </li>
        </ul>
        <BlogEntry>
          <AppBlog />
        </BlogEntry>
      </div>
    );
  }
};

export default SpeciesApp;
