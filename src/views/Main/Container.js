import React from 'react'
import Map, { GoogleApiWrapper } from 'google-maps-react'

import { searchNearby } from '../../utils/googleApiHelpers'
import Header from '../../components/Header/Header'

export class Container extends React.Component {
  onReady(mapProps, map) {
    const {google} = this.props
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        // We got some results and a pagination object
      }).catch((status, result) => {
        // There was an error
      })
  }

  render() {
    return (
      <div>
        <Header />
        Hello from the container
        <Map
          onReady={this.onReady.bind(this)}
          google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GAPI_KEY
})(Container)
