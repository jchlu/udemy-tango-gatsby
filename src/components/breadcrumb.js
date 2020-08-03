import React from 'react'
import { Link } from 'gatsby'

import { BreadCrumbWrapper } from './styles/BreadCrumbStyles'
import { siteMetadata } from '../../gatsby-config'

export default ({ parent }) => (
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
