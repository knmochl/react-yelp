import React from 'react'
import styled from 'styled-components'

const SidebarWrapper = styled.div`
  height: 100%;
  top: 80px;
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
      </SidebarWrapper>
    )
  }
}

export default Sidebar
