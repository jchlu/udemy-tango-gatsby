import React from 'react'

import TangoLogoFB from '../images/tango-facebook-icon.svg'
import TangoLogoIN from '../images/tango-instagram-icon.svg'
import TangoLogoLI from '../images/tango-linkedin-icon.svg'

export default ({ social }) => {
  let href = ''
  const payload = social.map((item, i) => {
    switch (item.service) {
      case 'linkedIn':
        href = `https://linked.com/in/${item.profile}`
        return (
          <a key={i} target="_blank" rel="noopener noreferrer" href={href}>
            <img src={TangoLogoLI} alt="linkedin-logo" />
          </a>
        )
      case 'instagram':
        href = `https://instagram.com/${item.profile}`
        return (
          <a key={i} target="_blank" rel="noopener noreferrer" href={href}>
            <img src={TangoLogoIN} alt="instagram-logo" />
          </a>
        )
      case 'facebook':
        href = `https://facebook.com/${item.profile}`
        return (
          <a key={i} target="_blank" rel="noopener noreferrer" href={href}>
            <img className="facebook" src={TangoLogoFB} alt="facebook-logo" />
          </a>
        )
      default:
        return null
    }
  })
  return <span className="social">{payload}</span>
}
