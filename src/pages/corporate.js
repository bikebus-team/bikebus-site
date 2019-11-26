import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import Steps from "../components/Steps/Steps"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import Companies from "../components/Companies/Companies"
import Checkerboard from "../components/Checkerboard/checkerboard"
import SEO from "../components/seo"
import Packages from "../components/Packages/Packages"

const Corporate = ({data}) => {
  // The `what to expect` page
  const corpdata = data.takeshape.getCorporate;
  console.log(corpdata)
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
    <SectionHeader
      title="Corporate Wellness Benefits"
      description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    {corpdata.checkerboardSection && corpdata.checkerboardSection.map((cb, index) => (
        <Checkerboard
          key={index}
          imageLeft={index % 2 === 1}
          title={cb.checkerboard.title}
          text={cb.checkerboard.description}
          imageSrc={cb.checkerboard.image.path}
          hasButton={false}
        />
      ))}
    <Packages
      heading={corpdata.pricing.title}
      subtitle={corpdata.pricing.description}
      packages={corpdata.pricing.options}
    />
    <Steps
      heading = {corpdata.differentiatorSection.title}
      steps={corpdata.differentiatorSection.differentiatorRepeater}
    />
    <QuoteBlock
      quote= {corpdata.quote.content}
      />
    <Companies
      // needs a cms option for heading
      heading= "Who we've worked with"
      companyLogos={corpdata.companies}
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
          differentiatorRepeater {
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
          subtitle
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
