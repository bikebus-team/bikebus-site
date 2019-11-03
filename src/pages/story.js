import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkerboard from "../components/Checkerboard/checkerboard"

const Story = () => (
  // The `what to expect` page
  <Layout>
    <SEO title="Story" />
    <h1>The Story</h1>
    <Checkerboard imageLeft={true}></Checkerboard>
    <Checkerboard imageLeft={false}></Checkerboard>
    <Checkerboard imageLeft={true}></Checkerboard>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Story
