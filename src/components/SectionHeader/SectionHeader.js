import React from "react"
import {
  SectionHeaderContainer,
  SectionHeaderContentContainer,
  SectionHeaderTitle,
  SectionHeaderDescription}
  from "./SectionHeaderStyles"

const SectionHeader = ({ title, description}) => (
  <SectionHeaderContainer>
    <SectionHeaderContentContainer>
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
      <SectionHeaderDescription>{description}</SectionHeaderDescription>
    </SectionHeaderContentContainer>
  </SectionHeaderContainer>
)

export default SectionHeader
