import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Breadcrumb from '../components/breadcrumb'
import Layout from '../components/layout'
import PageHero from '../components/page-hero'
import ArchiveSidebar from '../components/archive/archive-sidebar'
import Pagination from '../components/archive/pagination'
import {
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from './styles/archiveStyles'
import { siteMetadata } from '../../gatsby-config'

const ArchiveTemplate = ({ data: { file, allWordpressPost } }) => (
  <Layout>
    <PageHero img={file.childImageSharp.fluid} />
    <Breadcrumb
      parent={{
        link: `/trends/${siteMetadata.trendParent}`,
        title: 'trends',
      }}
    />
    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
        <ArchiveSidebar catId={catId} categories={categories} />
        <PageContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: catName }}></h1>
        </PageContent>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query ArchiveTemplateQuery($catId: String!, $limit: Int!, $skip: Int!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $catId } } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        title
        excerpt
        slug
        date(formatString: "DD MMM, YYYY")
      }
    }
    file(absolutePath: { eq: "archive_headerImage.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ArchiveTemplate
