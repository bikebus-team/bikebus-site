import styled from "styled-components"
import { BBh1, BBp } from "../Base/fonts"
import { Button, Link } from "../Base/basecomponents"
import { offWhite, onDark } from "../Base/colors"
import * as circlesMagenta from "../../images/circlesMagenta.svg"
import * as circlesTeal from "../../images/circlesTeal.svg"

export const HeroContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  background-color: black;
  position: relative;
  overflow: hidden;

  @media (min-width: 0px) {
    height: 635px;
  }

  @media (min-width: 420px) {
    height: 500px;
  }

  @media (min-width: 768px) {
    height: 500px;
  }
  
  @media (min-width: 1280px) {
    height: 600px;
  }

  /* Concentric Circles */

  &:before {
    content: "";
    background: url('${circlesTeal}');
    background-position: 0 0;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;

    @media (min-width: 0px) {
      width: 300px;
      top: -100px;
      right: -170px;
    }

    @media (min-width: 420px) {
      width: 500px;
      top: 65px;
      right: -200px;
      left: auto;
    }

    @media (min-width: 768px) {
      width: 500px;
      top: 80px;
      right: -120px;
      left: auto;
    }

    @media (min-width: 1280px) {
      width: 800px;
      top: auto;
      right: auto;
      left: -200px;
    }
  }
  &:after {
    content: "";
    background: url('${circlesMagenta}');
    background-position: 0 0;
    background-repeat: no-repeat;
    position: absolute;
    width: 500px;
    height: 100%;
    right: -125px;
    
    @media (min-width: 0px) {
      width: 240px;
      top: auto;
      bottom: -400px;
      left: -170px;
    }

    @media (min-width: 768px) {
      width: 300px;
      top: 350px;
      bottom: auto;
      right: auto;
      left: -150px;
    }
    @media (min-width: 1280px) {
      width: 500px;
      top: auto;
      bottom: -400px;
      right: -125px;
      left: auto;
    }
  }
`
export const HeroImageConatiner = styled.div`
  background-image: url('${({ BackgroundImgSrc }) => BackgroundImgSrc}');
  width: 100%;
  background-repeat: no-repeat;
  z-index: 2;

  @media (min-width: 0px) {
    height: 100%;
    background-size: 300px;
    background-position: left bottom;
    transform: scaleX(-1);
  }

  @media (min-width: 420px) {
    background-size: auto 380px;
    background-position: -200px bottom;
    transform: scaleX(-1);
  }

  @media (min-width: 768px) {
    background-size: 400px;
    background-position: -10% 170%;
  }

  @media (min-width: 1280px) { 
    background-size: contain;
    background-position: left top;
    transform: scaleX(1);
  }
`

export const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: inherit;
  height: 100%;
  position: absolute;
  z-index: 2;

  @media (min-width: 0px) {
    max-width: initial;
    min-width: 280px;
    width: auto;
    margin-right: 0;
    padding: 0 20px;
    justify-content: space-around;
    left: 0;
  }

  @media (min-width: 420px) {
    margin-left: 20px;
    max-width: 280px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    margin-left: 70px;
    max-width: 420px;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    margin-right: 50px;
    max-width: 550px;
    right: 0;
    left: auto;
  }

  @media (min-width: 1400px) {
    margin-right: 140px;
  }
`

export const HeroTextContainer = styled.div`
`

export const HeroButtonContainer = styled.div`
  display: flex;

  @media (min-width: 0px) {
    flex-direction: column;
    align-items: stretch;
    & ${Link} {
      margin-top: 24px;
      margin-right: 0;
    }
    & ${Button} {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    & ${Link} + ${Link} {
      margin-left: 24px;
    }
  }
`

export const HeroTagline = styled(BBh1)`
  text-transform: uppercase;
  font-stretch: semi-condensed;
  color: ${offWhite};
`

export const HeroSubtitle = styled(BBp)`
  color: ${onDark};
`