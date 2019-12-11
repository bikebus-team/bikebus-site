import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ExtraPageLayout from "../components/ExtraPageLayout"

import Accordion from "../components/FAQ/Accordion"
import { BBh2 } from "../components/Base/fonts"

const TEMP_CONTENT = () => (
  <>
    <BBh2>General</BBh2>
    <Accordion
      key="0"
      idKey="0"
      question="What exactly is BikeBus?"
      answer={
        <p>
          As a user on the bikebus website, you signify your agreement to these
          terms, as well as to the bikebus privacy policy. If you do not agree
          to any of these terms or the privacy policy, please do not use the
          bikebus website. Periodically review these terms, as major changes may
          be made.
        </p>
      }
    />

    <Accordion
      key="1"
      idKey="1"
      question="What exactly is BikeBus?"
      answer={
        <p>
          As a user on the bikebus website, you signify your agreement to these
          terms, as well as to the bikebus privacy policy. If you do not agree
          to any of these terms or the privacy policy, please do not use the
          bikebus website. Periodically review these terms, as major changes may
          be made.
        </p>
      }
    />

    <BBh2>General</BBh2>
    <Accordion
      key="2"
      idKey="2"
      question="What exactly is BikeBus?"
      answer={
        <p>
          As a user on the bikebus website, you signify your agreement to these
          terms, as well as to the bikebus privacy policy. If you do not agree
          to any of these terms or the privacy policy, please do not use the
          bikebus website. Periodically review these terms, as major changes may
          be made.
        </p>
      }
    />

    <Accordion
      key="3"
      idKey="3"
      question="What exactly is BikeBus?"
      answer={
        <p>
          As a user on the bikebus website, you signify your agreement to these
          terms, as well as to the bikebus privacy policy. If you do not agree
          to any of these terms or the privacy policy, please do not use the
          bikebus website. Periodically review these terms, as major changes may
          be made.
        </p>
      }
    />

    <Accordion
      key="4"
      question="What exactly is BikeBus?"
      answer={
        <>
          <p>
            As a user on the bikebus website, you signify your agreement to
            these terms, as well as to the bikebus privacy policy. If you do not
            agree to any of these terms or the privacy policy, please do not use
            the bikebus website. Periodically review these terms, as major
            changes may be made.
          </p>
          <p>
            As a user on the bikebus website, you signify your agreement to
            these terms, as well as to the bikebus privacy policy. If you do not
            agree to any of these terms or the privacy policy, please do not use
            the bikebus website. Periodically review these terms, as major
            changes may be made.
          </p>
        </>
      }
    />
  </>
)

const FAQPage = ({ data }) => {
  // const pageData = data.takeshape
  return (
    <Layout>
      <SEO title="Frequently Asked Questions" />
      <ExtraPageLayout header="Frequently Asked Questions">
        <TEMP_CONTENT />
      </ExtraPageLayout>
    </Layout>
  )
}

export default FAQPage

// export const query = graphql`
//   query {
//     takeshape {
//       ...
//     }
//   }
// `
