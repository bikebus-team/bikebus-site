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

const HighlightEvent = ({ title, description, ctaLink, ctaText, image }) => (
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
      <HEImage
        imgUrl={getImageUrl(image.path)}
        aria-label={image.caption && image.caption.blocks[0].text}
        role="img"
      />
    </HEImageContainer>
  </HighlightEventContainer>
)

export default HighlightEvent
