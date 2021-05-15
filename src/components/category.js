import React from "react"
import { Link } from "gatsby"

const CategorySection = ({ category }) => {
  const Sections = category.sections.map(section => {
    if (section.slug) {
      return (
        <li key={section.title}>
          <Link to={section.slug}>{section.title}</Link>
        </li>
      )
    } else if (section.type === "draft") {
      return (
        <li key={section.title}>
          {section.title}{" "}
          <Link to={section.draft} target={" _blank"}>
            DRAFT
          </Link>
        </li>
      )
    } else {
      return <li key={section.title}>{section.title}</li>
    }
  })

  return (
    <p>
      <h2>{category.title}</h2>
      <h3 style={{ fontSize: `1.1rem` }}>{Sections}</h3>
    </p>
  )
}

export default CategorySection
