import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
          `}
        >
          Some sample posts
        </h1>
        {/* <h3>{data.allMarkdownRemark.totalCount} Posts</h3> */}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                ></span>
              </h3>
              <p>{node.frontmatter.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            description
          }
          fields {
              slug
          }
          timeToRead
          html
        }
      }
    }
  }
`
