import PropTypes from "prop-types"
import React from "react"
import { 
    FormStep2Wrapper, 
} from "./formstep2styles";
import { ActiveButton, BackButton } from "../FormComponent/formcomponentstyles";
import { ButtonWrapper, Form, FormContents, SizeWrapper, StepTitle, TitleWrapper } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";

import {
    FormField,
    MessageField
} from "../FormComponent/FormBaseComponents/formbasecomponents";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const FormStep2 = ({ user, setUser, continueOnClick, backOnClick }) => {
    const [errors, setErrors] = React.useState({
        name: false,
        emailAddress: false,
        message: false
    });
    const [submitCount, setSubmitCount] = React.useState(0);
    return <FormStep2Wrapper>
        <TitleWrapper>
            <StepTitle>Personal Info</StepTitle>
        </TitleWrapper>
        <Form>
            <FormContents>
                <FormField title="Name" 
                    editFn={e => updateName(user, setUser, e, submitCount, errors, setErrors)} 
                    currVal={user.name}
                    inputType={"text"} 
                    isRed={errors.name}
                    isOptional={false} />
                <FormField title="Email Address" 
                    editFn={e => updateEmail(user, setUser, e, submitCount, errors, setErrors)} 
                    currVal={user.emailAddress}
                    inputType={"email"}
                    isRed={errors.emailAddress}
                    isOptional={false} />
                <FormField title ="Phone Number"
                    editFn={e => updatePhoneNumber(user, setUser, e)} 
                    currVal={user.phoneNum} 
                    placeholderVal="123-456-7890"
                    inputType={"tel"}
                    isRed={false}
                    isOptional={true} />
                <MessageField title="Message" 
                    editFn={e => updateMessage(user, setUser, e, submitCount, errors, setErrors)} 
                    currVal={user.message} 
                    placeholderVal="You can specify details such as the occasion or ask any questions that you have." 
                    isRed={errors.message}
                    isOptional={false} />
            </FormContents>
        </Form>
        <SizeWrapper>
            <ButtonWrapper>
                <BackButton onClick={backOnClick}>Previous</BackButton>
                <ActiveButton onClick={() => validateInput(user, errors, setErrors, continueOnClick, submitCount, setSubmitCount)}>Continue</ActiveButton>
            </ButtonWrapper>
        </SizeWrapper>
    </FormStep2Wrapper>
};

function updateName(user, setUser, event, submitCount, errors, setErrors) {
    let newUser = {...user};
    newUser.name = event.target.value;
    setUser(newUser);
    if (submitCount > 0) {
        let newErrors = {...errors};
        newErrors.name = !user.name.localeCompare("");
        setErrors(newErrors);
    }
}

function updateEmail(user, setUser, event, submitCount, errors, setErrors) {
    let newUser = {...user};
    newUser.emailAddress = event.target.value;
    setUser(newUser);
    if (submitCount > 0) {
        let newErrors = {...errors};
        newErrors.emailAddress = !emailRegex.test(user.emailAddress);
        setErrors(newErrors);
    }
}

function updatePhoneNumber(user, setUser, event) {
    let newUser = {...user};
    newUser.phoneNum = event.target.value;
    setUser(newUser);
}

function updateMessage(user, setUser, event, submitCount, errors, setErrors) {
    let newUser = {...user};
    newUser.message = event.target.value;
    setUser(newUser);
    if (submitCount > 0) {
        let newErrors = {...errors};
        newErrors.message = !user.message.localeCompare("");
        setErrors(newErrors);
    }
}

function validateInput(user, errors, setErrors, continueOnClick, submitCount, setSubmitCount) {
    setSubmitCount(submitCount + 1);
    let newErrors = {...errors};
    newErrors.name = !user.name.localeCompare("");
    newErrors.emailAddress = !emailRegex.test(user.emailAddress);  
    newErrors.message = !user.message.localeCompare("");
    
    if (!newErrors.name && !newErrors.emailAddress && !newErrors.message) {
        continueOnClick();
    }
    setErrors(newErrors);
}

FormStep2.propTypes = {
}

FormStep2.defaultProps = {
}

export default FormStep2