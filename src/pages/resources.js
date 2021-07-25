import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import CategorySection from '../components/category';

const ResourcesPage = ({
  data: {
    dataYaml: { categories },
  },
}) => {
  const Categories = categories.map((category) => (
    <CategorySection key={category.id} category={category} />
  ));
  const seo = {
    title: 'ML and non-ML Guides and Teardowns',
    description:
      'ML and non-ML related guides, and teardowns on ML systems—the ghost knowledge you need for work.',
    image: 'https://applyingml.com/default-og-image.png',
    url: 'https://applyingml.com/resources/',
  };

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@eugeneyan" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>

      <p>
        Guides and teardowns on how to apply machine learning in production. Spot an error or
        suggesting edits? Please <a href="mailto:applyingml@gmail.com">reach out</a> or make a{' '}
        <a
          href="https://github.com/eugeneyan/applyingml#contributing"
          target="_blank"
          rel="noreferrer"
        >
          pull request
        </a>
        .
      </p>
      <div>{Categories}</div>
      <br />
    </Layout>
  );
};

ResourcesPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default ResourcesPage;

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
`;
