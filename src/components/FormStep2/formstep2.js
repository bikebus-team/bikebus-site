import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { 
    ButtonWrapper,
    FormStep2Wrapper, 
    SizeWrapper,
} from "./formstep2styles";
import { ActiveButton, BackButton } from "../FormComponent/formcomponentstyles";
import { Form, FormContents } from "../FormComponent/FormBaseComponents/formbasecomponentsstyles";

import {
    FormField,
    MessageField
} from "../FormComponent/FormBaseComponents/formbasecomponents";

const FormStep2 = ({ user, setUser, continueOnClick, backOnClick }) => (
    <FormStep2Wrapper>
        <Form>
            <FormContents>
                <FormField title="Name" 
                    editFn={e => updateName(user, setUser, e)} 
                    currVal={user.name} />
                <FormField title="Email Address" 
                    editFn={e => updateEmail(user, setUser, e)} 
                    currVal={user.emailAddress} />
                <FormField title ="Phone Number"
                    editFn={e => updatePhoneNumber(user, setUser, e)} 
                    currVal={user.phoneNum} 
                    placeholderVal="123-456-7890" />
                <MessageField title="Message" 
                    editFn={e => updateMessage(user, setUser, e)} 
                    currVal={user.message} 
                    placeholderVal="You can specify details such as the occasion or ask any questions that you have." />
            </FormContents>
        </Form>
        <SizeWrapper>
            <ButtonWrapper>
                <BackButton onClick={backOnClick}>Previous</BackButton>
                <ActiveButton onClick={continueOnClick}>Continue</ActiveButton>
            </ButtonWrapper>
        </SizeWrapper>
    </FormStep2Wrapper>
);

function updateName(user, setUser, event) {
    let newUser = {...user};
    newUser.name = event.target.value;
    setUser(newUser);
}

function updateEmail(user, setUser, event) {
    let newUser = {...user};
    newUser.emailAddress = event.target.value;
    setUser(newUser);
}

function updatePhoneNumber(user, setUser, event) {
    let newUser = {...user};
    newUser.phoneNum = event.target.value;
    setUser(newUser);
}

function updateMessage(user, setUser, event) {
    let newUser = {...user};
    newUser.message = event.target.value;
    setUser(newUser);
}

FormStep2.propTypes = {
}

FormStep2.defaultProps = {
}

export default FormStep2