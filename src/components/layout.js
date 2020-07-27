import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap-grid.css'
import './layout.css'

import Header from './header'
import OverlayMenu from './overlay-menu'
import Hamburger from './hamburger'
import Footer from './footer'

const Primary = styled.main`
  padding: 110px 0 0 0;
`

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <Hamburger handleOverlayMenu={handleOverlayMenu} />
      <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
      <Primary id='primary' className='content-area'>
        <main id='main' className='site-main' role='main'>
          {children}
        </main>
      </Primary>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout