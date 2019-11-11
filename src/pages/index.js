import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from "../components/Hero/Hero"
import Sock from "../components/Sock/Sock"
import SEO from "../components/seo"

import { Button } from "../components/Base/basecomponents"

const IndexPage = ({ data }) => {
  const hpdata = data.takeshape.getHomepage;
  console.log(hpdata);
  return (
  <Layout>
    <SEO title="Home" />
    <Hero
      tagline = {hpdata.hero.headline}
      subtitle={hpdata.hero.description}
      ctaButtonLink={"/"}
<<<<<<< HEAD
      ctaButtonText={"Book a bus"}

=======
      ctaButtonText={"Click me!"}
>>>>>>> develop
    />
    <img src={hpdata.hero.backgroundImage.path}></img>
    <Sock
      title={hpdata.sock.title}
      text={hpdata.sock.description}
      buttonLink={hpdata.sock.linkDestination}
      buttonText={hpdata.sock.buttonTitle}
    />
  </Layout>)
}

export default IndexPage

export const query = graphql`
  query {
    takeshape {
      getHomepage {
        _id
        checkerboard1 {
          buttonLinkUrl
          buttonTitle
          description
          title
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
          headline
        }
        quoteSection {
          quoteItem {
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
            quote
          }
        }
        sock {
          buttonTitle
          description
          linkDestination
          title
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
