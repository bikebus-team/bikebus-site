import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import Checkerboard from "../components/Checkerboard/checkerboard"
import SEO from "../components/seo"

const mockJSONData = {
  data: {
    pageTitle: "OUR STORY",
    checkerboards: [
      {
        title: "Title1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Title2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Title3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ]
  }
}

const Private = () => (
  // The `what to expect` page
  <Layout>
    <SEO title="Private Groupds" />
    <SplitHero
      tagline= {"This is a split hero for private events"}
      subtitle={"This is the subtitle for the split hero"}
      ctaButtonLink={"/"}
      ctaButtonText={"Click me plzz"}
      />
    <QuoteBlock
      quote= {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna."}
      />
    {mockJSONData.data.checkerboards.map((cb, index) =>
      <Checkerboard
        key={index}
        imageLeft={index % 2 == 1}
        title={cb.title}
        text={cb.text}
        hasButton={false} />)}
    <Sock
      title={"This is a sock"}
      text={"You should click the button below"}
      buttonLink={"/"}
      buttonText={"Click Me!"}
    />
  </Layout>
)

export default Private
