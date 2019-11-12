import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import SEO from "../components/seo"

const Corporate = ({data}) => {
  // The `what to expect` page
  const corpdata = data.takeshape.getCorporate;
  console.log(corpdata);
  return (
  <Layout>
    <SEO title="Corporate" />
    <SplitHero
      tagline= {corpdata.hero.title}
      subtitle={corpdata.hero.subtitle}
      description={corpdata.hero.description}
      ctaButtonLink={corpdata.hero.linkDestination}
      ctaButtonText={corpdata.hero.buttonTitle}
      />
    <QuoteBlock
      quote= {corpdata.quote.content}
      />
    <Sock
      title={corpdata.sock.title}
      text={corpdata.sock.description}
      buttonLink={corpdata.sock.buttonLink}
      buttonText={corpdata.sock.buttonTitle}
    />
  </Layout>
  )
}

export default Corporate

export const query = graphql`
  query {
    takeshape {
      getCorporate {
        _id
        companies {
          logo {
            _id
            caption
            credit
            description
            filename
            mimeType
            path
            sourceUrl
            title
            uploadStatus
          }
        }
        differentiatorSection {
          differentiator {
            description
            icon {
              _id
              caption
              credit
              description
              filename
              mimeType
              path
              sourceUrl
              title
              uploadStatus
            }
            title
          }
        }
        hero {
          backgroundImage {
            _id
            caption
            credit
            description
            filename
            mimeType
            path
            sourceUrl
            title
            uploadStatus
          }
          description
          title
          subtitle
          linkDestination
          buttonTitle
        }
        pricing {
          description
          options {
            option {
              busPrice
              personPrice
              subtitle
              title
            }
          }
          title
        }
        quote {
          content
        }
        sock {
          buttonTitle
          description
          linkDestination
          title
        }
      }
    }
  }
`
