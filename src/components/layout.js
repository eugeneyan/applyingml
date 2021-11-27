/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { css } from '@emotion/react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { rhythm } from '../utils/typography';

import CodeBlock from './codeblock';
import './layout.module.css';
import SubscriptionForm from './subscribe';

const ListLink = (props) => (
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
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const ExternalLink = (props) => {
  if (props.href.includes('yourwebsite.com') || props.href[0] === '/') {
    return <Link to={props.href}>{props.children}</Link>;
  }
  return (
    <Link to={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </Link>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const BlockQuote = (props) => (
  <blockquote
    style={{
      borderLeft: '.25em solid #d9d9d9',
      paddingLeft: '1em',
      marginLeft: '0',
    }}
  >
    {props.children}
  </blockquote>
);

BlockQuote.propTypes = {
  children: PropTypes.string.isRequired,
};

const Footer = (props) => (
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
);

Footer.propTypes = {
  children: PropTypes.string.isRequired,
};

const Header3 = (props) => (
  <h3
    style={{
      fontFamily: 'Merriweather',
      fontSize: '1.1em',
      lineHeight: '1.5em',
    }}
  >
    {props.children}
  </h3>
);

Header3.propTypes = {
  children: PropTypes.string.isRequired,
};

const components = {
  code: CodeBlock,
  a: ExternalLink,
  blockquote: BlockQuote,
  h3: Header3,
};

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
  );
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
      <header style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ textShadow: 'none', backgroundImage: 'none' }}>
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
      <hr style={{ color: '#d9d9d9', border: '0' }} />
      <MDXProvider components={components}>
        <div
          css={css`
            flex: 1 0 auto;
          `}
        >
          <Helmet>
            <script defer data-domain="applyingml.com" src="https://plausible.io/js/plausible.js" />
          </Helmet>
          {children}
        </div>
      </MDXProvider>
      <SubscriptionForm />
      <Footer>
        <br />©{' '}
        <a href="https://eugeneyan.com" target="_blank" rel="noreferrer">
          Eugene Yan
        </a>{' '}
        {new Date().getFullYear()}
        {' • '}
        <Link to="/about/">About</Link>
        {' • '}
        <a
          href="https://github.com/eugeneyan/applyingml#contributing"
          target="_blank"
          rel="noreferrer"
        >
          Suggest edits
        </a>
        .
      </Footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.string.isRequired,
};
