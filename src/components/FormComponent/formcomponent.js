import React from 'react';
import FormStep1 from "../FormStep1/formstep1";
import FormStep2 from "../FormStep2/formstep2";
import FormStep3 from "../FormStep3/formstep3";
import FormFinal from "../FormFinal/formfinal";
import { CircleDiv, FormStepWrapper, FormTitle, FormWrapper, StepLine, StepH, StepTitleGroup, StepTitleWrapper, Subtitle, SubtitleWrapper } from './formcomponentstyles';

const StepTitle = ({ title, smallTitle, fullOpacity }) => (
    <StepTitleWrapper fullOpacity={fullOpacity}>
        <StepH fullOpacity={fullOpacity} isSmall={false} >{title}</StepH>
        <StepH fullOpacity={fullOpacity} isSmall={true} >{smallTitle}</StepH>
        <StepLine fullOpacity={fullOpacity}/>
    </StepTitleWrapper>
);

function continueOnClick(step, setStep) {
    setStep(step + 1);
}

function backOnClick(step, setStep) {
    setStep(step - 1);
}

function renderStep(step, setStep, user, setUser, clickedOption, requestError, setRequestError) {
    switch(step) {
        case 1:
            return <FormStepWrapper>
                    <FormStep1 
                        user={user} 
                        setUser={setUser} 
                        continueOnClick={() => continueOnClick(step, setStep)}
                        clickedOption={clickedOption}
                        />
                </FormStepWrapper>
        case 2:
            return <FormStepWrapper>
                    <FormStep2 
                        user={user} 
                        setUser={setUser} 
                        continueOnClick={() => continueOnClick(step, setStep)}
                        backOnClick={() => backOnClick(step, setStep)}
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
            return <h1>DEFAULT</h1>
    }
}

const FormComponent = ({ clickedOption }) => {
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
                <FormTitle>
                    <h1>REQUEST A QUOTE</h1>
                    <SubtitleWrapper>
                        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Subtitle>
                    </SubtitleWrapper>
                </FormTitle>
                <StepTitleGroup shouldDisplay={step != 4}>
                    <StepTitle title="1. Choose Package" smallTitle="1" fullOpacity={step >= 1}/>
                    <StepTitle title="2. Personal Info" smallTitle="2" fullOpacity={step >= 2}/>
                    <StepTitle title="3. Details & Scheduling" smallTitle="3" fullOpacity={step >= 3}/>
                </StepTitleGroup>
                {renderStep(step, setStep, user, setUser, clickedOption, requestError, setRequestError)}  
        </FormWrapper>
      </CircleDiv>
}

export default FormComponent
