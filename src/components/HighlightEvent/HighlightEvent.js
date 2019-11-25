import React from "react"
import { Button, ButtonSecondary, Link } from "../Base/basecomponents"
import { getImageUrl } from "takeshape-routing"
import {
  HighlightEventContainer,
  HELeftContainer,
  HELeftContentContainer,
  HETitle,
  HEDesc,
  HEDate,
  HEImageContainer,
  HECta,
  HEImage,
} from "./HighlightEventStyles"

const formatDate = date => {
  let JSDate = new Date(date);
  let day = JSDate.getDate();
  let month = JSDate.toLocaleString('default', { month: 'long' });
  let time = JSDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  let formatted = month + ' ' + day + ' ' + time;
  return (
  <HEDate>
    {formatted}
  </HEDate>);
}

const HighlightEvent = ({ title, description, ctaLink, ctaText, date, imgSrc }) => (
  <HighlightEventContainer>
    <HELeftContainer>
      <HELeftContentContainer>
        <HETitle>{title}</HETitle>
        {formatDate(date)}
        <HEDesc>{description}</HEDesc>
        <a href={ctaLink} target="_blank">
          <HECta>{ctaText}</HECta>
        </a>
      </HELeftContentContainer>
    </HELeftContainer>
    <HEImageContainer>
      <HEImage src={getImageUrl(imgSrc)} />
    </HEImageContainer>
  </HighlightEventContainer>
)

export default HighlightEvent
