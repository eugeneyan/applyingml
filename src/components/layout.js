import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./codeblock"
import "./layout.module.css"

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-left: 1rem;
      margin-bottom: 0;
      font-family: Raleway;
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const ExternalLink = props => {
  if (props.href.includes("yourwebsite.com") || props.href[0] === "/") {
    return <a href={props.href}>{props.children}</a>
  }
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

const BlockQuote = props => {
  return (<blockquote style={{ borderLeft: '.25em solid #d9d9d9', paddingLeft: '1em', marginLeft: '0'}}>{props.children}</blockquote>)
}

const components = {
  code: CodeBlock,
  a: ExternalLink,
  blockquote: BlockQuote
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
        max-width: 668px;
        padding: ${rhythm(1)};
        padding-top: ${rhythm(1)};
      `}
    >
      <header style={{ marginBottom: `1rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1
            css={css`
              font-size: 1.25em;
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
      <hr style={{ color: `#d9d9d9`, border: `0` }}></hr>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  )
}
