import React from 'react'
import { Link } from 'gatsby'

import tangoMail from '../../images/tango-mail-icon.svg'
import tangoPage from '../../images/tango-page-icon.svg'

import {
  SidebarWrapper,
  SidebarMenu,
  EducationBadge,
} from './styles/PageSidebarStyles'

const PageSidebar = ({ children, siblings, currentPage, parent }) => {
  const getParentContent = () =>
    // Page with no children, show default text
    children.nodes.length === 0 ? (
      <>
        <li className="sidebar-menu-header">
          <img src={tangoMail} alt="tango-mail" />
          <span>Mail list</span>
        </li>
        <p>
          Do you want to get updated when we publish new trend posts?
          <br />
          Just email us with your name, company name and mail address{' '}
          <a href="mailto:anders@tangobrandalliance.se">Anders Lindén</a>
        </p>
      </>
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
