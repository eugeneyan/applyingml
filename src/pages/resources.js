import React from "react"
import { graphql } from "gatsby"
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
        <title>Guides and Teardowns | ApplyingML</title>
        <meta
          name="description"
          content="ML and non-ML related guides, as well as teardowns on ML systems."
        />
      </Helmet>
      <p>
        Guides and teardowns on how to apply machine learning in production.
        Spot an error or suggesting edits? Please{" "}
        <a href="mailto:applyingml@gmail.com">reach out</a> or make a{" "}
        <a
          href="https://github.com/eugeneyan/applyingml#contributing"
          target="_blank"
          rel="noreferrer"
        >
          pull request
        </a>
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
