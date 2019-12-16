import React from 'react';
import { 
    ErrorText,
    ErrorTriangle,
    ErrorTriangleTextArea,
    FieldWrapper,
    Label,
    Input,
    InputWrapper,
    OptionalText,
    TextArea,
    TextWrapper
} from "./formbasecomponentsstyles";
import * as errorTriangle from "../../../images/alert-triangle-error.svg";

export const FormField = ({ title, editFn, currVal, placeholderVal, inputType, isRed, isOptional, errorText }) => {
    let error = errorText || "This field is required.";
    return <FieldWrapper>
        <TextWrapper>
            <Label>{title}</Label>
            <OptionalText optional={isOptional} >(Optional)</OptionalText>
        </TextWrapper>
        <InputWrapper>
            <Input 
                onChange = {editFn} 
                value = {currVal} 
                placeholder={placeholderVal} 
                input={inputType} 
                isRed={isRed} />
            <ErrorTriangle isRed={isRed} src={errorTriangle} />
        </InputWrapper>
        <ErrorText isRed={isRed}>{error}</ErrorText>
    </FieldWrapper>
}

export const MessageField = ({ title, editFn, currVal, placeholderVal, isRed }) => {
    return <FieldWrapper>
        <Label>{title}</Label>
        <InputWrapper>
            <TextArea onChange = {editFn} value = {currVal} placeholder={placeholderVal} isRed={isRed} />
            <ErrorTriangleTextArea isRed={isRed} src={errorTriangle} />
        </InputWrapper>
        <ErrorText isRed={isRed}>This field is required.</ErrorText>
    </FieldWrapper>
}
