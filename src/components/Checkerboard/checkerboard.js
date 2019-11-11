import PropTypes from "prop-types"
import React from "react"
import { CheckerboardButton, CheckerboardLink, CheckerboardWrapper, LeftCheckerboardWrapper, RightCheckerboardWrapper, TextWrapper } from "./checkerboardstyles"
import Image from "../image"

const Checkerboard = ({ imageLeft, title, text, hasButton, buttonText, buttonLink }) => (
    <CheckerboardWrapper imageLeft={imageLeft}>
        <LeftCheckerboardWrapper>
            <Image/>
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
);

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