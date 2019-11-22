import React from "react"
import { Button, Link} from "../Base/basecomponents"
import { getImageUrl } from "takeshape-routing";
import {
  SplitHeroContainer,
  SplitHeroContentContainer,
  SplitHeroImageContainer,
  SplitHeroContent,
  SplitHeroTagline,
  SplitHeroSubtitle,
  SplitHeroDescription}
  from "./SplitHeroStyles"


const SplitHero = ({ tagline, subtitle, description, ctaButtonLink, ctaButtonText, imgSrc }) => (
    <SplitHeroContainer>
      <SplitHeroContentContainer>
        <SplitHeroContent>
          <SplitHeroTagline>{tagline}</SplitHeroTagline>
          <SplitHeroSubtitle>{subtitle}</SplitHeroSubtitle>
          <SplitHeroDescription>{description}</SplitHeroDescription>
          {/* TODO: have conditional for if there is no button added on CMS side */}
          <Link to={ctaButtonLink}>
            <Button>{ctaButtonText}</Button>
          </Link>
        </SplitHeroContent>
      </SplitHeroContentContainer>
      <SplitHeroImageContainer
      imgUrl={getImageUrl(imgSrc)}
      >
      </SplitHeroImageContainer>
    </SplitHeroContainer>

)

export default SplitHero
