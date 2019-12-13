import PropTypes from "prop-types"
import React from "react"
import { getImageUrl } from "takeshape-routing"
import {
  CheckerImage,
  CheckerboardButton,
  CheckerboardLink,
  CheckerboardWrapper,
  LeftCheckerboardWrapper,
  RightCheckerboardWrapper,
  TextWrapper,
} from "./checkerboardstyles"
import { BBh2, BBp } from "../Base/fonts"

const Checkerboard = ({
  imageLeft,
  title,
  text,
  image,
  hasButton,
  buttonText,
  buttonLink,
}) => {
  const { path, caption } = image
  //Pass in the URL for imageSrc NOT the getImageUrl
  return (
    <CheckerboardWrapper imageLeft={imageLeft}>
      <LeftCheckerboardWrapper>
        <CheckerImage
          imgUrl={getImageUrl(path)}
          alt={caption && caption.blocks[0].text}
        />
      </LeftCheckerboardWrapper>
      <RightCheckerboardWrapper imageLeft={imageLeft}>
        <TextWrapper>
          <BBh2>{title}</BBh2>
          <BBp>{text}</BBp>
        </TextWrapper>
        <CheckerboardLink to={buttonLink}>
          <CheckerboardButton displayVal={hasButton}>
            {buttonText}
          </CheckerboardButton>
        </CheckerboardLink>
      </RightCheckerboardWrapper>
    </CheckerboardWrapper>
  )
}

Checkerboard.propTypes = {
  imageLeft: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  hasButton: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}

Checkerboard.defaultProps = {
  imageLeft: true,
  title: "",
  text: "",
  hasButton: true,
  buttonText: "BUTTON",
  buttonLink: "",
}

export default Checkerboard
