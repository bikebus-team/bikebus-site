import styled from "styled-components"
import { BBh1, BBh2, BBh3, BBp } from "../Base/fonts"
import { darkGreen, onDark, offWhite } from "../Base/colors"
import { Button, PaddedComponentWrapper } from "../Base/basecomponents"
import * as circlesTeal from "../../images/circlesTeal.svg"

export const SplitHeroContainer = styled.div`
  width: 100%;
  height: 600px;
  display: inline-flex;
  align-items: center;
  background-color: ${darkGreen};
  margin-top: 97px;
  position: relative;
  overflow: hidden;

  @media (max-width: 975px) {
    margin-top: 76px;
  }
  &:before {
    content: "";
    background: url('${circlesTeal}');
    background-position: 0 0;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    width: 500px;
    top: 350px;
    right: auto;
    left: -250px;
  }
`

export const SplitHeroContentContainer = styled.div`
  width: 50%;
  text-align: left;
  z-index: 100;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SplitHeroContent = styled.div`
  width: 50%;
  text-align: left;
  margin: 125px;
  color: white;

  @media (min-width: 0px) {
    margin-left: 30px;
    margin-right: 30px;
    width: auto;
  }

  @media (min-width: 768px) {
    margin-left: 50px;
    margin-right: 50px;
    width: auto;
  }

  @media (min-width: 992px) {
    margin-left: 100px;
    margin-right: 100px;
  }
`

export const SplitHeroImageContainer = styled.div`
  float:right;
  width: 50%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  

  @media (max-width: 768px) {
    display: none;
  }
`

export const SplitHeroImage = styled.div`
  background-image: url(${(props)=>props.imgUrl});
  height: inherit;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

`

export const SplitHeroTagline = styled(BBh1)`
  text-transform: uppercase;
  color: white;
`

export const WhiteButton = styled(Button)`
  margin-top: 20px;

  background-color: ${offWhite};
  color: ${darkGreen};
  border: 1px solid ${offWhite};
  cursor: pointer;
  &:hover {
    color: ${offWhite};
    background-color: ${darkGreen};
  }
`

export const SplitHeroSubtitle = styled(BBh3)`
  color: white;

`

export const SplitHeroDescription = styled(BBp)`
  color: ${ onDark}
`

