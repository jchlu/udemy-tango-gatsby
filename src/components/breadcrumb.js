import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { BreadCrumbWrapper } from './styles/BreadCrumbStyles'
import { siteMetadata } from '../../gatsby-config'

const Breadcrumb = ({ parent }) => (
  <BreadCrumbWrapper>
    <div className="container">
      <div className="row">
        <div className="col-lg-9 offset-lg-3">
          <Link to="/">
            <span>{siteMetadata.title}</span>
          </Link>{' '}
          &#8883;
          {parent ? (
            <>
              {' '}
              <Link to={parent.link}>
                <span dangerouslySetInnerHTML={{ __html: parent.title }} />
              </Link>{' '}
              &#8883;
            </>
          ) : null}
        </div>
      </div>
    </div>
  </BreadCrumbWrapper>
)

Breadcrumb.propTypes = { parent: PropTypes.object }

export default Breadcrumb
