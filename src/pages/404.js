import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BB1, BBp } from "../components/Base/fonts";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <BB1>NOT FOUND</BB1>
    <BBp>You just hit a route that doesn&#39;t exist... the sadness.</BBp>
  </Layout>
)

export default NotFoundPage
