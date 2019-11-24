import React from "react"
import { Button, ButtonSecondary, Link } from "../Base/basecomponents"
import { getImageUrl } from "takeshape-routing"
import {
  HeroContainer,
  HeroContentContainer,
  HeroTagline,
  HeroSubtitle}
  from "./HeroStyles"


const Hero = ({ tagline, subtitle, ctaButtonLink, ctaButtonText, ctaSecondaryLink, ctaSecondaryText, imageSrc }) => (
  <HeroContainer BackgroundImgSrc={getImageUrl(imageSrc)}>
    <HeroContentContainer>
      <HeroTagline>{tagline}</HeroTagline>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
      <Link to={ctaButtonLink}>
        <Button>{ctaButtonText}</Button>
      </Link>
      <Link to={ctaSecondaryLink}>
        <ButtonSecondary>{ctaSecondaryText}</ButtonSecondary>
      </Link>
    </HeroContentContainer>
  </HeroContainer>

)

export default Hero
