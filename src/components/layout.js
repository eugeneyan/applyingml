import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from './codeblock'

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-right: 1rem;
      margin-bottom: 0;
      font-family: Raleway;
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const components = {
  code: CodeBlock
}

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 688px;
        padding: ${rhythm(1)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <header style={{ marginBottom: `2rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1
            css={css`
              margin-top: 0;
              margin-bottom: 0;
              display: inline-block;
              color: black;
            `}
          >
            {data.site.siteMetadata.title}
          </h1>
        </Link>
        <ul
          css={css`
            liststyle: none;
            float: right;
            margin-bottom: 0;
          `}
        >
          <ListLink to="/resources/">Resources</ListLink>
          <ListLink to="/mentors/">Mentors</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </header>
      <MDXProvider components={components}>
        {children}
      </MDXProvider>
    </div>
  )
}
