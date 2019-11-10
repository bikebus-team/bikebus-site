import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Button } from "../components/Base/basecomponents"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>{data.takeshape.getHomepage.hero.description}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button>TestButton</Button>
    <Link to="/page-2/">Go to page 2</Link>
    {console.log(data)}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    takeshape {
      getHomepage(_id: "4f41b6ff-8b04-4e0f-8cc9-d5deaced26e4") {
        _id
        checkerboard1 {
          buttonLink
          buttonTitle
          description
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
          headline
        }
        quoteSection {
          quoteItem {
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
            quote
          }
        }
        sock {
          description
          title
        }
        specialEvent {
          dateTime
          description
          link
          location
          title
        }
      }    
    }
  }
`
