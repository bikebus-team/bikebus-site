import React from "react"
import { getImageUrl } from "takeshape-routing"
import {
  CommunityWrapper,
  CommunityImageContainer,
  CommunityImageRow,
  CommunityImage,
  CommunityTitle,
} from "./ExperienceCommunityStyles"

const ExperienceCommunity = ({ title, photos }) => {
  let container = []

  for (let ind = 0; ind < photos.length; ind += 2) {
    container.push(
      <CommunityImageRow key={ind / 2}>
        <CommunityImage
          key={ind}
          isLarge={ind % 4 === 0 || ind % 4 === 3}
          imgSrc={getImageUrl(photos[ind].image.path)}
          alt={
            photos[ind].image.caption &&
            photos[ind].image.caption.blocks[0].text
          }
        />
        {/* If there is an odd number of photos */}
        {photos.length !== ind + 1 && (
          <CommunityImage
            key={ind + 1}
            isLarge={ind + (1 % 4) === 0 || ind + (1 % 4) === 3}
            imgSrc={getImageUrl(photos[ind + 1].image.path)}
            alt={
              photos[ind + 1].image.caption &&
              photos[ind + 1].image.caption.blocks[0].text
            }
          />
        )}
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
