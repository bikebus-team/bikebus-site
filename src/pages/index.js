import React from "react"
import { Link, graphql } from "gatsby"
import { getImageUrl } from "takeshape-routing";

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
      // ctaButtonLink={"/"}
      // ctaButtonText={"Click me!"}
    />
    <img src={getImageUrl(hpdata.hero.backgroundImage.path)}/>
    {/* <Sock
      title={hpdata.sock.title}
      text={hpdata.sock.description}
      buttonLink={hpdata.sock.linkDestination}
      buttonText={hpdata.sock.buttonTitle}
    /> */}
  </Layout>)
}

export default IndexPage

export const query = graphql`
  query {
    takeshape {
      getHomepage {
        _id
        checkerboard1 {
          button {
            _id
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
            _id
            linkDestination
            title
          }
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
          button {
            _id
            linkDestination
            title
          }
          buttonTitle
          description
          headline
          linkDestination
          secondaryButton {
            _id
            linkDestination
            title
          }
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
          _id
          sock {
            button {
              _id
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
