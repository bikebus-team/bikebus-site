import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import Checkerboard from "../components/Checkerboard/checkerboard"
import SEO from "../components/seo"
import ExperienceCommunity from "../components/ExperienceCommunity/ExperienceCommunity"

const Experience = ({ data }) => {
  // The `what to expect` page
  const expdata = data.takeshape.getExperience
  return (
    <Layout>
      <SEO title="Experience" />
      <SplitHero
        tagline= {expdata.hero.title}
        imgSrc={expdata.hero.backgroundImage.path}
        description={expdata.hero.description}
      />
      {expdata.checkerboardSection.map((cb, index) => (
        <Checkerboard
          key={index}
          imageLeft={index % 2 === 1}
          title={cb.checkerboard.title}
          text={cb.checkerboard.description}
          image={cb.checkerboard.image}
          hasButton={false}
        />
      ))}
      {/* TODO: make image layout for Seema to update */}
      <ExperienceCommunity
        title={expdata.community.title}
        photos={expdata.community.images}
      />
    </Layout>
  )
}

export default Experience

export const query = graphql`
  query {
    takeshape {
      getExperience {
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
        community {
          images {
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
          }
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
          title
        }
      }
    }
  }
`
