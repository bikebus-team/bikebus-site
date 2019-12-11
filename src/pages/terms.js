import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExtraPageLayout from "../components/ExtraPageLayout"
import RichTextContainer from "../components/RichTextContainer"

const TermsPage = ({ data }) => {
  const pageData = data.takeshape
  return (
    <Layout>
      <SEO title="Terms & Conditions" />
      <ExtraPageLayout header="Terms & Conditions">
        <RichTextContainer
          dangerouslySetInnerHTML={{ __html: pageData.getTerms.termsHtml }}
        />
      </ExtraPageLayout>
    </Layout>
  )
}

export default TermsPage

export const query = graphql`
  query {
    takeshape {
      getTerms {
        _id
        termsHtml
      }
    }
  }
`
