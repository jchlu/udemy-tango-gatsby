import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

const ArchiveTemplate = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col">Archive Template</div>
      </div>
    </div>
  </>
)

export const query = graphql`
  query ArchiveTemplateQuery(
          $catId: Int!,
          $catName: String!,
          $catSlug: String!,
          $catCount: Int!,
          $categories: [String]!,
        ) {
          data: {}
  }
`

export default ArchiveTemplate
