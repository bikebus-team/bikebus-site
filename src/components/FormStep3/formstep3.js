import PropTypes from "prop-types";
import React from "react";
import { 
    FormStep3Wrapper,
    SmallInput,
    SmallInputWrapper,
    TimesWrapper
} from "./formstep3styles";
import { ActiveButton, BackButton } from "../FormComponent/formcomponentstyles";
import { FormField } from "../FormComponent/FormBaseComponents/formbasecomponents";
import { ButtonWrapper, Form, FormContents, Label, SizeWrapper, StepTitle, TitleWrapper } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";

const axios = require('axios');
const emailEndpoint = "https://script.google.com/macros/s/AKfycbzZwq3K5OdJQzYozblCiZJI86eMfPycRn9Ejt9W-2ynqOCASA/exec";
const proxyurl = "https://cors-anywhere.herokuapp.com/";

const FormStep3 = ({ user, setUser, continueOnClick, backOnClick, setRequestError }) => {
    const [errors, setErrors] = React.useState({
        pickUpAddress: false
    });
    const [submitCount, setSubmitCount] = React.useState(0);
    return <FormStep3Wrapper>
        <TitleWrapper>
            <StepTitle>Details & Scheduling</StepTitle>
        </TitleWrapper>
        <Form>
            <FormContents>
                <FormField title="Pickup Address" 
                    editFn={e => updatePickup(user, setUser, e)} 
                    currVal={user.pickUpAddress} 
                    isRed={errors.pickUpAddress} 
                    isOptional={false}
                    />
                <FormField title="Dropoff Address" 
                    editFn={e => updateDropoff(user, setUser, e)} 
                    currVal={user.dropOffAddress}
                    isOptional={true}
                    />
                <FormField title="Tentative Date" 
                    editFn={e => updateTentativeDate(user, setUser, e)} 
                    currVal={user.tentativeDate}
                    placeholderVal="MM / DD / YYYY"
                    isOptional={true}
                    />
                
                <TimesWrapper>
                    <SmallFormField title="Start Time" 
                        editFn={e => updateStartTime(user, setUser, e)} 
                        currVal={user.startTime} 
                        placeholderVal="--:-- --"
                        isOptional={true}
                        />
                    <SmallFormField title="End Time" 
                        editFn={e => updateEndTime(user, setUser, e)} 
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
                <ActiveButton onClick={() => validateInput(user, errors, setErrors, continueOnClick, submitCount, setSubmitCount, setRequestError)}>Request a Quote</ActiveButton>
            </ButtonWrapper>
        </SizeWrapper>
    </FormStep3Wrapper>
};

const SmallFormField = ({ title, editFn, currVal, placeholderVal }) => {
    return <SmallInputWrapper>
        <Label>{title}</Label>
        <SmallInput onChange = {editFn} value = {currVal} placeholder={placeholderVal} />
    </SmallInputWrapper>
}

function updatePickup(user, setUser, event) {
    let newUser = {...user};
    newUser.pickUpAddress = event.target.value;
    setUser(newUser);
}

function updateDropoff(user, setUser, event) {
    let newUser = {...user};
    newUser.dropOffAddress = event.target.value;
    setUser(newUser);
}

function updateTentativeDate(user, setUser, event) {
    let newUser = {...user};
    newUser.tentativeDate = event.target.value;
    setUser(newUser);
}

function updateStartTime(user, setUser, event) {
    let newUser = {...user};
    newUser.startTime = event.target.value;
    setUser(newUser);
}

function updateEndTime(user, setUser, event) {
    let newUser = {...user};
    newUser.endTime = event.target.value;
    setUser(newUser);
}

function validateInput(user, errors, setErrors, continueOnClick, submitCount, setSubmitCount, setRequestError) {
    setSubmitCount(submitCount + 1);
    let newErrors = {...errors};
    newErrors.pickUpAddress = !user.pickUpAddress.localeCompare("");
    
    if (!newErrors.pickUpAddress) {
        submitRequest(user, continueOnClick, setRequestError);
    }
    setErrors(newErrors);
}

function submitRequest(user, continueOnClick, setRequestError) {
    const name = user.name;
    const email = user.emailAddress;
    const subject = `BikeBus Quote - ${name}`;
    const body = `Name: ${user.name}%0APhone Number: ${user.phoneNum}%0ANumber of Rides Requested: ${user.numRides}%0AFrequency: ${user.frequency}%0APickup Address: ${user.pickUpAddress}%0ADropoff Address: ${user.dropOffAddress}%0ATentative Date: ${user.tentativeDate}%0AStart Time: ${user.startTime}%0AEnd Time: ${user.endTime}%0A%0AMessage: ${user.message}%0A`;
    const request = `${emailEndpoint}?name=${name}&email=${email}&subject=${subject}&body=${body}`;
    // axios.post(proxyurl + request).catch(error => {
    //     console.log(error);
    //     setRequestError(true);
    // });
    continueOnClick();
}

FormStep3.propTypes = {
}

FormStep3.defaultProps = {
}

export default FormStep3