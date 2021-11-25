import React from 'react';
import './button.styles.css';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <button type="submit" className="Button">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
