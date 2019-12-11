import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BBh1, BBp } from "../components/Base/fonts";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <BBh1>NOT FOUND</BBh1>
    <BBp>You just hit a route that doesn&#39;t exist... the sadness.</BBp>
  </Layout>
)

export default NotFoundPage
