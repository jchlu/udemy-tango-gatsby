import React from 'react'
import { Link } from 'gatsby'

import tangoPage from '../../images/tango-page-icon.svg'

import SidebarContact from '../sidebar-contact'

import {
  SidebarWrapper,
  SidebarMenu,
  EducationBadge,
} from './styles/PageSidebarStyles'

const PageSidebar = ({ children, siblings, currentPage, parent }) => {
  const getParentContent = () =>
    // Page with no children, show default text
    children.nodes.length === 0 ? (
      <SidebarContact />
    ) : (
      // Page with children, show menu
      <>
        <li className="sidebar-menu-header">
          <img src={tangoPage} alt="tango-page" />{' '}
          <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </li>
        {children.nodes.map(child => (
          <li key={child.id}>
            <Link to={child.link}>
              <span dangerouslySetInnerHTML={{ __html: child.title }} />
            </Link>
          </li>
        ))}
      </>
    )

  const getChildContent = () => (
    <>
      <li className="sidebar-menu-header">
        <img src={tangoPage} alt="tango-page" />{' '}
        <span dangerouslySetInnerHTML={{ __html: parent.title }} />
      </li>
      {siblings.nodes.map(child => (
        <li
          key={child.id}
          className={currentPage.id === child.id ? 'sidebar-highlighted' : ''}
        >
          {currentPage.id === child.id ? (
            <span dangerouslySetInnerHTML={{ __html: child.title }} />
          ) : (
            <Link to={child.link}>
              <span dangerouslySetInnerHTML={{ __html: child.title }} />
            </Link>
          )}
        </li>
      ))}
    </>
  )

  return (
    <SidebarWrapper className="col-lg-3">
      {currentPage.acf.education ? (
        <EducationBadge>
          <a href="mailto:anders@tangobrandalliance.se">Enrol in the course</a>
        </EducationBadge>
      ) : null}
      <SidebarMenu>
        {currentPage.wordpress_parent === 0
          ? getParentContent()
          : getChildContent()}
      </SidebarMenu>
    </SidebarWrapper>
  )
}

export default PageSidebar
