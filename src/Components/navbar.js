import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavBar.css";
import { StickyContainer, Sticky } from "react-sticky";
// const ref = React.createRef();

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { about: true };

    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <ul className="nav">
          <li onClick={() => this.props.handleClick("blog")}>
            <a href="#" id="special">
              {" "}
              PORTFOLIO
            </a>
          </li>

          <li onClick={() => this.props.handleClick("contact")}>
            <a href="#" id="special">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
