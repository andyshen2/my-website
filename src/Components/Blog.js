import React from "react";
import produce from "./images/myfreshproduce.png";
import fergus from "./images/fergus.png";
import duck from "./images/duck.png";
import BlogEntry from "./BlogEntry";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./Blog.css";

const Blog = ({ setRef }) => {
  return (
    <div id="blog" ref={setRef}>
      <BlogEntry className="duck" img={duck}>
        <h1> What The Duck</h1>
        <hr />
        <br />
        <p>
          For my honours project, I wanted to centre it around machine learning
          and application building. This lead me to build a mobile application
          which classifies images of animals and plants by species.
        </p>
        <Link id="special" to="/app">
          READ MORE
        </Link>
      </BlogEntry>

      <BlogEntry className="fergus" img={fergus}>
        <h1>Fergus</h1>
        <hr />
        <br />
        <p>
          As apart of the Summer of Tech internship program,I spent a summer
          working at Fergus - a Service Product which provide job management
          solutions for the trade industry.
        </p>

        <Link id="special" to="/fergus">
          READ MORE
        </Link>
      </BlogEntry>

      <BlogEntry className="myfreshproduce" img={produce}>
        <h1>myfreshproduce</h1>
        <hr />
        <br />
        <p>
          Myfreshproduce deliver fruit and vege packs to families and companies
          all around Palmerston North. With the recent lockdown happening, Jason
          from myfreshproduce received a spike in demand and the business was
          growing quickly. During this time{" "}
          <a name="jess" href="https://www.linkedin.com/in/jessicawong888/">
            Jess Wong
          </a>{" "}
          and I created an E-commerce store to help Jason be able to handle this
          growth. It was an awesome experince working a with a company so loved
          by the community. <br />
          <br />
          Check it out at:
          <br />
          <br />
          <a id="special" href="https://myfreshproduce.co.nz">
            myfreshproduce.co.nz
          </a>
        </p>
      </BlogEntry>
    </div>
  );
};
export default Blog;
