import React from 'react'
import styled from 'styled-components'

import Rating from '../Rating/Rating'

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eeeeee;
  padding: 10px;
  text-decoration: none;
  &:last-child {
    border-bottom: none;
  }
`

const ItemName = styled.h1`
  flex: 2;
  &:hover {
    color: blue;
  }
`

export class Item extends React.Component {
  render() {
    const {place} = this.props
    return (
      <StyledItem>
        <ItemName>{place.name}</ItemName>
        <Rating percentage={place.rating/5}/>
      </StyledItem>
    )
  }
}

export { StyledItem, ItemName }

export default Item
