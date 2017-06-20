import React, { Component } from 'react';
import './App.css';

import 'font-awesome/css/font-awesome.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          <i className="fa fa-star"></i>
          Environment: {process.env.NODE_ENV}</h1>
      </div>
    );
  }
}

export default App;
