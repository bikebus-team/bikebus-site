import React from 'react';
import {
    FormFinalWrapper,
    Title,
    TextWrapper
} from "./formfinalstyles";
import { BackButton } from "../FormComponent/formcomponentstyles";
import { BBp } from "../Base/fonts"

const FormFinal = ({ requestError, backOnClick }) => {
    return <FormFinalWrapper>
            {renderFinal(requestError, backOnClick)}
        </FormFinalWrapper>
}

function renderFinal(requestError, backOnClick) {
    if (!requestError) {
        return <div>
            <Title>Request Recieved!</Title>
            <TextWrapper>
                <BBp>Thanks for taking the time to fill out the quote, now it's our turn! We'll look through your request and get back to you as quickly as possible.</BBp>
                <BBp>Make sure to check your email for new messages from us - we are so excited to have you try the BikeBus experience!</BBp>
                <BBp>For any further questions or concerns feel free to reach out to us at <strong><u>info@bikebus.com</u></strong></BBp>
            </TextWrapper>
        </div>
    } else {
        return <div>
            <Title>Request Error</Title>
            <TextWrapper>
                <BBp>There seems to have been in error sending your request. Please try again. If this problem persists, feel free to reach out to us at <strong><u>info@bikebus.com</u></strong></BBp>
            </TextWrapper>
            <BackButton onClick={backOnClick}>Back to form</BackButton>
        </div>
    }
}
  
export default FormFinal
