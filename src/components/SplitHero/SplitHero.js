import React from "react"
import { Button, Link} from "../Base/basecomponents"
import {
  SplitHeroContainer,
  SplitHeroContentContainer,
  SplitHeroImageContainer,
  SplitHeroContent}
  from "./SplitHeroStyles"


const SplitHero = ({ tagline, subtitle, ctaButtonLink, ctaButtonText }) => (
    <SplitHeroContainer>
      <SplitHeroContentContainer>
        <SplitHeroContent>
          <h1>{tagline}</h1>
          <h2>{subtitle}</h2>
          <Link to={ctaButtonLink}>
            <Button>{ctaButtonText}</Button>
          </Link>
        </SplitHeroContent>
      </SplitHeroContentContainer>
      <SplitHeroImageContainer>
      </SplitHeroImageContainer>
    </SplitHeroContainer>

)

export default SplitHero
