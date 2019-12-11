import React from 'react';
import { 
    ErrorText,
    FieldWrapper,
    Label,
    Input,
    InputWrapper,
    OptionalText,
    TextArea,
    TextWrapper
} from "./formbasecomponentsstyles";


export const FormField = ({ title, editFn, currVal, placeholderVal, inputType, isRed, isOptional }) => {
    return <FieldWrapper>
        <TextWrapper>
            <Label>{title}</Label>
            <OptionalText optional={isOptional} >(Optional)</OptionalText>
        </TextWrapper>
        <InputWrapper>
            <Input onChange = {editFn} value = {currVal} placeholder={placeholderVal} input={inputType} isRed={isRed} />
        </InputWrapper>
        <ErrorText isRed={isRed}>This field is required.</ErrorText>
    </FieldWrapper>
}

export const MessageField = ({ title, editFn, currVal, placeholderVal, isRed }) => {
    return <FieldWrapper>
        <Label>{title}</Label>
        <TextArea onChange = {editFn} value = {currVal} placeholder={placeholderVal} isRed={isRed} />
        <ErrorText isRed={isRed}>This field is required.</ErrorText>
    </FieldWrapper>
}
