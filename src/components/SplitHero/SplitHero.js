import React from "react"
import { Link } from "../Base/basecomponents"
import { getImageUrl } from "takeshape-routing"
import {
  SplitHeroContainer,
  SplitHeroContentContainer,
  SplitHeroImageContainer,
  SplitHeroImage,
  SplitHeroContent,
  SplitHeroTagline,
  SplitHeroDescription,
  WhiteButton,
} from "./SplitHeroStyles"

const SplitHero = ({
  tagline,
  subtitle,
  description,
  ctaButtonLink,
  ctaButtonText,
  imgSrc,
}) => (
  <SplitHeroContainer>
    <SplitHeroContentContainer>
      <SplitHeroContent>
        <SplitHeroTagline isOnDark={true}>{tagline}</SplitHeroTagline>
        <SplitHeroDescription>{description}</SplitHeroDescription>
        {ctaButtonLink && (
          <Link to={ctaButtonLink}>
            <WhiteButton>{ctaButtonText}</WhiteButton>
          </Link>
        )}
      </SplitHeroContent>
    </SplitHeroContentContainer>
    <SplitHeroImageContainer>
      <SplitHeroImage imgUrl={getImageUrl(imgSrc)} />
    </SplitHeroImageContainer>
  </SplitHeroContainer>
)

export default SplitHero
