import React from 'react'
import SocialMedia from './social-media'
import PropTypes from 'prop-types'

const ContactCard = ({ name, email, number, social }) => (
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

ContactCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.string,
  social: PropTypes.array,
}

export default ContactCard
