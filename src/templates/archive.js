import React from 'react'
import { Link, graphql } from 'gatsby'
import { siteMetadata } from '../../gatsby-config'

import Layout from '../components/layout'
import ArchiveSidebar from '../components/archive/archive-sidebar'
import BreadCrumb from '../components/breadcrumb'
import Pagination from '../components/archive/pagination'
import PageHero from '../components/page-hero'

import {
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from './styles/archiveStyles'

const archiveTemplate = ({
  data: {
    file,
    allWordpressPost: { nodes },
  },
  pageContext: {
    catId,
    catName,
    catSlug,
    categories,
    humanPageNumber,
    numberOfPages,
  },
}) => (
  <Layout>
    <PageHero img={file.childImageSharp.fluid} />
    <BreadCrumb
      parent={{
        link: `/trends/${siteMetadata.trendParent}`,
        title: 'trends',
      }}
    />

    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
        <ArchiveSidebar catId={catId} categories={categories} />
        <PageContent className="col-lg-9">
          <Pagination
            catSlug={catSlug}
            page={humanPageNumber}
            totalPages={numberOfPages}
          />
          <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          {nodes.map(post => (
            <article key={post.id} className="entry-content">
              <Link to={`/trends/${post.slug}/`}>
                <StyledH2 dangerouslySetInnerHTML={{ __html: post.title }} />
              </Link>
              <StyledDate
                dangerouslySetInnerHTML={{
                  __html: post.date,
                }}
              />
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <StyledReadMore to={`/trends/${post.slug}`}>
                Read More
              </StyledReadMore>
              <div className="dot_divider">
                <hr />
              </div>
            </article>
          ))}
          <Pagination
            catSlug={catSlug}
            page={humanPageNumber}
            totalPages={numberOfPages}
          />
        </PageContent>
      </div>
    </div>
  </Layout>
)

export default archiveTemplate

export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $catId } } } }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        title
        excerpt
        slug
        date(formatString: "DD MMM YYYY")
      }
    }
    file(relativePath: { eq: "archive_headerImage.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
