import React from 'react'
import { Link } from 'gatsby'

import {
  StyledImg,
  CTAImage,
  CTAImageText,
  CTAImageTextWrapper,
} from './styles/CTAImagesStyles'

export default ({ image, link, text }) => (
  <CTAImage>
    <StyledImg fluid={image} />
    <Link to={link}>
      <CTAImageTextWrapper>
        <CTAImageText>{text}</CTAImageText>
      </CTAImageTextWrapper>
    </Link>
  </CTAImage>
)
