import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <p>
        Applying machine learning is hard. There's a gap between <b>knowing</b>{" "}
        machine learning vs <b>applying</b> it at work to drive impact.
      </p>

      <p>
        Such knowledge is seldom documented—it's not something you can find in
        a textbook, classes, or how-to article. To fill this gap, this site shares 
        about the process of applying ML through guides and case studies, as well 
        as interviews experienced with ML practitioners.
      </p>

      <p>
        You can start with browsing <Link to="/applied-ml/">papers</Link> by
        companies sharing their ML systems,{" "}
        <Link to="/resources/">resources</Link> on ML systems and processes, or{" "}
        <Link to="/mentors/">mentors</Link> sharing their experience and advice.
        Happy learning!
      </p>
    </Layout>
  )
}
