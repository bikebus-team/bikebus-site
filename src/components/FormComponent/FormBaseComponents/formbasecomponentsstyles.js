import styled from "styled-components"
import { darkGreen, errorRed, offWhite, richBlack, teal } from "../../Base/colors"

export const FieldWrapper = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const Label = styled.h5`
    color: ${darkGreen};
    margin-block-end: 10px;
    margin-block-start: 10px;
`;

export const OptionalText = styled.p`
    color: ${darkGreen};
    margin-block-end: 10px;
    font-size: 12px;
    line-height: 22px;
    display: ${props => (props.optional ? "block" : "none")}
`;

export const ErrorText = styled.p`
    color: ${errorRed};    
    font-size: 12px;
    display: ${props => (props.isRed ? "block" : "none")}
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const InputWrapper = styled.div `
    width: 100%;
`;

export const Input = styled.input`
	padding: 16px;
	color: ${richBlack};
	background: white;
	border: 2px solid ${props => (props.isRed ? errorRed : darkGreen)};
    border-radius: 2px;
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    &:focus {
        outline-color: ${teal};
        border: 2px solid ${props => (props.isRed ? errorRed : darkGreen)};
    }
`;

export const TextArea = styled.textarea`
    border: 2px solid ${props => (props.isRed ? errorRed : darkGreen)};
    border-radius: 2px;
    width: 100%;
    height: 200px;
    font-size: 16px;
    padding: 16px;
    resize: none;
    box-sizing: border-box;
    &:focus {
        outline-color: ${teal};
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    width: 100%
`;

export const FormContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    
    @media (max-width: 420px) {
        width: 100%;
    }
    
    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 975px) {
        width: 100%;
    }
`;

export const SizeWrapper = styled.div`
    width: 50%;

    @media (max-width: 420px) {
        width: 100%;
    }
    
    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 975px) {
        width: 100%;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 420px) {
        width: 100%;
        flex-direction: column-reverse;
    }
    
`;

export const TitleWrapper = styled.div`
    align-content: start;
    align-self: baseline;
`;

export const StepTitle = styled.h4`
  color: ${darkGreen};
  display: none;
  @media (max-width: 420px) {
    display: block;
  }
`;