import React from 'react'
import { Link } from 'gatsby'

import SidebarContact from '../sidebar-contact'
import tangoPage from '../../images/tango-page-icon.svg'

import { SidebarWrapper, SidebarMenu } from './styles/ArchiveSidebarStyles'
import { siteMetadata } from '../../../gatsby-config'

const ArchiveSidebar = ({ catId, categories }) => {
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.slug === siteMetadata.trendParent) return -1
    if (y.slug === siteMetadata.trendParent) return 1
    return 0
  })

  return (
    <SidebarWrapper className="col-lg-3">
      <SidebarMenu>
        <li className="sidebar-menu-header">
          <img src={tangoPage} alt="tango-page" />
          <span>Trends</span>
        </li>

        {sortedCategories.map(category => {
          const { count, id, name, slug } = category
          if (count !== 0) {
            return slug !== 'okategoriserade' ? (
              <li
                key={id}
                className={id === catId ? 'sidebar-highlighted' : null}
              >
                <span className="count">{count}</span>
                {id === catId ? (
                  <span dangerouslySetInnerHTML={{ __html: name }} />
                ) : (
                  <Link to={`/trends/${slug}/`}>
                    <span dangerouslySetInnerHTML={{ __html: name }} />
                  </Link>
                )}
              </li>
            ) : null
          }
          return null
        })}

        <SidebarContact />
      </SidebarMenu>
    </SidebarWrapper>
  )
}

export default ArchiveSidebar
