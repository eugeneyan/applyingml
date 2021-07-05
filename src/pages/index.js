import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <p>
        Applying machine learning is hard. Many organizations have yet to
        benefit from ML, and most individuals still can't apply it effectively.
      </p>

      <p>
        Though there are many ML courses, most focus on theory and students
        finish without knowing how to apply ML. Practical know-how is gained via
        hands-on experience and seldom documented—you won't find in a textbook,
        class, or tutorial. Thus, there's a gap between <b>knowing</b> ML vs{" "}
        <b>applying</b> it at work.
      </p>

      <p>
        To fill this gap, <code>ApplyingML</code> documents the ghost knowledge
        of applying ML through sharing <Link to="/applied-ml/">papers</Link>,{" "}
        <Link to="/resources/">guides</Link>, and{" "}
        <Link to="/mentors/">interviews</Link> with ML practitioners.
      </p>
    </Layout>
  )
}
