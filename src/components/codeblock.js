/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';
import PropTypes from 'prop-types';

const CodeBlock = ({ children, className, live, render }) => {
  const language = className.replace(/language-/, '');

  if (live) {
    return (
      <div style={{ marginTop: '40px', backgroundColor: 'black' }}>
        <LiveProvider
          code={children.trim()}
          transformCode={(code) => `/** @jsx mdx */${code}`}
          scope={{ mdx }}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
      {({ langName, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={langName}
          style={{
            ...style,
            padding: '20px',
            overflow: 'auto',
            borderRadius: '3px',
          }}
        >
          {tokens.map((line) => (
            <div key={line.id} {...getLineProps({ line })}>
              {line.map((token) => (
                <span key={token.id} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  render: PropTypes.string.isRequired,
};

export default CodeBlock;
