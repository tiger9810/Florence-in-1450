import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there! I'm learning React!</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage