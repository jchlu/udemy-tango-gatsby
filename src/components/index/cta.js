import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import {
  StyledImg,
  CTAImage,
  CTAImageText,
  CTAImageTextWrapper,
} from './styles/CTAImagesStyles'

const CTA = ({ image, link, text }) => (
  <CTAImage>
    <StyledImg fluid={image} />
    <Link to={link}>
      <CTAImageTextWrapper>
        <CTAImageText>{text}</CTAImageText>
      </CTAImageTextWrapper>
    </Link>
  </CTAImage>
)
CTA.propTypes = {
  image: PropTypes.object,
  link: PropTypes.string,
  text: PropTypes.string,
}

export default CTA
