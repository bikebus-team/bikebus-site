import styled from "styled-components"
import { BBh1, BBh2 } from "../Base/fonts"
import { offWhite } from '../Base/colors';
import * as circlesMagenta from '../../images/circlesMagenta.svg'
import * as circlesTeal from '../../images/circlesTeal.svg'

export const HeroContainer = styled.div`
  background-image: url('${ ({BackgroundImgSrc }) => BackgroundImgSrc }');
  width: 100%;
  height: 600px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left top;
  position: relative;
  &:before {
    content: "";
    background: url('${circlesTeal}');
    background-position: 0 0;
    background-repeat: no-repeat;
    width: 300px;
    height: 100%;
    z-index: 0;
  }
  &:after {
    content: "";
    background: url('${circlesMagenta}');
    background-position: 0 0;
    background-repeat: no-repeat;
    width: 300px;
    height: 100%;
    z-index: 0;
  }
`

export const HeroContentContainer = styled.div`
  text-align: left;
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

  @media (min-width: 1280px) {
    margin-right: 50px;
  }

  @media (min-width: 1400px) {
    margin-right: 140px;
`

export const HeroTagline = styled(BBh1)`
text-transform: uppercase;
font-stretch: semi-condensed;
color: ${offWhite}
`


export const HeroSubtitle = styled(BBh2)`
color: ${offWhite};
font-size: 16px;
font-weight: normal;
`
