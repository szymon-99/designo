const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetPageQuery {
      allAirtable(filter: { table: { eq: "pages" } }) {
        nodes {
          data {
            name
          }
        }
      }
    }
  `)
  console.log(result)
  result.data.allAirtable.nodes.forEach(({ data: { name } }) => {
    const slug = slugify(name, { lower: true })
    createPage({
      path: `/${slug}`,
      component: path.resolve(`./src/templates/projects-template.tsx`),
      context: {
        name,
      },
    })
  })
}
