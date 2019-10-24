import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Experience = () => (
  // The `what to expect` page
  <Layout>
    <SEO title="Experience" />
    <h1>Hi from the experience page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Experience
