import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { AboutWrapper } from './styles/AboutStyles'

export default () => {
  const {
    about: {
      content,
      featured_media: {
        localFile: {
          childImageSharp: {
            fluid: { src },
          },
        },
      },
    },
  } = useStaticQuery(graphql`
    {
      about: wordpressPage(wordpress_id: { eq: 47 }) {
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  return (
    <AboutWrapper>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6 aboutImage"
            style={{
              backgroundImage: `url(${src})`,
            }}
          />
          <div className="col-md-6 aboutText">
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
        </div>
      </div>
    </AboutWrapper>
  )
}
