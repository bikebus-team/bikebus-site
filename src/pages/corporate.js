import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SplitHero from "../components/SplitHero/SplitHero"
import QuoteBlock from "../components/QuoteBlock/QuoteBlock"
import Sock from "../components/Sock/Sock"
import SEO from "../components/seo"

const Corporate = () => (
  // The `what to expect` page
  <Layout>
    <SEO title="Corporate" />
    <SplitHero
      tagline= {"This is a split hero for Corporate"}
      subtitle={"This is the subtitle for the split hero"}
      ctaButtonLink={"/"}
      ctaButtonText={"Click me plzz"}
      />
    <QuoteBlock
      quote= {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna."}
      />
    <Sock
      title={"This is a sock"}
      text={"You should click the button below"}
      buttonLink={"/"}
      buttonText={"Click Me!"}
    />
  </Layout>
)

export default Corporate
