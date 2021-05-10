import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li className="header-link">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3
            css={css`
              margin-top: 0;
              margin-bottom: 0;
              display: inline-block;
              color: black;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul
          css={css`
            liststyle: none;
            float: right;
            margin-bottom: 0;
          `}
        >
          <ListLink to="/posts/">Posts</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
