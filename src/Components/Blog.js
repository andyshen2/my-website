import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import './Blog.css';
class Blog extends Component{
    constructor(props) {
        super(props);
        
    }
  render(){
      console.log(this.props)
    return (
    <div>
        <div  ref={this.props.setRef} className='blog'>
            <div  className='blogcard'>
                <img className='duck' src={require('./images/duck.png')} />
                <h1>  What The Duck</h1>< hr /><br/>
                <p>For my honours project, I wanted to centre it around machine learning and application building. This lead me to build a mobile application which classifies images of animals and plants by species.</p>
                <Link to="/app">READ MORE</Link>
                
            </div>
        </div>
        <div className='blog'>
            <div className='blogcard'>
                <img className='fergus' src={require('./images/fergus.png')} />
                <h1>Fergus</h1><hr/><br/>
                <p>
                    As apart of the Summer of Tech internship program,I spent a summer working at Fergus - a Service Product which provide job management solutions for the trade industry.
                </p>
                
                <Link to="/fergus">READ MORE</Link>
            </div>
            
            

        </div>
    </div>    

    );
  }
}

export default Blog;
