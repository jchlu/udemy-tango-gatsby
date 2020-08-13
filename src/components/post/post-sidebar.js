import React from 'react'
import AuthorIcon from '../../images/tango-author-icon.svg'
import CategoryIcon from '../../images/tango-category-icon.svg'
import DateIcon from '../../images/tango-date-icon.svg'

import { SidebarMenu, SidebarWrapper } from './styles/PostSidebarStyles'
import { siteMetadata } from '../../../gatsby-config'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const PostSidebar = ({ date, author, categories }) => (
  <SidebarWrapper className="col-lg-3">
    <SidebarMenu>
      <li className="sidebar-menu-header">
        <img src={DateIcon} alt="date-icon" />
        <span>{date}</span>
      </li>
      <li className="sidebar-menu-header">
        <img src={AuthorIcon} alt="author-icon" />
        <span>{author}</span>
      </li>
      <li className="sidebar-menu-header">
        <img src={CategoryIcon} alt="category-icon" />
        <span>Categories</span>
        {categories.map(category =>
          category.slug !== siteMetadata.trendParent ? (
            <li key={category.id}>
              <Link to={`/trends/${category.slug}/`}>
                <span dangerouslySetInnerHTML={{ __html: category.name }} />
              </Link>
            </li>
          ) : null
        )}
      </li>
    </SidebarMenu>
  </SidebarWrapper>
)

PostSidebar.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
  categories: PropTypes.array,
}
export default PostSidebar
