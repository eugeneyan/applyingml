import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Hi! I'm building a fake Gatsby site as part of a tutorial!"/>
      <p>
        What do I like to do? Mainly machine learning, but this is my project to learn javascript 
        and help people. Watch this space ;)
      </p>
    </Layout>
  )
}
