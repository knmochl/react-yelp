import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

class Home extends Component {
  render() {
    return (<div>Hello world</div>)
  }
}

export const topRoutes = () => (
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Redirect from="*" to="/" />
    </div>
  </Router>
)

export default topRoutes
