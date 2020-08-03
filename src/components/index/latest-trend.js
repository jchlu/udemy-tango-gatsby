import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const LatestTrendWrapper = styled.div`
  text-align: center;
  margin: 40px 0;
`

export default () => {
  const {
    data: {
      nodes: [{ excerpt, title, slug }],
    },
  } = useStaticQuery(graphql`
    {
      data: allWordpressPost(limit: 1, sort: { fields: date, order: DESC }) {
        nodes {
          excerpt
          title
          slug
        }
      }
    }
  `)

  return (
    <LatestTrendWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Latest Trend</h1>
            <h4>{title}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
            />
            <Link to={`trends/${slug}/`}>
              <h5>Read More</h5>
            </Link>
          </div>
        </div>
      </div>
    </LatestTrendWrapper>
  )
}
