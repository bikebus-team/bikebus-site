import styled from "styled-components"
import { Button } from "../Base/basecomponents"
import { BBh1, BBh2, BBp } from "../Base/fonts"
import { offWhite, darkGreen, onDark } from '../Base/colors';
import * as circlesTeal from "../../images/circlesTeal.svg"

export const HighlightEventContainer = styled.div`
  padding: 0 0 120px 0;
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: 0px) {
    height: auto;
    flex-direction: column;
  }

  @media (min-width: 420px) {
    padding: 0 32px 120px;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    height: 400px;
    padding: 0 50px 120px;
  }

`

export const HELeftContainer = styled.div`
  width: 50%;
  background-color: ${darkGreen};
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: vertical;
  position: relative;
  overflow: hidden;

  @media (min-width: 0px) {
    width: 100%;
    padding-bottom: 30px;
  }

  @media (min-width: 768px) {
    width: 50%;
    padding-bottom: 0;
  }

  &:before {
    content: "";
    background: url('${circlesTeal}');
    background-position: 0 0;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    width: 300px;
    top: 250px;
    left: -150px;

    @media (max-width: 768px) {
      top: 150px;
    }
  }
  &:after {
    content: "";
    background: url('${circlesTeal}');
    background-position: 0 0;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    width: 300px;
    top: -150px;
    right: -150px;
  }
`

export const HELeftContentContainer = styled.div`
  text-align: left;
  max-width: 430px;
  width: 70%;
  z-index: 100;
  
  @media (min-width: 0px) {
    padding: 40px 0;
    margin: 0 auto;
    max-width: unset;
  }

  @media (min-width: 768px) {
    padding: 0 80px;
  }
`

export const HETitle = styled(BBh1)`
  text-transform: uppercase;
  color: ${offWhite};
  margin: 0;
`

export const HEDesc = styled(BBp)`
  color: ${onDark};
  @media (min-width: 0px) {
    margin: 24px 0 36px;
  }

  @media (min-width: 768px) {
    margin: 24px 0 50px;
  }

  @media (min-width: 1280px) {
    margin: 40px 0;
  }
`
export const HEImageContainer = styled.div`
  overflow: hidden;

  @media (min-width: 0px) {
    width: 100%;
    height: 350px;
    display: none;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
    display: block;
  }
`
export const HEImage = styled.div`
  background-image: url('${(props)=>props.imgUrl}');
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`

export const HECta = styled(Button)`
  background-color: ${offWhite};
  color: ${darkGreen};
  border: 1px solid ${offWhite};
  cursor: pointer;
  &:hover {
    color: ${offWhite};
    background-color: ${darkGreen};
  }
`