import React from 'react'
import styled from 'styled-components'

import cssVars from '../../lib/css-constants'

const RatingIcon = (props) => (<span>★</span>)

const TopStars = styled.div`
  color: ${cssVars.colors.highlight};
  padding: 0;
  position: aboslute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
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
  width: 100px;
  margin: 0 auto;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 ${cssVars.colors.lightgray};
`

export class Rating extends React.Component {
  render() {
    return (
      <StarsContainer>
        <TopStars>
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

  }
}

export default Rating
