import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExtraPageLayout from "../components/ExtraPageLayout"

const TEMP_CONTENT = () => (
  <>
    <p>
      <strong>Effective June 1, 2015</strong>
    </p>

    <p>
      Please read these Terms and Conditions (“terms”) carefully, as they
      contain important information regarding your legal rights, remedies, and
      obligations when using the bikebus website. The terms include various
      limitations and exclusions, and a dispute resolution clause that governs
      how disputes will be resolved.
    </p>

    <h2>TERMS OF USE</h2>
    <h3>ACCEPTANCE OF TERMS</h3>
    <p>
      As a user on the bikebus website, you signify your agreement to these
      terms, as well as to the bikebus privacy policy. If you do not agree to
      any of these terms or the privacy policy, please do not use the bikebus
      website. Periodically review these terms, as major changes may be made. We
      may attempt to notify you when these changes are made. bikebus, in its
      sole discretion, reserves the right to modify or revise these terms and
      policies at any time, and you agree to be bound by such modifications or
      revisions. Nothing in these terms shall be deemed to confer any
      third-party rights or benefits.
    </p>

    <h2>TERMS OF USE</h2>
    <h3>ACCEPTANCE OF TERMS</h3>
    <p>
      As a user on the bikebus website, you signify your agreement to these
      terms, as well as to the bikebus privacy policy. If you do not agree to
      any of these terms or the privacy policy, please do not use the bikebus
      website. Periodically review these terms, as major changes may be made. We
      may attempt to notify you when these changes are made. bikebus, in its
      sole discretion, reserves the right to modify or revise these terms and
      policies at any time, and you agree to be bound by such modifications or
      revisions. Nothing in these terms shall be deemed to confer any
      third-party rights or benefits.
    </p>
  </>
)

const TermsPage = ({ data }) => {
  // const pageData = data.takeshape
  return (
    <Layout>
      <SEO title="Terms & Conditions" />
      <ExtraPageLayout header="Terms & Conditions">
        <TEMP_CONTENT />
      </ExtraPageLayout>
    </Layout>
  )
}

export default TermsPage

// export const query = graphql`
//   query {
//     takeshape {
//       ...
//     }
//   }
// `
