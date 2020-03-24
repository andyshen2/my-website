
import React, { Component } from 'react';
import './App.css';
import Blog from './Blog';
import Contact from './Contact';
import NavBar from './navbar';

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


 class App extends Component{
  const 
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

    this.reffArray.push(ref)
    

  };


  handleClick = value => { 
    if(value == "blog"){
      this.myRef = this.reffArray[0];
      // console.log(this.reffArray[0])
    }else if(value == "contact") {
      this.myRef = this.reffArray[1];
    }
    
    console.log(this.myRef.getBoundingClientRect())
    console.log(this.myRef.offsetTop)
    console.log(this.myRef.getBoundingClientRect().y)
    window.scrollTo(0, this.myRef.offsetTop)   
    // this.ref.scrollTop;
    // window.scrollTop();
    // this.myRef.scrollIntoView({ behavior: 'smooth'});
    // ReactDOM.findDOMNode(this.myRef).scrollIntoView({block: 'end', behavior: 'smooth'});
  }
  
  render() {

    return (
      
      <div>
        <NavBar handleClick={this.handleClick.bind(this)}  />
        <div className='toplevel'>
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
        </div>
        <Contact {...this.props} setRef={this.setRef} />
      </div>
  );}
}

export default App;
