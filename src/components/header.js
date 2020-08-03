import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import TangoLogo from '../images/tango_logo.svg'
import Navigation from './navigation'
import { HeaderWrapper } from './styles/HeaderStyles'

export default () => {
  const {
    site,
    navigation: {
      nodes: [{ items: menu }],
    },
  } = useStaticQuery(graphql`
    {
      navigation: allWordpressWpApiMenusMenusItems(
        filter: { wordpress_id: { eq: 5 } }
      ) {
        nodes {
          items {
            title
            url
            wordpress_children {
              title
              url
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <HeaderWrapper menu={menu}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img src={TangoLogo} alt={site.siteMetadata.title} />
            </Link>
          </div>
          <div className="col-md-8 menu">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}
