import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from "../components/Hero/Hero"
import Sock from "../components/Sock/Sock"
import SEO from "../components/seo"

import {
  Button
} from "../components/Base/basecomponents";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      tagline = {"This is the tagline "}
      subtitle={"subtitle subtitle subtitle subtitle subtitle"}
      ctaButtonLink={"/"}
      ctaButtonText={"Click me!"}
    />
    <Sock
      title={"This is a sock"}
      text={"You should click the button below"}
      buttonLink={"/"}
      buttonText={"Click Me!"}
    />
  </Layout>
)

export default IndexPage
