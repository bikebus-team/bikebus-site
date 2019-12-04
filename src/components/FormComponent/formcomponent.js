import React from 'react';
import FormStep1 from "../FormStep1/formstep1";
import FormStep2 from "../FormStep2/formstep2";
import FormStep3 from "../FormStep3/formstep3";
import FormFinal from "../FormFinal/formfinal";
import { ActiveButton, BackButton, FormStepWrapper, FormTitle, FormWrapper, StepLine, StepH, StepTitleGroup, StepTitleWrapper, SubtitleWrapper } from './formcomponentstyles';

const StepTitle = ({ title, fullOpacity }) => (
    <StepTitleWrapper fullOpacity={fullOpacity}>
        <StepH fullOpacity={fullOpacity}>{title}</StepH>
        <StepLine fullOpacity={fullOpacity}/>
    </StepTitleWrapper>
);

function continueOnClick(step, setStep) {
    setStep(step + 1);
}

function backOnClick(step, setStep) {
    setStep(step - 1);
}

function renderStep(step, setStep, user, setUser) {
    switch(step) {
        case 1:
            return <FormStepWrapper>
                    <FormStep1 
                        user={user} 
                        setUser={setUser} 
                        continueOnClick={() => continueOnClick(step, setStep)}
                        />
                    <ActiveButton onClick={() => continueOnClick(step, setStep)}>CONTINUE</ActiveButton>
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
                        />
                </FormStepWrapper>
        case 4:
            return <FormStepWrapper>
                    <FormFinal />
            </FormStepWrapper>
        default:
            return <h1>DEFAULT</h1>
    }
}

const FormComponent = () => {
    const [step, setStep] = React.useState(1);
    const [user, setUser] = React.useState({
        numRides: 1,
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
    return <FormWrapper>
            <FormTitle>
                <h1>REQUEST A QUOTE</h1>
                <SubtitleWrapper>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </SubtitleWrapper>
            </FormTitle>
            <StepTitleGroup shouldDisplay={step != 4}>
                <StepTitle title="1. Choose Package" fullOpacity={step >= 1}/>
                <StepTitle title="2. Personal Info" fullOpacity={step >= 2}/>
                <StepTitle title="3. Details & Scheduling" fullOpacity={step >= 3}/>
            </StepTitleGroup>
            {renderStep(step, setStep, user, setUser)}
      </FormWrapper>
}


// class FormComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             step: 1,
//             user: {
//                 numRides: 1,
//                 name: "",
//                 emailAddress: "",
//                 phoneNum: "",
//                 message: "",
//                 pickUpAddress: "",
//                 dropOffAddress: "",
//                 tentativeDate: "",
//                 start: "",
//                 end: ""
//             }
//         };
//     }

//     render() {

//     }
// }

export default FormComponent
