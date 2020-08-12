import React from 'react'

import { SidebarMenu, SidebarWrapper } from './styles/PostSidebarStyles'

const PostSidebar = () => (
  <div className="col-lg-3">
    <SidebarWrapper>
      <SidebarMenu />
      <div>Post Sidebar</div>
    </SidebarWrapper>
  </div>
)

export default PostSidebar
