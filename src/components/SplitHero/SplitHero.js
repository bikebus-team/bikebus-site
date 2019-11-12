import React from "react"
import { Button, Link} from "../Base/basecomponents"
import { getImageUrl } from "takeshape-routing";
import {
  SplitHeroContainer,
  SplitHeroContentContainer,
  SplitHeroImageContainer,
  SplitHeroContent}
  from "./SplitHeroStyles"


const SplitHero = ({ tagline, subtitle, description, ctaButtonLink, ctaButtonText }) => (
    <SplitHeroContainer>
      <SplitHeroContentContainer>
        <SplitHeroContent>
          <h1>{tagline}</h1>
          <h2>{subtitle}</h2>
          <p>{description}</p>
          <Link to={ctaButtonLink}>
            <Button>{ctaButtonText}</Button>
          </Link>
        </SplitHeroContent>
      </SplitHeroContentContainer>
      <SplitHeroImageContainer
      imgUrl={getImageUrl()}
      />
    </SplitHeroContainer>

)

export default SplitHero
