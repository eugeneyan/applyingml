import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Mentor from "../components/mentor"

const MentorsPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Mentors = edges.map(edge => (
    <Mentor slug={edge.node.id} post={edge.node} />
  ))
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mentor interviews | ApplyingML</title>
        <meta
          name="description"
          content="Stories and advice from machine learning practitioners."
        />
      </Helmet>
      <p>
        Stories and advice from machine learning practitioners. Want to{" "}
        contribute an interview or recommend someone? Please make a{" "}
        <a
          href="https://github.com/eugeneyan/applyingml#contributing"
          target="_blank"
          rel="noreferrer"
        >
          pull request
        </a>{" "}
        or <a href="mailto:applyingml@gmail.com">email</a> us.
      </p>
      <p>{Mentors}</p>
    </Layout>
  )
}

export default MentorsPage

export const mentor = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "mentor" } } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            role
            date
            slug
          }
        }
      }
    }
  }
`
