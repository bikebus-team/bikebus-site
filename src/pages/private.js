import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import Checkerboard from "../components/Checkerboard/checkerboard"
import SEO from "../components/seo"

const Private = ({data}) => {
  const pedata = data.takeshape.getPrivateEvents;
  console.log(pedata)
  // The `what to expect` page
  return (
    <Layout>
      <SEO title="Private Groupds" />
      <SplitHero
        tagline={pedata.hero.title}
        subtitle={pedata.hero.subtitle}
        description={pedata.hero.description}
        ctaButtonLink={pedata.hero.button.linkDestination}
        ctaButtonText={pedata.hero.button.title}
        imageUrl={pedata.hero.backgroundImage}
      />
      <QuoteBlock
        quote={pedata.quote.content}
      />
      {pedata.checkerboardSection.map((cb, index) => (
        <Checkerboard
          key={index}
          imageLeft={index % 2 == 1}
          title={cb.checkerboard.title}
          text={cb.checkerboard.description}
          imageSrc={cb.checkerboard.image.path}
          hasButton={false}
        />
      ))}
      <Sock
        title={pedata.sock.sock.title}
        text={pedata.sock.sock.description}
        buttonLink={pedata.sock.sock.button.linkDestination}
        buttonText={pedata.sock.sock.button.title}
      />
    </Layout>
  )
}

export default Private;

export const query = graphql`
  query {
    takeshape {
      getPrivateEvents {
        _id
        checkerboardSection {
          checkerboard {
            description
            image {
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
          button {
            _id
            linkDestination
            title
          }
          description
          subtitle
          title
        }
        process {
          step {
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
        quote {
          content
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
      }
    }
  }
`
