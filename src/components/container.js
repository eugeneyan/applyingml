import React from "react"
import * as containerStyles from "./container.module.css"

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}
