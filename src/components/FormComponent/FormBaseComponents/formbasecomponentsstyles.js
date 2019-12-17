import styled from "styled-components"
import { darkGreen, errorRed, offWhite, richBlack, teal } from "../../Base/colors"
import { BBh5, BBp } from "../../Base/fonts"
import { Button } from "../../Base/basecomponents"

export const FieldWrapper = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const Label = styled(BBh5)`
    color: ${darkGreen};
    margin-block-end: 10px;
    margin-block-start: 10px;
`;

export const OptionalText = styled(BBp)`
    color: ${darkGreen};
    margin-block-end: 10px;
    font-size: 12px;
    line-height: 22px;
    display: ${props => (props.optional ? "block" : "none")}
`;

export const ErrorText = styled(BBp)`
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
    position: relative;
`;

export const Input = styled.input`
    padding: 16px;
    padding-right: ${props => (props.isRed ? '50px' : '16px')};
	color: ${richBlack};
	background: white;
	border: 2px solid ${props => (props.isRed ? errorRed : darkGreen)};
    border-radius: 2px;
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
    &:focus {
        outline-color: ${props => (props.isRed ? errorRed : teal)};
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
        outline-color: ${props => (props.isRed ? errorRed : teal)};
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

export const StepTitle = styled(BBh5)`
  color: ${darkGreen};
  display: none;
  @media (max-width: 420px) {
    display: block;
  }
`;

export const ErrorTriangle = styled.img`
  display: ${props => (props.isRed ? "inline-block" : "none")};
  position: absolute;
  padding: 16px;
  right: 0;
`;

export const ErrorTriangleTextArea = styled(ErrorTriangle)`
  bottom: 0;
  padding-bottom: 18px;
`;

export const ActiveButton = styled(Button)`
    display: inline-block;
    margin-top: 40px;
    width: auto;
    text-transform: uppercase;
    border: 2px solid ${darkGreen};
`;

export const BackButton = styled(Button)`
    display: inline-block;
    width: auto;
    margin-top: 40px;
    text-transform: uppercase;
    background: ${offWhite};
    color: ${darkGreen};
    border: 2px solid ${darkGreen};
`;