import React from 'react';
import logo from './logo.svg';
import NavBar from './navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';


function App() {
  return (
    <div style={{backgroundColor: '#141414', minHeight: '100vh', paddingBottom: '20px'}}>
      <NavBar/>
    {/*<header className="App-header">*/}
      <div className="title">
        <h1>Andy Shen</h1>

        <img src={ require('./images/me.jpg') } className ="avatar"/>

        <li>Bachelor of Computing and Mathematical Sciences with First Class Honours, University of Waikato</li>
        <li>Software developer</li>
        <li>Contact - andyshen96@gmail.com</li>




      </div>
      <div className='social'>
        <hr className="line"/>
        <a href="https://github.com/andyshen2" className="column">
          <img src={ require('./images/github.png') } style={{ width: '60px', height: '60px' }}/>
        </a>
        <a href="https://www.linkedin.com/in/andy-shen-833017167/">
          <img src={ require('./images/linkchange.png') } style={{ width: '50px', height: '50px' }}/>
        </a>
      </div>

    {/*</header>*/}
    </div>
  );
}

export default App;
