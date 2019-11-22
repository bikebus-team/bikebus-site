import React from "react"
import { getImageUrl } from "takeshape-routing"
import {
    StepsContainer,
    StepsHeadingContainer,
    StepsHeading,
    StepsSubtitle,
    StepsContentContainer,
    SingleStepWrapper,
    StepIconContainer,
    StepTextContainer,
    StepTitle,
    StepDescription}
  from "./StepsStyles"

const Steps = ({ heading, subtitle, steps}) => (
    <StepsContainer>
        <StepsHeadingContainer>
            <StepsHeading>{heading}</StepsHeading>
            <StepsSubtitle>{subtitle}</StepsSubtitle>
        </StepsHeadingContainer>
        <StepsContentContainer>
            {steps.map((step, index) => 
                singleStep(step, index))}
        </StepsContentContainer>
    </StepsContainer>
  
  )

function singleStep(step, index) {
    const description = step.differentiator.description;
    const iconPath = step.differentiator.icon.path;
    const stepTitle = step.differentiator.title
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