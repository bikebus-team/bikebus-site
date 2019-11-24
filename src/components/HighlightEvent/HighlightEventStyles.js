import styled from "styled-components"
import { Button } from "../Base/basecomponents"
import { BBh1, BBh2, BBp } from "../Base/fonts"
import { offWhite, darkGreen } from '../Base/colors';

export const HighlightEventContainer = styled.div`
  // width: 100%;
  height: 480px;
  padding: 0 50px 120px 50px;
  display: flex;
  align-items: center;
  position: relative;
`

export const HELeftContainer = styled.div`
  width: 50%;
  background-color: ${darkGreen};
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: vertical;

  /* @media (min-width: 0px) {
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
    margin-right: 140px; */
`

export const HELeftContentContainer = styled.div`
  text-align: left;
  padding-left: 80px;

  /* @media (min-width: 0px) {
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
    margin-right: 140px; */
`

export const HETitle = styled(BBh1)`
  text-transform: uppercase;
  font-stretch: semi-condensed;
  color: ${offWhite};
  width: 430px;
`

export const HEDate = styled(BBh2)`
  color: ${offWhite};
  font-weight: normal;
`;

export const HEDesc = styled(BBp)`
  color: ${offWhite};
  width: 430px;
  margin: 40px 0;
`
export const HEImageContainer = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
`
export const HEImage = styled.img`
  max-height: 100%;
  width: auto;
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