import React from 'react'
import { graphql } from 'gatsby'

const indexPage = ({ data }) => {
  const { allMarkdownRemark: post } = data
  return (
    <div className="section">
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {post.edges[0].node.frontmatter.title}
      </h2>
    </div>
  )
}

export default indexPage

export const indexPageQuery = graphql`
  query indexPage {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          html
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`
