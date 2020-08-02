import React, { Component } from "react";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import NavBar from "./navbar";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

class App extends Component {
  const;
  constructor(props) {
    super(props);
    this.state = {
      navlink: "",
    };
    this.reffArray = [];
    this.handleClick = this.handleClick.bind(this);
    this.myRef = React.createRef();

    this.setRef = this.setRef.bind(this);
  }

  setRef = (ref) => {
    this.reffArray.push(ref);
    console.log(this.reffArray);
  };

  handleClick = (value) => {
    if (value == "blog") {
      this.myRef = this.reffArray[0];
    } else if (value == "contact") {
      this.myRef = this.reffArray[1];
    }
    window.scrollTo(0, this.myRef.offsetTop);
  };

  render() {
    let width = window.innerWidth;
    if (width < 800) {
      return (
        <div>
          <div className="main-blog">
            <h1>Andy Shen </h1>
            <img className="main-images" src={require("./images/me.jpg")} />

            <div>
              <h1>Blog</h1>
              <div>
                <h2> What The Duck</h2>
                <hr />
                <br />
                <img
                  className="main-images"
                  src={require("./images/duck.png")}
                />
                <p>
                  For my honours project, I wanted to centre it around machine
                  learning and application building. This lead me to build a
                  mobile application which classifies images of animals and
                  plants by species.
                </p>
                <Link className="links" to="/app">
                  READ MORE
                </Link>
              </div>

              <div>
                <h2>Fergus</h2>
                <hr />
                <br />
                <img
                  className="main-images"
                  src={require("./images/fergus.png")}
                />
                <p>
                  As apart of the Summer of Tech internship program,I spent a
                  summer working at Fergus - a Service Product which provide job
                  management solutions for the trade industry.
                </p>
                <Link className="links" to="/fergus">
                  READ MORE
                </Link>
              </div>

              <div>
                <h2>myfreshproduce</h2>
                <hr />
                <br />
                <img
                  className="main-images"
                  src={require("./images/myfreshproduce.png")}
                />
                <p>
                  Myfreshproduce deliver fruit and vege packs to families and
                  companies all around Palmerston North. With the recent
                  lockdown happening, Jason from myfreshproduce received a spike
                  in demand and the business was growing quickly. During this
                  time{" "}
                  <a
                    name="jess"
                    href="https://www.linkedin.com/in/jessicawong888/"
                  >
                    Jess Wong
                  </a>{" "}
                  and I created an E-commerce store to help Jason be able to
                  handle this growth. It was an awesome experince working a with
                  a company so loved by the community. <br />
                  <br />
                  Check it out at:
                  <br />
                  <br />
                  <a className="links" href="https://myfreshproduce.co.nz">
                    myfreshproduce.co.nz
                  </a>
                </p>
              </div>
            </div>
          </div>

          <Contact {...this.props} setRef={this.setRef} />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar handleClick={this.handleClick.bind(this)} />
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
            <Blog {...this.props} setRef={this.setRef} />
          </div>
          <Contact {...this.props} setRef={this.setRef} />
        </div>
      );
    }
  }
}

export default App;
