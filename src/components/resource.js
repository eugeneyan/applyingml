import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Resource = ({ post }) => (
  <h3 style={{ fontSize: `1.1rem` }}>
    <li>
      <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
    </li>
  </h3>
);

Resource.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Resource;
