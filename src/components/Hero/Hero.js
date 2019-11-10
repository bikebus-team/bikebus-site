import React from "react"
import { Button, Link } from "../Base/basecomponents"
import {
  HeroContainer,
  HeroContentContainer}
  from "./HeroStyles"


const Hero = ({ tagline, subtitle, ctaButtonLink, ctaButtonText }) => (
  <HeroContainer>
    <HeroContentContainer>
      <h1>{tagline}</h1>
      <h2>{subtitle}</h2>
      <Link to={ctaButtonLink}>
        <Button>{ctaButtonText}</Button>
      </Link>
    </HeroContentContainer>
  </HeroContainer>

)

export default Hero
