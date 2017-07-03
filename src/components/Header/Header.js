import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Topbar = styled.div`
  border: 1px solid red;
`

export class Header extends React.Component {
  render() {
    return (
      <Topbar>
        <Link to="/"><h1>Yelp</h1></Link>
        <section>
          Fullstack.io
        </section>
      </Topbar>
    )
  }
}

export default Header
