import React from "react"
import styled from "styled-components"
import { richBlack } from "../components/Base/colors"
import { BBh1 } from "../components/Base/fonts"
import { PaddedComponentWrapper } from "../components/Base/basecomponents"
import { SIZES } from "../tokens"

const BannerHero = styled(PaddedComponentWrapper)`
  margin-top: 97px;
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${richBlack};

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

const BannerHeroTitle = styled(BBh1)`
  margin: 0;
  width: 100%;
  text-align: center;
  max-width: 759px;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    max-width: 627px;
  }

  @media (max-width: ${SIZES.BREAK_SM}) {
    text-align: left;
  }
`

const PaddedWrapper = styled(PaddedComponentWrapper)`
  padding-top: 0;
  padding-bottom: 0;
`

const ContentWrapper = styled.div`
  max-width: ${({ fullWidth }) => !fullWidth && "759px"};
  margin: 100px auto;
  width: 100%;

  @media (max-width: ${SIZES.BREAK_TABLET}) {
    max-width: ${({ fullWidth }) => !fullWidth && "627px"};
    margin: 80px auto;
  }

  @media (max-width: ${SIZES.BREAK_MOBILE}) {
    margin: 60px auto;
  }

  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`

const ExtraPageLayout = ({ header, children, fullWidth = false }) => (
  <>
    <BannerHero>
      <BannerHeroTitle isOnDark={true}>{header}</BannerHeroTitle>
    </BannerHero>
    <PaddedWrapper>
      <ContentWrapper fullWidth={fullWidth}>{children}</ContentWrapper>
    </PaddedWrapper>
  </>
)

export default ExtraPageLayout
