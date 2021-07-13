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
        <meta name="description" content="About ApplyingML." />
      </Helmet>

      <p>
        1/3{" "}
        <a
          href="https://github.com/eugeneyan/applied-ml"
          target="_blank"
          rel="noreferrer"
        >
          <code>applied-ml</code>
        </a>
        , 1/3{" "}
        <a
          href="https://notebook.drmaciver.com/posts/2020-02-16-14:22.html"
          target="_blank"
          rel="noreferrer"
        >
          ghost knowledge
        </a>
        , 1/3{" "}
        <a href="https://tim.blog/podcast/" target="_blank" rel="noreferrer">
          Tim Ferriss Show.
        </a>
      </p>
      <p>
        1. What is <code>applied-ml</code>?
      </p>
      <p>
        Papers and tech blogs, by various companies, of machine learning applied
        in production, with details on problem formulation, system & training
        data design, scaling, results, what didn't work, etc.
      </p>
      <p>
        2. What is <i>ghost knowledge</i>?
      </p>
      <p>
        "It's knowledge that is present somewhere in the epistemic community,
        and is perhaps readily accessible to some central member of that
        community, but it is not really written down anywhere and it's not clear
        how to access it.
      </p>

      <p>
        Roughly what makes something ghost knowledge is two things: (i) It is
        readily discoverable if you have trusted access to expert members of the
        community, and (ii) it is almost completely inaccessible if you are
        not."
      </p>

      <p>
        3. What is <i>The Tim Ferriss Show</i>?
      </p>

      <p>
        It's a podcast where Tim Ferriss interviews and "deconstructs
        world-class performers from eclectic areas (investing, sports, business,
        art, etc.) to extract the tactics, tools, and routines you can use."
      </p>
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
