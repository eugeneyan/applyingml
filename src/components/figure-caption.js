/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export const FigureCaption = (props) => {
  if (props.source !== undefined) {
    return (
      <p
        css={css`
          text-align: center;
          font-size: 90%;
          margin-top: -1rem;
        `}
      >
        {props.caption} (
        <Link to={props.source} target="_blank" rel="noreferrer">
          source
        </Link>
        )
      </p>
    );
  }
  return (
    <p
      css={css`
        text-align: center;
        font-size: 90%;
        margin-top: -1rem;
      `}
    >
      {props.caption}
    </p>
  );
};

FigureCaption.propTypes = {
  source: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
