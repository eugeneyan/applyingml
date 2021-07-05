import React from "react"
import { graphql } from "gatsby"

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
      <p>
        Stories and advice from machine learning practitioners. Want to{" "}
        <a
          href="https://github.com/eugeneyan/applyingml#mentor-interviews"
          target="_blank"
          rel="noreferrer"
        >contribute an interview</a> or recommend someone? Reach out to{" "}
        <a
          href="https://twitter.com/eugeneyan"
          target="_blank"
          rel="noreferrer"
        >
          @eugeneyan
        </a>
        .
      </p>
      <p>{Mentors}</p>
    </Layout>
  )
}

export default MentorsPage

export const mentor = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "mentor" } }}
      sort: { fields: [frontmatter___date], order: DESC }
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
