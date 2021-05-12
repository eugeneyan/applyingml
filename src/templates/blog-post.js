import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
      <Layout>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <div>
          <h2 style= {{ fontSize: `2em`}}>{post.frontmatter.title}</h2>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Layout>
  )
}

export const query = graphql`
query MyQuery {
  mdx {
    frontmatter {
      title
      slug
    }
    body
  }
}
`
