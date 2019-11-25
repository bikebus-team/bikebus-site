import styled from "styled-components"
import { darkGreen, offWhite, richBlack } from "../Base/colors"

export const FormStep2Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;
export const TitleWrapper = styled.div`
    align-contents: start:
`;

export const Input = styled.input`
	padding: 0.5em;
	color: ${richBlack};
	background: white
	border: 2px solid ${darkGreen};
	border-radius: 5px;
	width: 100%;
`;