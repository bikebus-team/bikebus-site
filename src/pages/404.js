import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BBh2, BBp } from "../components/Base/fonts"
import { FOFHero, FOFLink, FOFWrapper } from "../components/FOFHero/FOFStyles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <FOFWrapper>
      <FOFHero>404</FOFHero>
      <BBh2>This page was not found</BBh2>
      <BBp>
        It looks like you took a wrong turn; this page does not exist yet! Would
        you like to&nbsp;
        <FOFLink to={"./"}>return to the homepage</FOFLink>?
      </BBp>
    </FOFWrapper>
  </Layout>
)

export default NotFoundPage
