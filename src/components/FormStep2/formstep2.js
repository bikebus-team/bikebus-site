import PropTypes from "prop-types"
import React from "react"
import { 
    FormStep2Wrapper, 
} from "./formstep2styles";
import { ActiveButton, BackButton, ButtonWrapper, Form, FormContents, SizeWrapper, StepTitle, TitleWrapper } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";

import {
    FormField,
    MessageField
} from "../FormComponent/FormBaseComponents/formbasecomponents";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const FormStep2 = ({ user, setUser, continueOnClick, backOnClick, stepData }) => {
    const [errors, setErrors] = React.useState({
        name: false,
        emailAddress: false,
        message: false
    });
    const [submitCount, setSubmitCount] = React.useState(0);
    return <FormStep2Wrapper>
        <TitleWrapper>
            <StepTitle>{stepData.stepTitle}</StepTitle>
        </TitleWrapper>
        <Form>
            <FormContents>
                <FormField title="Name" 
                    editFn={e => updateUser(e, user, setUser, submitCount, errors, setErrors, "name")} 
                    currVal={user.name}
                    inputType={"text"} 
                    isRed={errors.name}
                    isOptional={false} />
                <FormField title="Email Address" 
                    editFn={e => updateUser(e, user, setUser, submitCount, errors, setErrors, "emailAddress")} 
                    currVal={user.emailAddress}
                    inputType={"email"}
                    isRed={errors.emailAddress}
                    isOptional={false} 
                    errorText={"A valid email address is required"} />
                <FormField title ="Phone Number"
                    editFn={e => updateUser(e, user, setUser, submitCount, errors, setErrors, "phoneNum")} 
                    currVal={user.phoneNum} 
                    placeholderVal="123-456-7890"
                    inputType={"tel"}
                    isRed={false}
                    isOptional={true} />
                <MessageField title="Message" 
                    editFn={e => updateUser(e, user, setUser, submitCount, errors, setErrors, "message")} 
                    currVal={user.message} 
                    placeholderVal={stepData.messageHelpText} 
                    isRed={errors.message}
                    isOptional={false} />
            </FormContents>
        </Form>
        <SizeWrapper>
            <ButtonWrapper>
                <BackButton onClick={backOnClick}>Previous</BackButton>
                <ActiveButton onClick={() => submitFn(user, errors, setErrors, continueOnClick, submitCount, setSubmitCount)}>Continue</ActiveButton>
            </ButtonWrapper>
        </SizeWrapper>
    </FormStep2Wrapper>
};

function updateUser(event, user, setUser, submitCount, errors, setErrors, field) {
    let newUser = {...user};
    newUser[field] = event.target.value.trim();
    setUser(newUser);
    if (submitCount > 0) {
        let newErrors = {...errors};
        if (field === "emailAddress") {
            newErrors.emailAddress = !emailRegex.test(newUser.emailAddress);
        } else {
            newErrors[field] = (newUser[field] === "");
        }
        setErrors(newErrors);
    }
}

function submitFn(user, errors, setErrors, continueOnClick, submitCount, setSubmitCount) {
    setSubmitCount(submitCount + 1);
    if (!checkErrors(user, errors, setErrors)) {
        continueOnClick();
    }
}

function checkErrors(user, errors, setErrors) {
    let newErrors = {...errors};
    newErrors.name = (user.name === "");
    newErrors.emailAddress = !emailRegex.test(user.emailAddress);  
    newErrors.message = (user.message === "");
    setErrors(newErrors);
    return newErrors.name || newErrors.emailAddress || newErrors.message;
}

FormStep2.propTypes = {
}

FormStep2.defaultProps = {
}

export default FormStep2