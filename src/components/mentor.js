import React from "react"
import { Link } from "gatsby"

const Mentor = ({ post }) => (
  <h3 style={{ fontSize: `1.1rem` }}>
    <li>
      <Link to={post.frontmatter.slug}>
        {post.frontmatter.name} - {post.frontmatter.role}
      </Link>
    </li>
  </h3>
)

export default Mentor
