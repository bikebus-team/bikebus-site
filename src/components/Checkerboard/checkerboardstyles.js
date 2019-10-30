import styled from "styled-components";
import { ComponentWrapper } from "../Base/basecomponents";

export const CheckerboardWrapper = styled(ComponentWrapper)`
display: flex;
flex-direction: ${props => props.imageLeft ? "row" : "row-reverse"};
padding-left: 0px
padding-right: 0px;
`;
export const TextWrapper = styled.div `
width: 60%;
padding-left: 0px
padding-right: 0px;
`;