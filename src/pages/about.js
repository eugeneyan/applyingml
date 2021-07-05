import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"

export default function About({ data }) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | ApplyingML</title>
        <meta
          name="description"
          content="About ApplyingML."
        />
      </Helmet>
      <p>Built with Gatsby. Such Wow. Very React.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
