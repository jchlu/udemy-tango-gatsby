const path = require('path')
const slash = require('slash')
const { graphql } = require('gatsby')
const { node } = require('prop-types')
const { paginate } = require('gatsby-awesome-pagination')

const archiveTemplate = path.resolve('./src/templates/archive.js')
const pageTemplate = path.resolve('./src/templates/page.js')
const postTemplate = path.resolve('./src/templates/post.js')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      allWordpressPage: { nodes: pages },
      allWordpressPost: { nodes: posts },
      allWordpressCategory: { nodes: categories },
    },
  } = await graphql(`
    query PagesQuery {
      allWordpressPage(filter: { status: { eq: "publish" } }) {
        nodes {
          id
          wordpress_id
          wordpress_parent
          status
          link
        }
      }
      allWordpressPost {
        nodes {
          id
          link
          status
          categories {
            id
          }
        }
      }
      allWordpressCategory {
        nodes {
          count
          id
          name
          slug
        }
      }
    }
  `)

  if (categories.errors) {
    throw new Error(categories.errors)
  } else if (pages.errors) {
    throw new Error(pages.errors)
  }

  categories.forEach(category => {
    const filteredPosts = posts.filter(({ categories }) =>
      categories.some(postCategory => postCategory.id === category.id)
    )
    if (filteredPosts.length > 0) {
      const {
        id: catId,
        name: catName,
        slug: catSlug,
        count: catCount,
      } = category
      paginate({
        createPage,
        items: filteredPosts,
        itemsPerPage: 10,
        pathPrefix: `/trends/${catSlug}`,
        component: slash(archiveTemplate),
        context: {
          catId,
          catName,
          catSlug,
          catCount,
          categories,
        },
      })
    }
  })

  if (posts.errors) {
    throw new Error(posts.errors)
  }
  pages.forEach(page => {
    const {
      link: path,
      id,
      wordpress_parent: wpParent,
      wordpress_id: wpId,
    } = page
    createPage({
      path,
      component: slash(pageTemplate),
      context: {
        id,
        wpParent,
        wpId,
      },
    })
  })
}
