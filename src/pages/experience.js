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
        checkerboardSection {
          checkerboard {
            description
            title
          }
        }
        community {
          images {
            image {
              description
              path
              sourceUrl
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
