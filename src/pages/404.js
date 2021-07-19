import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <p>Opps, page not found.</p>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
