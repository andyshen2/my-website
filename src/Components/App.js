
import React, {Component} from 'react';
import { useEffect, useState } from "react";
import NavBar from './navbar'
import Blog from './Blog'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


 class App extends Component{

  constructor(props) {

    super(props);
    this.state = {
      navlink: "",
    };
    this.reffArray = [];
    this.handleClick = this.handleClick.bind(this);
    this.myRef = React.createRef()

    this.setRef = this.setRef.bind(this);
  }

  setRef = (ref) => {
    // console.log(key)

    // this.myRef = ref; // Once this function fires, I know about my child :)
    this.reffArray.push(ref)
    // this.myRef = this.reffArray[0];
    
  };

  // setRef(ref) {


  handleClick = value => { 
    if(value == "blog"){
      this.myRef = this.reffArray[0];
    }else if(value == "contact") {
      this.myRef = this.reffArray[1];
    }
    window.scrollTo(0, this.myRef.offsetTop) 
  }
  
  render() {
   
    return (
      <div>
      <div className='toplevel'>
        <NavBar id="myHeader" handleClick={this.handleClick.bind(this)}  />
        
        <div className='wrapper'>
        
          <h1 className='child'>Andy Shen
            
            <br/>
            
            <p className='subtitle'>Bachelor of Computing and Mathematical Sciences </p>
            <p className='subtitle'>with First Class Honours, University of Waikato</p>
          </h1>
          
          <div className='parent'>
          
          </div>
          
        </div>
       
       

        <Blog  {...this.props} setRef={this.setRef} />
        

        {/* <button onClick={()=>this.handleClick(this.myRef)}>FUCK YOU!</button> */}

      </div>
      <Contact {...this.props} setRef={this.setRef} />
      </div>
  );}
}

export default App;
