import React from "react"
import { Button, ButtonSecondary, Link } from "../Base/basecomponents"
import { getImageUrl } from "takeshape-routing"
import {
  HeroContainer,
  HeroImageConatiner,
  HeroContentContainer,
  HeroTextContainer,
  HeroButtonContainer,
  HeroTagline,
  HeroSubtitle,
} from "./HeroStyles"

const Hero = ({
  tagline,
  subtitle,
  ctaButtonLink,
  ctaButtonText,
  ctaSecondaryLink,
  ctaSecondaryText,
  imageSrc,
}) => (
  <HeroContainer>
    <HeroImageConatiner BackgroundImgSrc={getImageUrl(imageSrc)} />
    <HeroContentContainer>
      <HeroTextContainer>
        <HeroTagline>{tagline}</HeroTagline>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </HeroTextContainer>
      <HeroButtonContainer>
        <Link to={ctaButtonLink}>
          <Button>{ctaButtonText}</Button>
        </Link>
        <Link to={ctaSecondaryLink}>
          <ButtonSecondary>{ctaSecondaryText}</ButtonSecondary>
        </Link>
      </HeroButtonContainer>
    </HeroContentContainer>
  </HeroContainer>
)

export default Hero
