import React from "react"
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
import { OutsideLink } from "../Base/basecomponents"

const HighlightEvent = ({ title, description, ctaLink, ctaText, image, ...rest }) => (
  <HighlightEventContainer {...rest}>
    <HELeftContainer hasImage={image != null}>
      <HELeftContentContainer>
        <HETitle>{title}</HETitle>
        <HEDesc>{description}</HEDesc>
        {ctaLink && ctaText && 
          <OutsideLink href={ctaLink} target="_blank" rel="noopener noreferrer">
            <HECta>{ctaText}</HECta>
          </OutsideLink>
        }
      </HELeftContentContainer>
    </HELeftContainer>
    {image && 
      <HEImageContainer>
        <HEImage
          imgUrl={getImageUrl(image.path)}
          aria-label={image.caption && image.caption.blocks[0].text}
          role="img"
        />
      </HEImageContainer>
    }
  </HighlightEventContainer>
)

export default HighlightEvent
