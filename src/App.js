import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Container from './views/Main/Container';

import 'font-awesome/css/font-awesome.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Container} />
        </div>
      </Router>
    )
  }
}

export default App;
