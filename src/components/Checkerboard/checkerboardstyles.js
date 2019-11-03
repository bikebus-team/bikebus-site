import styled from "styled-components";
import { ComponentWrapper } from "../Base/basecomponents";

export const CheckerboardWrapper = styled(ComponentWrapper)`
display: flex;
flex-direction: ${props => props.imageLeft ? "row" : "row-reverse"};
`;
export const TextWrapper = styled.div `
width: 60%;
`;