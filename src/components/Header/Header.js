import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Topbar = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background: #48b5e9;
  width: 100%;
  padding: 0 25px;
  height: 80px;
  line-height: 80px;
  color: #fff;

  a {
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;

    line-height: 40px;
    h1 { font-size: 28px; }
  }

  section {
    position: absolute;
    top: 0px;
    right: 25px;
  }
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
