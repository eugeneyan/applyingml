import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

export default function About() {
  const seo = {
    title: 'About ApplyingML',
    description: '1/3 applied-ml, 1/3 ghost knowledge, 1/3 Tim Ferriss Show.',
    image: 'https://applyingml.com/default-og-image.png',
    url: 'https://applyingml.com/about/',
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
        <b>Ingredients:</b> 1/3{' '}
        <Link to="/papers/">
          <code>applied-ml</code>
        </Link>
        , 1/3{' '}
        <a
          href="https://notebook.drmaciver.com/posts/2020-02-16-14:22.html"
          target="_blank"
          rel="noreferrer"
        >
          ghost knowledge
        </a>
        , 1/3{' '}
        <a href="https://tim.blog/podcast/" target="_blank" rel="noreferrer">
          Tim Ferriss Show
        </a>
        .
      </p>
      <p>
        1. What is <code>applied-ml</code>?
      </p>
      <p>
        Papers and tech blogs, by various companies, of machine learning applied in production, with
        details on problem formulation, system & training data design, scaling, results, what didn't
        work, etc.
      </p>
      <p>
        2. What is <i>ghost knowledge</i>?
      </p>
      <p>
        "Knowledge that is present somewhere in the epistemic community, and is perhaps readily
        accessible to some central member of that community, but it is not really written down
        anywhere and it's not clear how to access it.
      </p>

      <p>
        Roughly what makes something ghost knowledge is two things: (i) it is readily discoverable
        if you have trusted access to expert members of the community, and (ii) it is almost
        completely inaccessible if you are not."
      </p>

      <p>
        3. What is <i>The Tim Ferriss Show</i>?
      </p>

      <p>
        Podcast where Tim Ferriss interviews and "deconstructs world-class performers from eclectic
        areas (investing, sports, business, art, etc.) to extract the tactics, tools, and routines
        you can use."
      </p>
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
