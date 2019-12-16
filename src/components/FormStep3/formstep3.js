import PropTypes from "prop-types";
import React from "react";
import {
    DateText,
    FormStep3Wrapper,
    SmallInput,
    SmallInputWrapper,
    TimesWrapper
} from "./formstep3styles";
import { FormField } from "../FormComponent/FormBaseComponents/formbasecomponents";
import { ActiveButton, BackButton, ButtonWrapper, Form, FormContents, Label, OptionalText, SizeWrapper, StepTitle, TitleWrapper, TextWrapper } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";

const axios = require('axios');
const emailEndpoint = "https://script.google.com/macros/s/AKfycbxyFxAwQw5okIJTpMbUhiB87emRCrsK1ju7MYwYvuy4xNy7Yeji/exec";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

const FormStep3 = ({ user, setUser, continueOnClick, backOnClick, setRequestError, stepData }) => {
    const [errors, setErrors] = React.useState({
        pickUpAddress: false
    });
    const [submitCount, setSubmitCount] = React.useState(0);
    return <FormStep3Wrapper>
        <TitleWrapper>
            <StepTitle>{stepData.stepTitle}</StepTitle>
        </TitleWrapper>
        <Form>
            <FormContents>
                <FormField title="Pickup Address" 
                    editFn={e => updateUser(e, user, setUser, submitCount, errors, setErrors, "pickUpAddress")} 
                    currVal={user.pickUpAddress} 
                    isRed={errors.pickUpAddress} 
                    isOptional={false}
                    />
                <FormField title="Dropoff Address" 
                    editFn={e => updateUser(e, user, setUser, submitCount, errors, setErrors, "dropOffAddress")} 
                    currVal={user.dropOffAddress}
                    isOptional={true}
                    />
                <FormField title="Tentative Date" 
                    editFn={e => updateUser(e, user, setUser, submitCount, errors, setErrors, "tentativeDate")} 
                    currVal={user.tentativeDate}
                    placeholderVal="MM / DD / YYYY"
                    isOptional={true}
                    />
                    <DateText>{stepData.dateDisclaimer}</DateText>
                
                <TimesWrapper>
                    <SmallFormField title="Start Time" 
                        editFn={e => updateUser(e, user, setUser, submitCount, errors, setErrors, "startTime")} 
                        currVal={user.startTime} 
                        placeholderVal="--:-- --"
                        isOptional={true}
                        />
                    <SmallFormField title="End Time" 
                        editFn={e => updateUser(e, user, setUser, submitCount, errors, setErrors, "endTime")} 
                        currVal={user.endTime}
                        placeholderVal="--:-- --" 
                        isOptional={true}
                        />
                </TimesWrapper>
            </FormContents>
        </Form>
        <SizeWrapper>
            <ButtonWrapper>
                <BackButton onClick={backOnClick}>Previous</BackButton>
                <ActiveButton onClick={() => submitFn(user, errors, setErrors, continueOnClick, submitCount, setSubmitCount, setRequestError)}>
                    Request a Quote
                </ActiveButton>
            </ButtonWrapper>
        </SizeWrapper>
    </FormStep3Wrapper>
};

const SmallFormField = ({ title, editFn, currVal, placeholderVal, isOptional }) => {
    return <SmallInputWrapper>
        <TextWrapper>
            <Label>{title}</Label>
            <OptionalText optional={isOptional} >(Optional)</OptionalText>
        </TextWrapper>
        <SmallInput onChange = {editFn} value = {currVal} placeholder={placeholderVal} />
    </SmallInputWrapper>
}

function updateUser(event, user, setUser, submitCount, errors, setErrors, field) {
    let newUser = {...user};
    newUser[field] = event.target.value.trim();
    setUser(newUser);
    if (submitCount > 0) {
        checkErrors(newUser, errors, setErrors);
    }
}

function submitFn(user, errors, setErrors, continueOnClick, submitCount, setSubmitCount, setRequestError) {
    setSubmitCount(submitCount + 1);
    if (!checkErrors(user, errors, setErrors)) {
        submitRequest(user, continueOnClick, setRequestError);
    }
}

function checkErrors(user, errors, setErrors) {
    let newErrors = {...errors};
    newErrors.pickUpAddress = (user.pickUpAddress === "");
    setErrors(newErrors);
    return newErrors.pickUpAddress;
}

function submitRequest(user, continueOnClick, setRequestError) {
    const name = user.name;
    const email = user.emailAddress;
    const subject = `BikeBus Quote - ${name}`;
    const body = `Name: ${user.name}%0APhone Number: ${user.phoneNum}%0ANumber of Rides Requested: ${user.numRides}%0AFrequency: ${user.frequency}%0APickup Address: ${user.pickUpAddress}%0ADropoff Address: ${user.dropOffAddress}%0ATentative Date: ${user.tentativeDate}%0AStart Time: ${user.startTime}%0AEnd Time: ${user.endTime}%0A%0AMessage: ${user.message}%0A`;
    const request = `${emailEndpoint}?name=${name}&email=${email}&subject=${subject}&body=${body}`;
    axios.post(proxyurl + request)
    .then(response => {
        continueOnClick();
    }).catch(error => {
        console.log(error);
        setRequestError(true);
    });
}

FormStep3.propTypes = {
}

FormStep3.defaultProps = {
}

export default FormStep3