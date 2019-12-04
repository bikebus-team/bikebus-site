import React from 'react';
import { 
    Label,
    Input,
    InputWrapper,
    TextArea
} from "./formbasecomponentsstyles";


export const FormField = ({ title, editFn, currVal, placeholderVal }) => {
    return <div>
        <Label>{title}</Label>
        <InputWrapper>
            <Input onChange = {editFn} value = {currVal} placeholder={placeholderVal} required={true}/>
        </InputWrapper>
    </div>
}

export const MessageField = ({ title, editFn, currVal, placeholderVal }) => {
    return <div>
        <Label>{title}</Label>
        <TextArea onChange = {editFn} value = {currVal} placeholder={placeholderVal} />
    </div>
}
