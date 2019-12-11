import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExtraPageLayout from "../components/ExtraPageLayout"

const TEMP_CONTENT = () => (
  <>
    <h2>Policies for group sessions</h2>

    <p>
      Please read these Terms and Conditions (“terms”) carefully, as they
      contain important information regarding your legal rights, remedies, and
      obligations when using the bikebus website. The terms include various
      limitations and exclusions, and a dispute resolution clause that governs
      how disputes will be resolved.
    </p>

    <h3>Reservation Policy</h3>
    <ul>
      <li>
        Payment in full is required to hold a date and time for an event(s).
      </li>
      <li>
        We generally require a minimum of at least 10 business days to plan your
        event.
      </li>
      <li>
        If you are less than 10 days out, give us a call anyway, we might have
        an opening!
      </li>
    </ul>

    <h3>Service Areas</h3>
    <ul>
      <li>
        Payment in full is required to hold a date and time for an event(s).
      </li>
      <li>
        We generally require a minimum of at least 10 business days to plan your
        event.
      </li>
      <li>
        If you are less than 10 days out, give us a call anyway, we might have
        an opening!
      </li>
    </ul>
  </>
)

const PoliciesPage = ({ data }) => {
  // const pageData = data.takeshape
  return (
    <Layout>
      <SEO title="Policies" />
      <ExtraPageLayout header="Policies">
        <TEMP_CONTENT />
      </ExtraPageLayout>
    </Layout>
  )
}

export default PoliciesPage

// export const query = graphql`
//   query {
//     takeshape {
//       ...
//     }
//   }
// `
