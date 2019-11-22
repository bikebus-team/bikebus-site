import React from 'react';
import FormStep1 from "../FormStep1/formstep1";
import { FormTitle, FormWrapper, StepLine, StepTitleGroup, StepTitleWrapper, SubtitleWrapper } from './formcomponentstyles';

const StepTitle = ({ title }) => (
    <StepTitleWrapper>
        <h5>{title}</h5>
        <StepLine />
    </StepTitleWrapper>
);

function renderStep(step) {
    switch(step) {
        case 1:
            return <FormStep1 />
        case 2:
            return <h1>CASE 2</h1>
        case 3:
            return <h1>CASE 3</h1>
        default:
            return <h1>DEFAULT</h1>
    }
}

const FormComponent = () => {
    const [step, setStep] = React.useState(1);
    return <FormWrapper>
            <FormTitle>
                <h1>REQUEST A QUOTE</h1>
                <SubtitleWrapper>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </SubtitleWrapper>
            </FormTitle>
            <StepTitleGroup>
                <StepTitle title="1. Choose Package"/>
                <StepTitle title="2. Personal Info"/>
                <StepTitle title="3. Details & Scheduling"/>
            </StepTitleGroup>
            {renderStep(step)}
      </FormWrapper>
}
  

export default FormComponent
