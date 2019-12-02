import React from "react"
import { Button, ButtonSecondary, Link } from "../Base/basecomponents"
import { getImageUrl } from "takeshape-routing"
import {
  HighlightEventContainer,
  HELeftContainer,
  HELeftContentContainer,
  HETitle,
  HEDesc,
  HEImageContainer,
  HECta,
  HEImage,
} from "./HighlightEventStyles"

const HighlightEvent = ({ title, description, ctaLink, ctaText, imgSrc }) => (
  <HighlightEventContainer>
    <HELeftContainer>
      <HELeftContentContainer>
        <HETitle>{title}</HETitle>
        <HEDesc>{description}</HEDesc>
        <a href={ctaLink} target="_blank" rel="noreferrer">
          <HECta>{ctaText}</HECta>
        </a>
      </HELeftContentContainer>
    </HELeftContainer>
    <HEImageContainer>
      <HEImage imgUrl={getImageUrl(imgSrc)} />
    </HEImageContainer>
  </HighlightEventContainer>
)

export default HighlightEvent
