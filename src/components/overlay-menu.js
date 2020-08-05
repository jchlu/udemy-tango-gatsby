import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import WhiteLogo from '../images/tango_logo_white.svg'
import CloseButton from '../images/tango_close_button.svg'
import { Overlay } from './styles/OverlayMenuStyles'
import PropTypes from 'prop-types'

const OverlayMenu = ({ menuOpen, callback }) => {
  const {
    menu: {
      nodes: [{ items: menu }],
    },
  } = useStaticQuery(
    graphql`
      query Overlay {
        menu: allWordpressWpApiMenusMenusItems(
          filter: { wordpress_id: { eq: 5 } }
        ) {
          nodes {
            items {
              title
              url
            }
          }
        }
      }
    `
  )
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img src={WhiteLogo} className="whiteLogo" alt="tango-logo-white"></img>
        <ul className="overlayMenu">
          {menu.map((item, i) => (
            <li key={i}>
              <Link to={item.url} activeClassName="overlayActive">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={CloseButton} alt="tango-close-button" />
        </div>
      </div>
    </Overlay>
  )
}

OverlayMenu.propTypes = { menuOpen: PropTypes.bool, callback: PropTypes.func }

export default OverlayMenu
