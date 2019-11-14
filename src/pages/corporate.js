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
  return (
  <Layout>
    <SEO title="Corporate" />
    <SplitHero
      tagline= {corpdata.hero.title}
      subtitle={corpdata.hero.subtitle}
      description={corpdata.hero.description}
      ctaButtonLink={corpdata.hero.button.linkDestination}
      ctaButtonText={corpdata.hero.button.title}
      />
    <QuoteBlock
      quote= {corpdata.quote.content}
      />
    <Sock
      title={corpdata.sock.sock.title}
      text={corpdata.sock.sock.description}
      buttonLink={corpdata.sock.sock.button && corpdata.sock.sock.button.linkDestination}
      buttonText={corpdata.sock.sock.button && corpdata.sock.sock.button.title}
    />
  </Layout>
  )
}

export default Corporate

export const query = graphql`
  query {
    takeshape {
      getCorporate {
        companies {
          logo {
            description
            path
            sourceUrl
          }
        }
        differentiatorSection {
          differentiator {
            description
            icon {
              description
              path
              sourceUrl
            }
            title
          }
        }
        hero {
          backgroundImage {
            description
            path
            sourceUrl
          }
          button {
            linkDestination
            title
          }
          description
          subtitle
          title
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
          sock {
            button {
              linkDestination
              title
            }
            description
            title
          }
        }
      }
    }
  }
`
