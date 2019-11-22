import React from "react"
import { Link, graphql } from "gatsby"
import { getImageUrl } from "takeshape-routing";

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Sock from "../components/Sock/Sock"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const hpdata = data.takeshape.getHomepage;
  return (
  <Layout>
    <SEO title="Home" />
    <Hero
      tagline = {hpdata.hero.headline}
      subtitle={hpdata.hero.description}
      ctaButtonLink={"/form"}
      ctaButtonText={"Click me!"}
    />
    <img src={getImageUrl(hpdata.hero.backgroundImage.path)}/>
    <Sock
      title={hpdata.sock.sock.title}
      text={hpdata.sock.sock.description}
      buttonLink={hpdata.sock.sock.button.linkDestination}
      buttonText={hpdata.sock.sock.button.title}
    />
  </Layout>)
}

export default IndexPage

export const query = graphql`
  query {
    takeshape {
      getHomepage {
        checkerboard1 {
          button {
            linkDestination
            title
          }
          buttonLinkUrl
          buttonTitle
          description
          title
        }
        checkerboard2 {
          button {
            linkDestination
            title
          }
          description
          title
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
          buttonTitle
          description
          headline
          linkDestination
          secondaryButton {
            linkDestination
            title
          }
        }
        quoteSection {
          quoteItem {
            backgroundImage {
              description
              path
              sourceUrl
            }
            quote
          }
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
        specialEvent {
          dateTime
          description
          link
          location
          title
        }
      }        
    }
  }
`
