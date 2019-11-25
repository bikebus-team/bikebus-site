import styled from "styled-components"
import { darkGreen, offWhite } from "../Base/colors"

export const FormStep1Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;
export const TitleWrapper = styled.div`
    align-contents: start:
`;

export const RadioContainer = styled.div`
    display: none;
    @media (max-width: 1275px) {
        display: block;
    }
`;

export const RadioList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const RadioButton = styled.li`
    display: inline-block;
    background-color: #ddd;
    padding: 15px 25px 15px 25px;
    cursor: pointer;
    text-tranformation: uppercase;
    border: 1px solid;
    border-radius: 1px;
`;

export const RadioInput = styled.input`
opacity: 0;
    width:0;
    height:0;
`;

export const RadioButtonLabel = styled.label`
background: white;
border: 1px solid #bebebe;
`;