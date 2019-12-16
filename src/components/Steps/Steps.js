import React from "react"
import { getImageUrl } from "takeshape-routing"
import {
    StepsContainer,
    StepsHeadingContainer,
    StepsHeading,
    StepsContentContainer,
    SingleStepWrapper,
    StepIconContainer,
    StepTextContainer,
    StepTitle,
    StepDescription}
  from "./StepsStyles"

const Steps = ({ heading, steps}) => (
    <StepsContainer>
        <StepsHeadingContainer>
            <StepsHeading>{heading}</StepsHeading>
        </StepsHeadingContainer>
        <StepsContentContainer>
            {steps.map((step, index) => 
                singleStep(step, index))}
        </StepsContentContainer>
    </StepsContainer>
  
  )

function singleStep(step, index) {
    const description = step.step.description;
    const iconPath = step.step.icon.path;
    const stepTitle = step.step.title
    return (
        <SingleStepWrapper key={index}>
            <StepIconContainer>
                <img src={getImageUrl(iconPath)} style={{ width: `100%`}} />
            </StepIconContainer>
            <StepTextContainer>
                <StepTitle>{stepTitle}</StepTitle> 
                <StepDescription>{description}</StepDescription>
            </StepTextContainer>
        </SingleStepWrapper>
    );
}

export default Steps