import React from "react"
import { Button, Link } from "../Base/basecomponents"
import { getImageUrl } from "takeshape-routing"
import {
  HeroContainer,
  HeroContentContainer,
  HeroTagline,
  HeroSubtitle}
  from "./HeroStyles"


const Hero = ({ tagline, subtitle, ctaButtonLink, ctaButtonText, imageSrc }) => (
  <HeroContainer BackgroundImgSrc={getImageUrl(imageSrc)}>
    <HeroContentContainer>
      <HeroTagline>{tagline}</HeroTagline>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
      <Link to={ctaButtonLink}>
        <Button>{ctaButtonText}</Button>
      </Link>
    </HeroContentContainer>
  </HeroContainer>

)

export default Hero
