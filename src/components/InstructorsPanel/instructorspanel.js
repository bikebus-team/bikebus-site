import PropTypes from "prop-types"
import React from "react"
import { getImageUrl } from "takeshape-routing";
import { FunImage, InstructorImageWrapper, InstructorsPanelWrapper, InstructorsWrapper, SingleInstructorWrapper, TextWrapper, SeriousImage } from "./instructorspanelstyles"
import { BBh1, BBh3, BBp } from "../Base/fonts";

const InstructorsPanel = ({ title, instructors }) => (
    <InstructorsPanelWrapper>
        <BBh1>{title}</BBh1>
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
            <InstructorImageWrapper>
                <FunImage src={getImageUrl(funHeadShotPath)} alt={funHeadShot.caption && funHeadShot.caption.blocks[0].text} />
                <SeriousImage src={getImageUrl(normalHeadShotPath)} alt={normalHeadShot.caption && normalHeadShot.caption.blocks[0].text} />
            </InstructorImageWrapper>
            <TextWrapper>
                <BBh3>{name}</BBh3>
                <BBp>{title}</BBp>
            </TextWrapper>
        </SingleInstructorWrapper>
    );
}

InstructorsPanel.propTypes = {
    title: PropTypes.string,
    instructors: PropTypes.array,
}

InstructorsPanel.defaultProps = {
    title: "",
    instructors: [],
}

export default InstructorsPanel