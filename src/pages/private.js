import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import Steps from "../components/Steps/Steps"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import Checkerboard from "../components/Checkerboard/checkerboard"
import SEO from "../components/seo"

const Private = ({ data }) => {
  const pedata = data.takeshape.getPrivateEvents
  // The `what to expect` page
  return (
    <Layout>
      <SEO title="Private Groups" />
      <SplitHero
        tagline={pedata.hero.title}
        imgSrc={pedata.hero.backgroundImage.path}
        description={pedata.hero.description}
        ctaButtonLink={pedata.hero.button.linkDestination}
        ctaButtonText={pedata.hero.button.title}
        imageUrl={pedata.hero.backgroundImage}
      />
      <QuoteBlock 
        quote={pedata.quote.content} 
        speaker={pedata.quote.speaker}
      />
      {pedata.checkerboardSection.map((cb, index) => (
        <Checkerboard
          key={index}
          imageLeft={index % 2 === 1}
          title={cb.checkerboard.title}
          text={cb.checkerboard.description}
          image={cb.checkerboard.image}
          hasButton={false}
        />
      ))}
      <Steps
      heading={pedata.howToBook.title}
      steps={pedata.howToBook.bookingSteps}
      />
      <Sock
        title={pedata.sock.sock.title}
        text={pedata.sock.sock.description}
        buttonLink={pedata.sock.sock.button.linkDestination}
        buttonText={pedata.sock.sock.button.title}
      />
    </Layout>
  )
}

export default Private

export const query = graphql`
  query {
    takeshape {
      getPrivateEvents {
        checkerboardSection {
          checkerboard {
            description
            image {
              path
              caption
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
            _id
            linkDestination
            title
          }
          description
          subtitle
          title
        }
        howToBook {
          title
          bookingSteps {
            step {
              description
              icon {
                caption
                path
                sourceUrl
              }
              title
            }
          }
        }
        quote {
          content
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
      }
    }
  }
`

