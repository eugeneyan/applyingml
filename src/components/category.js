import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const CategorySection = ({ category }) => {
  const Sections = category.sections.map((section) => {
    if (section.slug) {
      return (
        <h3 style={{ fontSize: '1.1rem' }}>
          <li key={section.title}>
            <Link to={section.slug}>{section.title}</Link>
          </li>
        </h3>
      );
    }
    if (section.type === 'draft') {
      return (
        <h3 style={{ fontSize: '1.1rem' }}>
          <li key={section.title}>
            {section.title}{' '}
            <Link to={section.draft} target=" _blank">
              DRAFT
            </Link>
          </li>
        </h3>
      );
    }
    return <li key={section.title}>{section.title}</li>;
  });

  return (
    <div>
      <h2>{category.title}</h2>
      <div>{Sections}</div>
      <br />
    </div>
  );
};

CategorySection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  category: PropTypes.object.isRequired,
};

export default CategorySection;
