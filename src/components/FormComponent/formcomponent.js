import React from 'react';
import FormStep1 from "../FormStep1/formstep1";
import FormStep2 from "../FormStep2/formstep2";
import FormStep3 from "../FormStep3/formstep3";
import FormFinal from "../FormFinal/formfinal";
import { CircleDiv, FormStepWrapper, FormContentWrapper, FormTitle, FormTitleWrapper, FormWrapper, StepLine, StepH, StepTitleGroup, StepTitleWrapper, Subtitle, SubtitleWrapper } from './formcomponentstyles';
import { BBh1 } from "../Base/fonts";

const FormComponent = ({ clickedOption, formData }) => {
    const [step, setStep] = React.useState(1);
    const [user, setUser] = React.useState({
        numRides: 1,
        frequency: "One-Time",
        name: "",
        emailAddress: "",
        phoneNum: "",
        message: "",
        pickUpAddress: "",
        dropOffAddress: "",
        tentativeDate: "",
        startTime: "",
        endTime: ""
    });
    const [requestError, setRequestError] = React.useState(false);
    return <CircleDiv>
            <FormWrapper>
                <FormContentWrapper>
                <FormTitleWrapper>
                    <FormTitle>{formData.title}</FormTitle>
                    <SubtitleWrapper>
                        <Subtitle>{formData.overarchingDescription}</Subtitle>
                    </SubtitleWrapper>
                </FormTitleWrapper>
                <StepTitleGroup shouldDisplay={step !== 4}>
                    <StepTitle title={"1. " + formData.step1.stepTitle} smallTitle="1" fullOpacity={step >= 1}/>
                    <StepTitle title={"2. " + formData.step2.stepTitle} smallTitle="2" fullOpacity={step >= 2}/>
                    <StepTitle title={"3. " + formData.step3.stepTitle} smallTitle="3" fullOpacity={step >= 3}/>
                </StepTitleGroup>
                {renderStep(formData, step, setStep, user, setUser, clickedOption, requestError, setRequestError)}  
                </FormContentWrapper>
        </FormWrapper>
      </CircleDiv>
}

function renderStep(formData, step, setStep, user, setUser, clickedOption, requestError, setRequestError) {
    switch(step) {
        case 1:
            return <FormStepWrapper>
                    <FormStep1 
                        user={user} 
                        setUser={setUser} 
                        continueOnClick={() => continueOnClick(step, setStep)}
                        clickedOption={clickedOption}
                        stepData={formData.step1}
                        />
                </FormStepWrapper>
        case 2:
            return <FormStepWrapper>
                    <FormStep2 
                        user={user} 
                        setUser={setUser} 
                        continueOnClick={() => continueOnClick(step, setStep)}
                        backOnClick={() => backOnClick(step, setStep)}
                        stepData={formData.step2}
                         />
                </FormStepWrapper>
        case 3:
            return <FormStepWrapper>
                    <FormStep3 
                        user={user} 
                        setUser={setUser} 
                        continueOnClick={() => continueOnClick(step, setStep)}
                        backOnClick={() => backOnClick(step, setStep)}
                        setRequestError={setRequestError}
                        stepData={formData.step3}
                        />
                </FormStepWrapper>
        case 4:
            return <FormStepWrapper>
                    <FormFinal 
                        requestError={requestError}
                        backOnClick={() => backOnClick(step, setStep)}
                    />
            </FormStepWrapper>
        default:
            return <BBh1>Error</BBh1>
    }
}

function continueOnClick(step, setStep) {
    setStep(step + 1);
}

function backOnClick(step, setStep) {
    setStep(step - 1);
}

// Title for each individual step
const StepTitle = ({ title, smallTitle, fullOpacity }) => (
    <StepTitleWrapper fullOpacity={fullOpacity}>
        <StepH fullOpacity={fullOpacity} isSmall={false} >{title}</StepH>
        <StepH fullOpacity={fullOpacity} isSmall={true} >{smallTitle}</StepH>
        <StepLine fullOpacity={fullOpacity}/>
    </StepTitleWrapper>
);

export default FormComponent
