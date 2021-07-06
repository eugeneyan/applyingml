import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { MDXProvider } from "@mdx-js/react"

import CodeBlock from "./codeblock"
import "./layout.module.css"
import SubscriptionForm from "../components/subscribe"
import { Helmet } from "react-helmet"

const ListLink = props => (
  <li
    css={css`
      display: inline-block;
      margin-left: 0.75rem;
      margin-bottom: 0;
      font-family: Raleway;
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const ExternalLink = props => {
  if (props.href.includes("yourwebsite.com") || props.href[0] === "/") {
    return <Link to={props.href}>{props.children}</Link>
  }
  return (
    <Link to={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </Link>
  )
}

const BlockQuote = props => {
  return (
    <blockquote
      style={{
        borderLeft: ".25em solid #d9d9d9",
        paddingLeft: "1em",
        marginLeft: "0",
      }}
    >
      {props.children}
    </blockquote>
  )
}

const Footer = props => (
  <p
    css={css`
      font-family: Raleway;
      font-size: 11px;
      text-align: center;
      left: 0;
      width: 100%;
      bottom: 0;
      margin-bottom: 0;
      margin-top: 1em;
    `}
  >
    {props.children}
  </p>
)

const components = {
  code: CodeBlock,
  a: ExternalLink,
  blockquote: BlockQuote,
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
        padding: ${rhythm(0.75)} ${rhythm(1)};
        display: flex;
        flex-direction: column;
        min-height: 100vh;
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
          <ListLink to="/papers/">Papers</ListLink>
          <ListLink to="/resources/">Resources</ListLink>
          <ListLink to="/mentors/">Mentors</ListLink>
        </ul>
      </header>
      <hr style={{ color: `#d9d9d9`, border: `0` }}></hr>
      <MDXProvider components={components}>
        <div
          css={css`
            flex: 1 0 auto;
          `}
        >
          {children}
          <Helmet>
            <script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon='{"token": "caf1ae93682648a6b47a4dd49433de1b"}'
            ></script>
          </Helmet>
        </div>
      </MDXProvider>
      <SubscriptionForm></SubscriptionForm>
      <Footer>
      <br></br>
        ©{" "}
        <a href="https://eugeneyan.com" target="_blank" rel="noreferrer">
          Eugene Yan
        </a>{" "}
        {new Date().getFullYear()}
        {` • `}
        <Link to="/about/">About</Link>
        {` • `}
        <a
          href="https://github.com/eugeneyan/applyingml"
          target="_blank"
          rel="noreferrer"
        >
          Suggest edits
        </a>
        .
      </Footer>
    </div>
  )
}
