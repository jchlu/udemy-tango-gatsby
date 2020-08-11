import React from 'react'

import tangoMail from '../images/tango-mail-icon.svg'

export default () => (
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
)
