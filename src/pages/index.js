import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ApplyingML</title>
        <meta
          name="description"
          content="Papers, guides, and mentor interviews on how to apply machine learning in industry."
        />
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
        textbook, class, or tutorial. There's a gap between <b>knowing</b> ML vs{" "}
        <b>applying</b> it at work.
      </p>

      <p>
        To fill this gap, <code>ApplyingML</code> collects tacit/tribal/ghost
        knowledge of applying ML through{" "}
        <Link to="/papers/">curated papers</Link>,{" "}
        <Link to="/resources/">guides</Link>, and{" "}
        <Link to="/mentors/">interviews</Link> with ML practitioners. The intent
        is to make it easier to apply—and benefit—from ML at work.
      </p>

      <p>
        Want to contribute an interview? Please{" "}
        <a href="mailto:applyingml@gmail.com">reach out</a> or make a{" "}
        <a
          href="https://github.com/eugeneyan/applyingml#contributing"
          target="_blank"
          rel="noreferrer"
        >
          pull request
        </a>
        .
      </p>
    </Layout>
  )
}
