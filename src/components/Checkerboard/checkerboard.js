import PropTypes from "prop-types"
import React from "react"
import { CheckerboardWrapper, TextWrapper } from "./checkerboardstyles"
import Image from "../image"

const Checkerboard = ({ imageLeft }) => (
    <CheckerboardWrapper imageLeft = {imageLeft}>
        <div style={{ width: `35%`, border: `1px solid #ddd` }}>
            <Image/>
        </div>
        <TextWrapper>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </TextWrapper>
    </CheckerboardWrapper>
);

Checkerboard.propTypes = {
    imageLeft: PropTypes.bool,
}

Checkerboard.defaultProps = {
    imageLeft: true,
}

export default Checkerboard