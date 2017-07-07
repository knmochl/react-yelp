import React from 'react'
import Map, { GoogleApiWrapper } from 'google-maps-react'
import styled from 'styled-components'

import cssVars from '../../lib/css-constants'
import { searchNearby } from '../../utils/googleApiHelpers'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

const MapWrapper = styled(Map)`
  overflow-y: scroll;
  display: flex;
  margin: 0;
  padding: 15px;

  height: 100vh;
  -webkit-box-orient: horizontal;
  -o-box-orient: horizontal;
`

const Content = styled.div`
  position: relative;
  flex: 2;
  top: ${cssVars.topbar.height};
`

export class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      places: [],
      pagination: null
    }
  }

  onReady(mapProps, map) {
    const {google} = this.props
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      }).catch((status, result) => {
        // There was an error
      })
  }

  render() {
    return (
      <div>
        <MapWrapper
          onReady={this.onReady.bind(this)}
          google={this.props.google}
          visible={false}>
          <Header />
          <Sidebar
            title={'Restaurants'}
            places={this.state.places}
            />
        </MapWrapper>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GAPI_KEY
})(Container)
