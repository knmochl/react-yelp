import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import 'font-awesome/css/font-awesome.css';

class Home extends Component {
  render() {
    return (<div>Hello world</div>)
  }
}

class App extends Component {

  get content() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
        </div>
      </Router>
    )
  }

  render() {
    return (
      <div style={ { height: '100%' } }>
        {this.content}
      </div>
    )
  }
}

export default App;
