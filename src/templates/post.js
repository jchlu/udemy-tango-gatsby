import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Breadcrumb from '../components/breadcrumb'
import { siteMetadata } from '../../gatsby-config'
import styled from 'styled-components'
import PostSidebar from '../components/post/post-sidebar'

const PostContent = styled.article`
  margin: 20px 0 0 0;
`

const PostTemplate = ({
  data: {
    post: {
      date,
      author: { name: author },
      categories,
      content,
      title,
    },
  },
  pageContext: { id },
}) => (
  <Layout>
    <Breadcrumb
      parent={{ link: `/trends/${siteMetadata.trendParent}`, title: 'trends' }}
    />

    <div className="container">
      <div className="row" style={{ marginBottom: '40px' }}>
        <PostSidebar date={date} author={author} categories={categories} />
        <PostContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </PostContent>
      </div>
    </div>
  </Layout>
)

export default PostTemplate

export const postQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      date(formatString: "DD MMM YYYY")
      title
      content
      author {
        name
      }
      categories {
        id
        name
        slug
      }
    }
  }
`
