import React from "react"

const CategorySection = ({ category }) => {
  const Sections = category.sections.map(section => {
    if (section.slug) {
      return (
        <li key={section.title}>
          <a href={section.slug}>{section.title}</a>
        </li>
      )
    } else if (section.draft) {
      return (
        <li key={section.title}>
          {section.title}{" "}
          <a href={section.draft} target={" _blank"}>
            DRAFT
          </a>
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