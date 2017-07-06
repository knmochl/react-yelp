import React from 'react'
import styled from 'styled-components'

import Item from './Item'

const StyledListing = styled.div`
  height: 100%;
  overflow: auto;
  padding-bottom: 60px;
  margin: 0;
`

export class Listing extends React.Component {
  render() {
    return (
      <StyledListing>
      {this.props.places.map(place => {
        return (
          <Item place={place}
                onClick={this.props.onClick}
                key={place.id} />
        )
      })}
      </StyledListing>
    )
  }
}

export default Listing
