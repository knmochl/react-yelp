import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import topRoutes from './routes'

import 'font-awesome/css/font-awesome.css';


class App extends Component {

  get content() {
    return topRoutes()
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
