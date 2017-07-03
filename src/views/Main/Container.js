import React from 'react'
import Map, { GoogleApiWrapper } from 'google-maps-react'

import Header from '../../components/Header/Header'

export class Container extends React.Component {
  render() {
    return (
      <div>
        <Header />
        Hello from the container
        <Map
          google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GAPI_KEY
})(Container)
