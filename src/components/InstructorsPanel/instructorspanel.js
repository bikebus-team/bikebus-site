import PropTypes from "prop-types"
import React from "react"
import { getImageUrl } from "takeshape-routing";
import { InstructorsPanelWrapper, InstructorsWrapper, SingleInstructorWrapper, TextWrapper } from "./instructorspanelstyles"
import Image from "../image"

const InstructorsPanel = ({ title, instructors }) => (
    <InstructorsPanelWrapper>
        <h1>{title}</h1>
        <InstructorsWrapper>
            {instructors.map((instructor, index) => 
                singleInstructor(instructor, index))}
        </InstructorsWrapper>
    </InstructorsPanelWrapper>
);

function singleInstructor(instructor, index) {
    const {name, title, normalHeadShot, funHeadShot} = instructor.instructor;
    const normalHeadShotPath = normalHeadShot.path;
    const funHeadShotPath = funHeadShot.path;
    return (
        <SingleInstructorWrapper key={index}>
            <div style={{ width: `100%`, border: `1px solid #ddd` }}>
                <img src={getImageUrl(normalHeadShotPath)} />
                <img src={getImageUrl(funHeadShotPath)} />
            </div>
            <TextWrapper>
                <h3>{name}</h3>
                <p>{title}</p>
            </TextWrapper>
        </SingleInstructorWrapper>
    );
}

InstructorsPanel.propTypes = {
}

InstructorsPanel.defaultProps = {
}

export default InstructorsPanel