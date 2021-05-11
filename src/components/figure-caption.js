import React from "react"
import { css } from "@emotion/react"

export const FigureCaption = props => {
  return <p css={css `text-align: center; font-size: 90%; margin-top: -1rem` }>{props.caption}</p>
}
