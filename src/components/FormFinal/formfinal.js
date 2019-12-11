import React from 'react';
import {
    FormFinalWrapper,
    Title,
    TextWrapper
} from "./formfinalstyles";

const FormFinal = () => {
    return <FormFinalWrapper>
            <Title>Request Recieved!</Title>
            <TextWrapper>
                <p>Thanks for taking the time to fill out the quote, now it's our turn! We'll look through your request and get back to you as quickly as possible.</p>
                <p>Make sure to check your email for new messages from us - we are so excited to have you try the BikeBus experience!</p>
                <p>For any further questions or concerns feel free to reach out to us at info@bikebus.com</p>
            </TextWrapper>
        </FormFinalWrapper>
}
  
export default FormFinal
