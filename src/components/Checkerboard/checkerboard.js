import PropTypes from "prop-types"
import React from "react"
import { getImageUrl } from "takeshape-routing";
import { CheckerboardButton, CheckerboardLink, CheckerboardWrapper, LeftCheckerboardWrapper, RightCheckerboardWrapper, TextWrapper } from "./checkerboardstyles"
// import Image from "../image"

const Checkerboard = ({ imageLeft, title, text, imageSrc, hasButton, buttonText, buttonLink }) => {
    //Pass in the URL for imageSrc NOT the getImageUrl
    return (
    <CheckerboardWrapper imageLeft={imageLeft}>
        <LeftCheckerboardWrapper>
            <img src={getImageUrl(imageSrc)} />
        </LeftCheckerboardWrapper>
        <RightCheckerboardWrapper imageLeft={imageLeft}>
            <TextWrapper>
                <h2>{title}</h2>
                <p>{text}</p>
            </TextWrapper>
            <CheckerboardLink to={buttonLink}>
                <CheckerboardButton display={hasButton}>{buttonText}</CheckerboardButton>
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