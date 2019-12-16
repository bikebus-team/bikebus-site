import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import Steps from "../components/Steps/Steps"
import Companies from "../components/Companies/Companies"
import Checkerboard from "../components/Checkerboard/checkerboard"
import SEO from "../components/seo"
import Packages from "../components/Packages/Packages"

const Corporate = ({ data }) => {
  // The `what to expect` page
  const corpdata = data.takeshape.getCorporate
  console.log(corpdata)
  return (
    <Layout>
      <SEO title="Corporate" />
      <SplitHero
        tagline={corpdata.hero.title}
        subtitle={corpdata.hero.subtitle}
        imgSrc={corpdata.hero.backgroundImage.path}
        description={corpdata.hero.description}
        ctaButtonLink={corpdata.hero.button.linkDestination}
        ctaButtonText={corpdata.hero.button.title}
      />
      {corpdata.checkerboardSection &&
        corpdata.checkerboardSection.map((cb, index) => (
          <Checkerboard
            key={index}
            imageLeft={index % 2 === 1}
            title={cb.checkerboard.title}
            text={cb.checkerboard.description}
            image={cb.checkerboard.image}
            hasButton={false}
          />
        ))}
      <Packages
        heading={corpdata.pricing.title}
        subtitle={corpdata.pricing.description}
        packages={corpdata.pricing.options}
      />
      <Steps
        heading={corpdata.howToBook.title}
        steps={corpdata.howToBook.bookingSteps}
      />
      <QuoteBlock quote={corpdata.quote.content} />
      <Companies
        // needs a cms option for heading
        heading="Who we've worked with"
        companyLogos={corpdata.companies}
      />
      <Sock
        title={corpdata.sock.sock.title}
        text={corpdata.sock.sock.description}
        buttonLink={
          corpdata.sock.sock.button && corpdata.sock.sock.button.linkDestination
        }
        buttonText={
          corpdata.sock.sock.button && corpdata.sock.sock.button.title
        }
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
        howToBook {
          bookingSteps {
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
          subtitle
          title
        }
        hero {
          backgroundImage {
            caption
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
        pricing {
          ctaText
          description
          options {
            option {
              finePrint
              personPrice
              subtitle
              title
            }
          }
          title
        }
        quote {
          content
          speaker
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
