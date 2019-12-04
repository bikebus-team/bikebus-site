import styled from "styled-components"
import { darkGreen, offWhite, richBlack } from "../../Base/colors"

export const Label = styled.h5`
    color: ${darkGreen};
`;

export const InputWrapper = styled.div `
    width: 100%;
`;

export const Input = styled.input`
	padding: 16px;
	color: ${richBlack};
	background: white;
	border: 2px solid ${darkGreen};
    border-radius: 2px;
    width: 100%;
    font-size: 16px;
    box-sizing: border-box;
`;

export const TextArea = styled.textarea`
    border: 2px solid ${darkGreen};
    border-radius: 2px;
    width: 100%;
    height: 200px;
    font-size: 16px;
    padding: 16px;
    resize: none;
    box-sizing: border-box;
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
`;

export const SizeWrapper = styled.div`
    width: 50%;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TitleWrapper = styled.div`
    align-content: start:
`;