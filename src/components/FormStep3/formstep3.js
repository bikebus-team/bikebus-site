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
import { ButtonWrapper, Form, FormContents, Label, SizeWrapper } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";

const FormStep3 = ({ user, setUser, continueOnClick, backOnClick }) => (
    <FormStep3Wrapper>
        <Form>
            <FormContents>
                <FormField title="Pickup Address" 
                    editFn={e => updatePickup(user, setUser, e)} 
                    currVal={user.pickUpAddress} />
                <FormField title="Dropoff Address" 
                    editFn={e => updateDropoff(user, setUser, e)} 
                    currVal={user.dropOffAddress} />
                <FormField title="Tentative Date" 
                    editFn={e => updateTentativeDate(user, setUser, e)} 
                    currVal={user.tentativeDate}
                    placeholderVal="MM / DD / YYYY" />
                
                <TimesWrapper>
                    <SmallFormField title="Start Time" 
                        editFn={e => updateStartTime(user, setUser, e)} 
                        currVal={user.startTime} 
                        placeholderVal="--:-- --"/>
                    <SmallFormField title="End Time" 
                        editFn={e => updateEndTime(user, setUser, e)} 
                        currVal={user.endTime}
                        placeholderVal="--:-- --" />
                </TimesWrapper>
            </FormContents>
        </Form>
        <SizeWrapper>
            <ButtonWrapper>
                <BackButton onClick={backOnClick}>Previous</BackButton>
                <ActiveButton onClick={continueOnClick}>Request a Quote</ActiveButton>
            </ButtonWrapper>
        </SizeWrapper>
    </FormStep3Wrapper>
);

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

FormStep3.propTypes = {
}

FormStep3.defaultProps = {
}

export default FormStep3