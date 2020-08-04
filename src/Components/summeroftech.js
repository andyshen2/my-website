import React, { Component } from "react";
import "./NavBar.css";
import "./Summeroftech.css";
import "./Blog.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./mobile.css";
class SummerOfTech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount(props) {
    window.scrollTo(0, 0);
  }
  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    let width = window.innerWidth;
    if (width < 800) {
      return (
        <div className="main-blog">
          <Link className="mobile-header" to="/">
            HOME
          </Link>
          <h1>A Summer of Tech</h1>
          <hr />
          <br />

          <img
            className="main-images"
            src={require("./images/summeroftech.png")}
          />
          <p>
            During the summer of 18/19 I had the pleasure of working for Fergus
            Software as an intern. Fergus Software provides a Software as a
            Service product for job management for trade companies. This
            software can be used through a desktop browser or from a mobile
            application. I obtained an internship through the Summer of Tech
            which is a non-profit programme to connect students and companies
            together within the IT industry.{" "}
          </p>
          <p>
            Throughout the internship I worked on mostly bug fixing and
            automated test scripts. The test scripts were made with the
            framework Selenium. We created hundreds of tests for multiple parts
            of the website. At first I was mostly fixing bugs, these bug fixing
            jobs taught me alot about how their code base worked and how
            different parts of the code base worked together. I gained many
            frontend skills from CSS, HTML, jQuery and React from doing these
            bug fixes. Bug fixing also helped me gain backend skills by seeing
            how the different classes worked together, this was my first
            experience using PHP so I had to learn quickly. Towards the end of
            the internship I was given the task to redo the frontend styling of
            the Cordova mobile application login screen, I mostly used HTML, CSS
            and Javascript to complete this task. This was the first time for me
            working in a tech company and seeing an agile environment in full
            force was a great learning opportunity for me.
          </p>

          <p>
            I gained a lot of knowledge and upskilled myself during this
            internship. The biggest takeaway was not only the technical skills I
            gained but also the knowledge of how a start up company providing a
            SaaS product works, from how the funding worked to how important the
            work culture is. I learnt how to work in a team, take constructive
            feedback, ask for help when needed and to communicate effectively in
            a team. It was a great experience and I was very happy with the
            personal growth I gained from the internship.
          </p>
          <p>
            Summer of Tech provides job opportunities for students at multiple
            companies and to give vital work experience. Aside from their web
            platform which allows students to set up a profile with their CV and
            skills, Summer of Tech provides multiple networking opportunities to
            further establish the relationship between students and companies.
            For example, is the meet and greet where students get to talk to
            future employers from tech companies, both small and large. Summer
            of Tech made job hunting easier for me as a student and was an
            eye-opening experience. It was nice that you knew where you stood
            with the likelihood of getting the job and as all job offers came
            out the same date it made it a more pleasant experience because you
            know when you would get a job offer. I also appreciated the constant
            support throughout the internship. Every so often they would check
            up on you and see how things were going. I would recommend Summer of
            Tech to any student out there trying to get their first job within
            the tech industry.{" "}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            <li>
              <Link id="special" to="/">
                HOME
              </Link>
            </li>
          </ul>
          <div className="toplevel">
            <div className="blog">
              <div className="blogcard">
                <img
                  className="summer"
                  src={require("./images/summeroftech.png")}
                />
                <h1>A Summer of Tech</h1>
                <hr />
                <br />
                <p>
                  During the summer of 18/19 I had the pleasure of working for
                  Fergus Software as an intern. Fergus Software provides a
                  Software as a Service product for job management for trade
                  companies. This software can be used through a desktop browser
                  or from a mobile application. I obtained an internship through
                  the Summer of Tech which is a non-profit programme to connect
                  students and companies together within the IT industry.{" "}
                </p>
                <p>
                  Throughout the internship I worked on mostly bug fixing and
                  automated test scripts. The test scripts were made with the
                  framework Selenium. We created hundreds of tests for multiple
                  parts of the website. At first I was mostly fixing bugs, these
                  bug fixing jobs taught me alot about how their code base
                  worked and how different parts of the code base worked
                  together. I gained many frontend skills from CSS, HTML, jQuery
                  and React from doing these bug fixes. Bug fixing also helped
                  me gain backend skills by seeing how the different classes
                  worked together, this was my first experience using PHP so I
                  had to learn quickly. Towards the end of the internship I was
                  given the task to redo the frontend styling of the Cordova
                  mobile application login screen, I mostly used HTML, CSS and
                  Javascript to complete this task. This was the first time for
                  me working in a tech company and seeing an agile environment
                  in full force was a great learning opportunity for me.
                </p>

                <p>
                  I gained a lot of knowledge and upskilled myself during this
                  internship. The biggest takeaway was not only the technical
                  skills I gained but also the knowledge of how a start up
                  company providing a SaaS product works, from how the funding
                  worked to how important the work culture is. I learnt how to
                  work in a team, take constructive feedback, ask for help when
                  needed and to communicate effectively in a team. It was a
                  great experience and I was very happy with the personal growth
                  I gained from the internship.
                </p>
                <p>
                  Summer of Tech provides job opportunities for students at
                  multiple companies and to give vital work experience. Aside
                  from their web platform which allows students to set up a
                  profile with their CV and skills, Summer of Tech provides
                  multiple networking opportunities to further establish the
                  relationship between students and companies. For example, is
                  the meet and greet where students get to talk to future
                  employers from tech companies, both small and large. Summer of
                  Tech made job hunting easier for me as a student and was an
                  eye-opening experience. It was nice that you knew where you
                  stood with the likelihood of getting the job and as all job
                  offers came out the same date it made it a more pleasant
                  experience because you know when you would get a job offer. O
                  also appreciated the constant support throughout the
                  internship. Every so often they would check up on you and see
                  how things were going. I would recommend Summer of Tech to any
                  student out there trying to get their first job within the
                  tech industry.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SummerOfTech;
