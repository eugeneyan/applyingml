/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

export default function MyImg(props) {
  if (props.title !== undefined) {
    return (
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.title}</figcaption>
      </figure>
    );
  }
  return <img src={props.src} alt={props.alt} />;
}

MyImg.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
