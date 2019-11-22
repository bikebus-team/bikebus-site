import styled from "styled-components"
import { BBh1, BBh2 } from "../Base/fonts"

export const HeroContainer = styled.div`
  background-image: url('${ ({BackgroundImgSrc }) => BackgroundImgSrc }');
  width: 100%;
  height: 600px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
`

export const HeroContentContainer = styled.div`
  text-align: right;
  width: inherit;
  margin-right: 150px;
  max-width: 550px;
  position: absolute;
  right: 0;

  @media (min-width: 0px) {
    margin-right: 30px;
  }

  @media (min-width: 768px) {
    margin-right: 50px;
  }

  @media (min-width: 992px) {
    margin-right: 100px;
  }

  @media (min-width: 1200px) {
    margin-right: 150px;
`

export const HeroTagline = styled(BBh1)`

`


export const HeroSubtitle = styled(BBh2)`

`
