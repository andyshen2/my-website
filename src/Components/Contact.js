import React, {Component} from 'react';

import './Contact.css';
class Contact extends Component{
    constructor(props) {
        super(props);
        
    }
  render(){
      console.log(this.props)
    return (

    <div ref={this.props.setRef} className="contact">
       <div className='info'>
            <h1>Contact Me</h1>

            <a href="andyshen96@gmail.com">andyshen96@gmail.com</a><br/>
            <a href="https://github.com/andyshen2"><img className="github" src={require('./images/github.png')} /></a>
            <a href="https://www.linkedin.com/in/andy-shen-833017167/"><img className="github"  src={require('./images/linkedinlogo.png')} /></a>
        </div>

        
    </div>

    );
  }
}

export default Contact;
