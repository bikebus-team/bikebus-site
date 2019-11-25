import React from 'react';
import FormStep1 from "../FormStep1/formstep1";
import FormStep2 from "../FormStep2/formstep2";
import FormStep3 from "../FormStep3/formstep3";
import { ActiveButton, BackButton, FormStepWrapper, FormTitle, FormWrapper, StepLine, StepTitleGroup, StepTitleWrapper, SubtitleWrapper } from './formcomponentstyles';

const StepTitle = ({ title }) => (
    <StepTitleWrapper>
        <h5>{title}</h5>
        <StepLine />
    </StepTitleWrapper>
);

function continueOnClick(step, setStep) {
    setStep(step + 1);
}

function backOnClick(step, setStep) {
    setStep(step - 1);
}

function renderStep(step, setStep) {
    switch(step) {
        case 1:
            return <FormStepWrapper>
                    <FormStep1 />
                    <ActiveButton onClick={() => continueOnClick(step, setStep)}>CONTINUE</ActiveButton>
                </FormStepWrapper>
        case 2:
            return <FormStepWrapper>
                    <FormStep2 />
                    <BackButton onClick={() => backOnClick(step, setStep)}>PREVIOUS</BackButton>
                    <ActiveButton onClick={() => continueOnClick(step, setStep)}>CONTINUE</ActiveButton>
                </FormStepWrapper>
        case 3:
            return <FormStepWrapper>
                    <FormStep3 />
                    <BackButton onClick={() => backOnClick(step, setStep)}>PREVIOUS</BackButton>
                </FormStepWrapper>
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
            {renderStep(step, setStep)}
      </FormWrapper>
}
  

export default FormComponent
