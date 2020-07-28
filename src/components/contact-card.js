import React from 'react'
import SocialMedia from './social-media'

export default ({ name, email, number, social }) => (
  <div className="col-md-4">
    <h3>{name}</h3>
    <p className="tango-contact">
      <a href={`mailto://${email}`}>{email}</a>
    </p>
    <p className="tango-contact">
      <a href={`tel://${number}`}>{number}</a>
    </p>
    <SocialMedia social={social} />
  </div>
)
