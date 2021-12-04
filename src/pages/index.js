import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

import Mentor from '../components/mentor';
import Resource from '../components/resource';

const Home = ({ data }) => {
  const Mentors = data.mentors.edges.map((edge) => (
    <Mentor key={edge.node.id} slug={edge.node.id} post={edge.node} />
  ));
  const Resources = data.resources.edges.map((edge) => (
    <Resource key={edge.node.id} slug={edge.node.id} post={edge.node} />
  ));
  const seo = {
    title: 'ApplyingML - Papers, Guides, and Interviews with ML practitioners',
    description:
      'Curated papers and blogs, ghost knowledge, and interviews with experienced ML practitioners on how to apply machine learning in industry.',
    image: 'https://applyingml.com/default-og-image.png',
    url: 'https://applyingml.com',
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
        Applying machine learning is hard. Many organizations have yet to benefit from ML, and most
        teams still find it tricky to apply it effectively.
      </p>
      <p>
        Though there are many ML courses, most focus on theory and students finish without knowing
        how to apply ML. Practical know-how is gained via hands-on experience and seldom
        documented—it's hard to find it in a textbook, class, or tutorial. There's a gap between
        knowing ML vs. applying it at work.
      </p>
      <p>
        To fill this gap, <code>ApplyingML</code> collects tacit/tribal/ghost knowledge on applying
        ML via curated papers/blogs, guides, and interviews with ML practitioners. In a nutshell,
        it's <Link to="/about/">1/3 applied-ml, 1/3 ghost knowledge, and 1/3 Tim Ferriss Show</Link>
        . The intent is to make it easier to apply—and benefit from—ML at work.
      </p>
      <br />
      <hr />
      <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: '1rem' }}>
        Read some of the guides below, or <Link to="/resources/">browse all guides</Link>.
      </h2>
      <div>{Resources}</div>
      <br />
      <hr />
      <h2 style={{ fontFamily: 'Merriweather, serif', fontSize: '1rem' }}>
        Or read some mentor interviews, or <Link to="/mentors/">browse all interviews</Link>.
      </h2>
      <div>{Mentors}</div>
      <p>
        Want to contribute an interview? Please <a href="mailto:applyingml@gmail.com">reach out</a>!
      </p>
      <br />
    </Layout>
  );
};

Home.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export default Home;

export const Query = graphql`
  query {
    mentors: allMdx(
      filter: { frontmatter: { type: { eq: "mentor" }, homepage: { eq: true } } }
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
    resources: allMdx(
      filter: { frontmatter: { type: { eq: "resource" }, homepage: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;
