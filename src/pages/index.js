import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import Mentor from "../components/mentor"

export default function Home() {
  const mentor = graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "mentor" } } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              role
              date
              slug
            }
          }
        }
      }
    }
  `
  console.log(mentor)

  const seo = {
    title: "ApplyingML - Papers, Guides, and Interviews with ML practitioners",
    description: "Curated papers and blogs, ghost knowledge, and interviews with experienced ML practitioners on how to apply machine learning in industry.",
    image: "https://applyingml.com/default-og-image.png",
    url: "https://applyingml.com",
  }
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@eugeneyan" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Helmet>
      <p>
        Applying machine learning is hard. Many organizations have yet to
        benefit from ML, and most teams still find it tricky to apply it
        effectively.
      </p>
      <p>
        Though there are many ML courses, most focus on theory and students
        finish without knowing how to apply ML. Practical know-how is gained via
        hands-on experience and seldom documented—it's hard to find it in a
        textbook, class, or tutorial. There's a gap between knowing ML vs.
        applying it at work.
      </p>
      <p>
        To fill this gap, <code>ApplyingML</code> collects tacit/tribal/ghost
        knowledge on applying ML via{" "}
        <Link to="/papers/">curated papers/blogs</Link>,{" "}
        <Link to="/resources/">guides</Link>, and{" "}
        <Link to="/mentors/">interviews</Link> with ML practitioners. In a
        nutshell, it's{" "}
        <Link to="/about/">
          1/3 applied-ml, 1/3 ghost knowledge, and 1/3 Tim Ferriss Show
        </Link>
        . The intent is to make it easier to apply—and benefit from—ML at work.
      </p>
      <p>
        Want to contribute an interview? Please{" "}
        <a href="mailto:applyingml@gmail.com">reach out</a>!
      </p>
    </Layout>
  )
}
