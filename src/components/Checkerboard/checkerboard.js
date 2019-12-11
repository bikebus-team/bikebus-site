import PropTypes from "prop-types"
import React from "react"
import { getImageUrl } from "takeshape-routing";
import { CheckerImage, CheckerboardButton, CheckerboardLink, CheckerboardWrapper, LeftCheckerboardWrapper, RightCheckerboardWrapper, TextWrapper } from "./checkerboardstyles"
// import Image from "../image"

const Checkerboard = ({ imageLeft, title, text, imageSrc, imageCaption, hasButton, buttonText, buttonLink }) => {
    //Pass in the URL for imageSrc NOT the getImageUrl
    return (
    <CheckerboardWrapper imageLeft={imageLeft}>
        <LeftCheckerboardWrapper>
            <CheckerImage imgUrl={getImageUrl(imageSrc)} alt={imageCaption}/>
        </LeftCheckerboardWrapper>
        <RightCheckerboardWrapper imageLeft={imageLeft}>
            <TextWrapper>
                <h2>{title}</h2>
                <p>{text}</p>
            </TextWrapper>
            <CheckerboardLink to={buttonLink}>
                <CheckerboardButton displayVal={hasButton}>{buttonText}</CheckerboardButton>
            </CheckerboardLink>
        </RightCheckerboardWrapper>
    </CheckerboardWrapper>
)
};

Checkerboard.propTypes = {
    imageLeft: PropTypes.bool,
    title: PropTypes.string,
    text: PropTypes.string,
    hasButton: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string
}

Checkerboard.defaultProps = {
    imageLeft: true,
    title: "",
    text: "",
    hasButton: true,
    buttonText: "BUTTON",
    buttonLink: ""
}

export default Checkerboard