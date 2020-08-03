import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import PageSidebar from '../components/page/sidebar'
import Breadcrumb from '../components/breadcrumb'
import PageHero from '../components/page-hero'

const PageContent = styled.article`
  margin: 20px 0 0 0;
`

const PageTemplate = ({
  data: { currentPage, parent, siblings, children },
}) => (
  <Layout>
    {currentPage.featured_media ? (
      <PageHero
        img={currentPage.featured_media.localFile.childImageSharp.fluid}
      />
    ) : null}
    <Breadcrumb parent={parent} />
    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
        <PageSidebar
          currentPage={currentPage}
          siblings={siblings}
          parent={parent}
        >
          {children}
        </PageSidebar>
        <PageContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </PageContent>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query PageTemplateQuery($id: String!, $wpParent: Int!, $wpId: Int!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      title
      content
      wordpress_parent
      acf {
        education
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    parent: wordpressPage(wordpress_id: { eq: $wpParent }) {
      link
      title
    }
    siblings: allWordpressPage(
      filter: { wordpress_parent: { eq: $wpParent } }
    ) {
      ...wordpress__PAGEConnectionFragment
    }
    children: allWordpressPage(filter: { wordpress_parent: { eq: $wpId } }) {
      ...wordpress__PAGEConnectionFragment
    }
  }

  fragment wordpress__PAGEConnectionFragment on wordpress__PAGEConnection {
    nodes {
      id
      link
      title
    }
  }
`
export default PageTemplate
