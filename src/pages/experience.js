import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import Checkerboard from "../components/Checkerboard/checkerboard"
import SEO from "../components/seo"
import ExperienceCommunity from "../components/ExperienceCommunity/ExperienceCommunity";

const Experience = ({data}) => {
  // The `what to expect` page
  const expdata = data.takeshape.getExperience;
  console.log(expdata)
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
          imageSrc={cb.checkerboard.image.path}
          imageCaption={cb.checkerboard.image.caption.blocks[0].text}
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
              path
              sourceUrl
              title
              caption
            }
            title
          }
        }
        community {
          images {
            image {
              path
              sourceUrl
              caption
            }
          }
          title
        }
        hero {
          description
          title
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
`
