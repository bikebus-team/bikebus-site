import styled from "styled-components"
import { BBh1, BBh2, BBh3, BBp } from "../Base/fonts"
import { darkGreen } from "../Base/colors"
import { Button } from "../Base/basecomponents"

export const SplitHeroContainer = styled.div`
  width: 100%;
  height: 600px;
  display: inline-flex;
  align-items: center;
  background-color: ${(darkGreen)};
`

export const SplitHeroContentContainer = styled.div`
  width: 50%;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SplitHeroContent = styled.div`
  width: 50%;
  text-align: left;
  margin: 125px;
  color: white;
`

export const SplitHeroImageContainer = styled.div`
  background-image: url(${(props)=>props.imgUrl});
  float:right;
  width: 50%;
  height: inherit;

  @media (max-width: 768px) {
    display: none;
  }
`

export const SplitHeroTagline = styled(BBh1)`
  text-transform: uppercase;
`

export const WhiteButton = styled(Button)`
  margin-top: 20px;
  background-color:white;
  color: ${(darkGreen)};
  text-transform: uppercase;
`

export const SplitHeroSubtitle = styled(BBh3)`

`

export const SplitHeroDescription = styled(BBp)`

`

