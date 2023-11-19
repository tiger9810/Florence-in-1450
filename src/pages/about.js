import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>Hi there! I'm learning React!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About me"></Seo>

export default AboutPage