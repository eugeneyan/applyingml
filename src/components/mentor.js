import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Mentor = ({ post }) => (
  <h3 style={{ fontSize: `1.1rem` }}>
    <li>
      <Link to={post.frontmatter.slug}>
        {post.frontmatter.name} - {post.frontmatter.role}
      </Link>
    </li>
  </h3>
);

Mentor.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Mentor;
