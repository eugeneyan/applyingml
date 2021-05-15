import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

export const FigureCaption = props => {
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
    )
  } else {
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
    )
  }
}
