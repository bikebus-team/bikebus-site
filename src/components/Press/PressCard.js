import React from "react"
import styled from "styled-components"

import { BBh2, BBp } from "../Base/fonts"
import { darkGreen } from "../Base/colors"
import { SIZES } from "../../tokens"

const Wrapper = styled.div`
  width: 30%;
  box-sizing: border-box;
  border: 2px solid ${darkGreen};
  margin-bottom: 3.33%;

  &:not(:nth-child(3n + 1)) {
    margin-left: 3.33%;
    @media (max-width: ${SIZES.BREAK_TABLET}) {
      margin-left: 0;
    }
  }

  @media (max-width: ${SIZES.BREAK_TABLET}) and (min-width: ${`${parseInt(
      SIZES.BREAK_SM,
      10
    )}px`}) {
    width: 48%;
    margin-bottom: 4%;
    &:not(:nth-child(2n + 1)) {
      margin-left: 4%;
    }
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    width: 100%;
    margin-bottom: 20px;
  }
`

const LogoContainer = styled.div`
  padding: 20px;
  background: ${darkGreen};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Logo = styled.img`
  height: 56px;
  width: 80%;
`

const PressCard_Content = styled.div`
  padding: 24px;
`

const PressCard_Title = styled(BBp)`
  font-size: 1.25em;
  font-family: "Noto Sans Semicondensed", sans-serif;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: 0;
`

const PressCard_Date = styled(BBp)`
  font-style: italic;
  font-weight: 400;
  margin-bottom: 16px;
  margin-top: 0;
`

const PressCard_Description = styled(BBp)`
  margin: 0;
`

const PressCard = ({ title, link, logo, date, body }) => (
  <Wrapper>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <PressCard_Content>
      <PressCard_Title>{title}</PressCard_Title>
      <PressCard_Date>{date}</PressCard_Date>
      <PressCard_Description>{body}</PressCard_Description>
    </PressCard_Content>
  </Wrapper>
)

export default PressCard
