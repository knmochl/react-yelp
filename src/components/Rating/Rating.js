import React from 'react'
import styled from 'styled-components'

import cssVars from '../../lib/css-constants'

const RatingIcon = (props) => (<span>★</span>)

const TopStars = styled.div`
  color: ${cssVars.colors.highlight};
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${props => props.percentage * 100}%;
`

const BottomStars = styled.div`
  padding: 0;
  display: block;
  z-index: 0;
  color: ${cssVars.colors.lightgray};
`

const StarsContainer = styled.div`
  unicode-bidi: bidi-override;
  color: ${cssVars.colors.dark};
  font-size: 25px;
  margin: 0 auto;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 ${cssVars.colors.lightgray};
`

export class Rating extends React.Component {
  render() {
    const percentage = this.props.percentage || 0
    return (
      <StarsContainer>
        <TopStars percentage={percentage}>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </TopStars>
        <BottomStars>
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
          <RatingIcon />
        </BottomStars>
      </StarsContainer>
    )
  }
}

export default Rating
