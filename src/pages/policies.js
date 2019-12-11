import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExtraPageLayout from "../components/ExtraPageLayout"
import { BBh2, BBh3, BBp } from "../components/Base/fonts";

const TEMP_CONTENT = () => (
  <>
    <BBh2>Policies for group sessions</BBh2>

    <BBp>
      Please read these Terms and Conditions (“terms”) carefully, as they
      contain important information regarding your legal rights, remedies, and
      obligations when using the bikebus website. The terms include various
      limitations and exclusions, and a dispute resolution clause that governs
      how disputes will be resolved.
    </BBp>

    <BBh3>Reservation Policy</BBh3>
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

    <BBh3>Service Areas</BBh3>
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
