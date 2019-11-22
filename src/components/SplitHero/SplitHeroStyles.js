import styled from "styled-components"
import { BBh1, BBh2, BBp } from "../Base/fonts"

export const SplitHeroContainer = styled.div`
  width: 100%;
  height: 600px;
  display: inline-flex;
  align-items: center;
  background-color: pink;
`

export const SplitHeroContentContainer = styled.div`
  width: 50%;
  text-align: left;
`

export const SplitHeroContent = styled.div`
  width: 50%;
  text-align: left;
  margin: 125px;
`

export const SplitHeroImageContainer = styled.div`
  background-image: url(${(props)=>props.imgUrl});
  float:right;
  width: 50%;
  height: inherit;
`

export const SplitHeroTagline = styled(BBh1)`

`

export const SplitHeroSubtitle = styled(BBh2)`

`

export const SplitHeroDescription = styled(BBp)`

`
