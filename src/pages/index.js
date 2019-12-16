import React from "react"
import { Link, graphql } from "gatsby"
import { getImageUrl } from "takeshape-routing"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import Sock from "../components/Sock/Sock"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Checkerboard from "../components/Checkerboard/checkerboard"
import SEO from "../components/seo"
import HighlightEvent from "../components/HighlightEvent/HighlightEvent"


const IndexPage = ({ data }) => {
  const hpdata = data.takeshape.getHomepage
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        tagline={hpdata.hero.headline}
        subtitle={hpdata.hero.description}
        ctaButtonLink={"/form"}
        ctaButtonText={"Click me!"}
        ctaSecondaryLink={"/form"}
        ctaSecondaryText={"click me too"}
        imageSrc={hpdata.hero.backgroundImage.path}
      />
      <Checkerboard
        imageLeft={0 % 2 === 1}
        title={hpdata.checkerboard1.title}
        text={hpdata.checkerboard1.description}
        image={hpdata.checkerboard1.image}
        hasButton={true}
        buttonLink={hpdata.checkerboard1.button.linkDestination}
      />
      <Checkerboard
        imageLeft={1 % 2 === 1}
        title={hpdata.checkerboard2.title}
        text={hpdata.checkerboard2.description}
        image={hpdata.checkerboard2.image}
        hasButton={true}
        buttonLink={hpdata.checkerboard2.button.linkDestination}
      />
      <HighlightEvent
        title={hpdata.specialEvent.title}
        description={hpdata.specialEvent.description}
        ctaLink={hpdata.specialEvent.link}
        ctaText={hpdata.specialEvent.linkTitle}
        date={hpdata.specialEvent.dateTime}
        image={hpdata.specialEvent.image}
      />
      <QuoteBlock quote={hpdata.quote.quote} />
      <Sock
        title={hpdata.sock.sock.title}
        text={hpdata.sock.sock.description}
        buttonLink={hpdata.sock.sock.button.linkDestination}
        buttonText={hpdata.sock.sock.button.title}
      />
    </Layout>
  )
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
          description
          image {
            caption
            path
            sourceUrl
          }
          title
        }
        checkerboard2 {
          button {
            linkDestination
            title
          }
          description
          image {
            caption
            path
            sourceUrl
          }
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
        quote {
          backgroundImage {
            description
            path
            sourceUrl
          }
          quote
          speaker
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
          description
          image {
            caption
            path
          }
          link
          linkTitle
          location
          title
        }
      }
    }
  }
`
