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
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
