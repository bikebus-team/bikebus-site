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
  console.log(expdata);
  return (
    <Layout>
      <SEO title="Experience" />
      <SplitHero
        tagline={expdata.hero.title}
        subtitle={expdata.hero.description}
      />
      {/* {expdata.checkerboardSection.map((cb, index) => (
        <div>hello</div>
      ))} */}
      {expdata.checkerboardSection.map((cb, index) => (
        <Checkerboard
          key={index}
          imageLeft={index % 2 === 1}
          title={cb.checkerboard.title}
          text={cb.checkerboard.description}
          imageSrc={cb.checkerboard.image.path}
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
            }
            title
          }
        }
        community {
          images {
            image {
              path
              sourceUrl
              title
            }
          }
          title
        }
        hero {
          description
          title
        }
      }
    }
  }
`
