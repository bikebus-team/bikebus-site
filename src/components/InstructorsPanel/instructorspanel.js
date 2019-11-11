import PropTypes from "prop-types"
import React from "react"
import { InstructorsPanelWrapper, InstructorsWrapper, SingleInstructorWrapper, TextWrapper } from "./instructorspanelstyles"
import Image from "../image"

const InstructorsPanel = ({ title }) => (
    <InstructorsPanelWrapper>
        <h1>{title}</h1>
        <InstructorsWrapper>
            {singleInstructor()}
            {singleInstructor()}
            {singleInstructor()}
        </InstructorsWrapper>
    </InstructorsPanelWrapper>
);

function singleInstructor() {
    return (
        <SingleInstructorWrapper>
            <div style={{ width: `100%`, border: `1px solid #ddd` }}>
                <Image/>
            </div>
            <TextWrapper>
                <h3>Name</h3>
                <p>Some Fun Title</p>
            </TextWrapper>
        </SingleInstructorWrapper>
    );
}

InstructorsPanel.propTypes = {
}

InstructorsPanel.defaultProps = {
}

export default InstructorsPanel