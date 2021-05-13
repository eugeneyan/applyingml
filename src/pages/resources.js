import React from "react"
import { graphql } from "gatsby"

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
      <p>
        Guides, teardowns, and other relevant material on how to apply machine
        learning in production. Have a suggestion? Reach out to{" "}
        <a
          href="https://twitter.com/eugeneyan"
          target="_blank"
          rel="noreferrer"
        >
          @eugeneyan
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
