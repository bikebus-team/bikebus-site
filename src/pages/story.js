import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Story = () => (
  // The `what to expect` page
  <Layout>
    <SEO title="Story" />
    <h1>Hi from the story page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Story
