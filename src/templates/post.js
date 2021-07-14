import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.mdx
  if (post.frontmatter.type === "page") {
    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image={post.frontmatter.image}
          pathname={post.frontmatter.slug}
          article
        />
        <div>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Layout>
    )
  } else if (post.frontmatter.type === "resource") {
    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image={post.frontmatter.image}
          pathname={post.frontmatter.slug}
          article
        />
        <div>
          <h2 style={{ fontSize: `2em` }}>{post.frontmatter.title}</h2>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Layout>
    )
  } else if (post.frontmatter.type === "mentor") {
    return (
      <Layout>
        <SEO
          title={post.frontmatter.name + " - " + post.frontmatter.role}
          description={
            "Interview with " +
            post.frontmatter.name +
            " on applying machine learning at work"
          }
          image={post.frontmatter.image}
          pathname={post.frontmatter.slug}
          article
        />
        <div>
          <h2 style={{ fontSize: `1.75em` }}>
            {post.frontmatter.name + " - " + post.frontmatter.role}
          </h2>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Layout>
    )
  } else {
    return null
  }
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        name
        role
        slug
        type
      }
      body
    }
  }
`
