import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExtraPageLayout from "../components/ExtraPageLayout"
import RichTextContainer from "../components/RichTextContainer"

const PoliciesPage = ({ data }) => {
  const pageData = data.takeshape
  return (
    <Layout>
      <SEO title="Policies" />
      <ExtraPageLayout header="Policies">
        <RichTextContainer
          dangerouslySetInnerHTML={{
            __html: pageData.getPolicies.policiesHtml,
          }}
        />
      </ExtraPageLayout>
    </Layout>
  )
}

export default PoliciesPage

export const query = graphql`
  query {
    takeshape {
      getPolicies {
        _id
        policiesHtml
      }
    }
  }
`
