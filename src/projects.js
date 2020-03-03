import React from 'react';
import NavBar from './navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Projects() {
  return (

    <div>
      <div style={{backgroundColor: '#141414', minHeight: '100vh', paddingBottom: '20px'}}>

        <NavBar/>

        <div className= "blogcard">
          <Link to="/summeroftech">
            <div className="blogheader">
              <img src={ require('./images/summeroftech.png')}  style={{width: '50%', height: '50%'}} /><br/>
              <hr className="line"/>
              <h1>My Internship at Fergus Software</h1>
            </div>
          </Link>
        </div>

        <div className= "blogcard">
        <Link to="/speciesapp">
          <div className="blogheader">
            <img src={ require('./images/original.jpg')}  style={{width: '30%', height: '30%'}} /> <hr className="line"/>
            <h1>Species Identification on a Mobile</h1>
          </div>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default Projects;
