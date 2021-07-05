import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import CategorySection from "../components/category"

const ResourcesPage = ({
  data: {
    dataYaml: { categories },
  },
}) => {
  const Categories = categories.map(category => (
    <CategorySection category={category} />
  ))

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Resources and Guides | ApplyingML</title>
        <meta
          name="description"
          content="ML and non-ML related guides, as well as teardowns on ML systems."
        />
      </Helmet>
      <p>
        Guides, teardowns, and other relevant material on how to apply machine
        learning in production. Have a suggestion? Reach out to{" "}
        <Link
          to="https://twitter.com/eugeneyan"
          target="_blank"
          rel="noreferrer"
        >
          @eugeneyan
        </Link>
        .
      </p>
      <p>{Categories}</p>
    </Layout>
  )
}

export default ResourcesPage

export const category = graphql`
  query {
    dataYaml {
      categories {
        title
        sections {
          slug
          title
        }
      }
    }
  }
`
