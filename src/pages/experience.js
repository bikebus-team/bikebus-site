import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import SEO from "../components/seo"

const Experience = ({data}) => {
  // The `what to expect` page
  const expdata = data.takeshape.getExperience;
  console.log(expdata)
  return (
    <Layout>
      <SEO title="Experience" />
      <SplitHero
        tagline={expdata.hero.title}
        subtitle={expdata.hero.description}
      />
      {/* TODO: make image layout for Seema to update */}
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
          description
          title
        }
      }
    }
  }
`
