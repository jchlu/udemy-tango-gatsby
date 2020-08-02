const path = require('path')
const slash = require('slash')
const { graphql } = require('gatsby')
const { node } = require('prop-types')

const pageTemplate = path.resolve('./src/templates/page.js')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      allWordpressPage: { nodes: pages },
    },
  } = await graphql(`
    query PagesQuery {
      allWordpressPage {
        nodes {
          id
          wordpress_id
          wordpress_parent
          status
          link
        }
      }
    }
  `)

  if (pages.errors) {
    throw new Error(pages.errors)
  }
  pages.forEach(page => {
    if (page.status === 'publish') {
      const {
        link: path,
        id,
        wordpress_parent: parent,
        wordpress_id: wpId,
      } = page
      createPage({
        path,
        component: slash(pageTemplate),
        context: {
          id,
          parent,
          wpId,
        },
      })
    }
  })
}
