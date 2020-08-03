import React from 'react'
import { SidebarWrapper, SidebarMenu } from './styles/PageSidebarStyles'

export default ({ currentPage, parent, siblings }) => (
  <div className="col-lg-3">
    <SidebarWrapper>
      <SidebarMenu>SidebarMenu</SidebarMenu>
      Page Sidebar
    </SidebarWrapper>
  </div>
)
