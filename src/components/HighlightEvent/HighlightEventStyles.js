import styled from "styled-components"
import { Button } from "../Base/basecomponents"
import { BBh1, BBh2, BBp } from "../Base/fonts"
import { offWhite, darkGreen } from '../Base/colors';

export const HighlightEventContainer = styled.div`
  padding: 0 50px 120px 50px;
  display: flex;
  align-items: center;
  position: relative;
  @media (min-width: 0px) {
    height: auto;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    height: 480px;
  }
`

export const HELeftContainer = styled.div`
  width: 50%;
  background-color: ${darkGreen};
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: vertical;

  @media (min-width: 0px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const HELeftContentContainer = styled.div`
  text-align: left;
  // padding-left: 80px;
  max-width: 430px;
  width: 70%;
  
  @media (min-width: 0px) {
    padding: 40px 0;
    margin: 0 auto;
    max-width: 1000px;
  }

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 992px) {
    padding: 0 80px;
  }

  @media (min-width: 1280px) {
    padding: 0 40px;
  }

  @media (min-width: 1400px) {
    padding: 0 80px;
  }
`

export const HETitle = styled(BBh1)`
  text-transform: uppercase;
  font-stretch: semi-condensed;
  color: ${offWhite};
`

export const HEDate = styled(BBh2)`
  color: ${offWhite};
  font-weight: normal;
`;

export const HEDesc = styled(BBp)`
  color: ${offWhite};
  margin: 40px 0;
`
export const HEImageContainer = styled.div`
  overflow: hidden;

  @media (min-width: 0px) {
    width: 100%;
    height: 350px;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`
export const HEImage = styled.img`
  @media (min-width: 0px) {
    max-height: initial;
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 768px) {
    max-height: 100%;
    max-width: initial;
    width: auto;
  }
`

export const HECta = styled(Button)`
  background-color: ${offWhite};
  color: ${darkGreen};
  &:hover {
    color: ${offWhite};
    background-color: ${darkGreen};
    border: 1px solid ${offWhite};
  }
`