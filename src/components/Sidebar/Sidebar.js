import React from 'react'
import styled from 'styled-components'

import cssVars from '../../lib/css-constants'
import Listing from '../Listing/Listing'

const SidebarWrapper = styled.div`
  height: 100%;
  top: ${cssVars.topbar.height};
  left: 0;
  overflow: hidden;

  position: relative;
  flex: 1;
  z-index: 0;
`

const Heading = styled.div`
  flex: 1;
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0 10px;

  h1 {
    font-size: 1.8em;
  }
`

export class Sidebar extends React.Component {
  render() {
    return (
      <SidebarWrapper>
        <Heading>
          <h1>{this.props.title}</h1>
        </Heading>
        <Listing places={this.props.places} />
      </SidebarWrapper>
    )
  }
}

export default Sidebar
