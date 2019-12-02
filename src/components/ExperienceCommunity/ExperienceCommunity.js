import React from "react"
import { getImageUrl } from "takeshape-routing"
import {
  CommunityWrapper,
  CommunityImageContainer,
  CommunityImageRow,
  CommunityImage,
  CommunityTitle
} from "./ExperienceCommunityStyles"

const ExperienceCommunity = ({ title, photos }) => {
  let container = []
  for (let ind = 0; ind < photos.length; ind += 2) {
    container.push(
      <CommunityImageRow key={(ind/2)}>
        <CommunityImage
          key={ind}
          isLarge={ind % 4 === 0 || ind % 4 === 3}
          imgSrc={getImageUrl(photos[ind].image.path)}
        />
        <CommunityImage
          key={ind + 1}
          isLarge={ind + 1 % 4 === 0 || ind + 1 % 4 === 3}
          imgSrc={getImageUrl(photos[ind + 1].image.path)}
        />
      </CommunityImageRow>
    )
  }
  return (
    <CommunityWrapper>
      <CommunityTitle>{title}</CommunityTitle>
      <CommunityImageContainer>{container}</CommunityImageContainer>
    </CommunityWrapper>
  )
}

export default ExperienceCommunity
