import styled from "styled-components";
import { Button, ComponentWrapper, Link } from "../Base/basecomponents";

export const CheckerboardWrapper = styled(ComponentWrapper)`
    display: inline-flex;
    flex-flow: row;
    flex-direction: ${props => props.imageLeft ? "row" : "row-reverse"};
    margin: 1% 10%
    align-items: center;
`;

export const RightCheckerboardWrapper = styled.div`
    padding-left: ${props => props.imageLeft ? "10%" : "0%"};
    padding-right: ${props => props.imageLeft ? "0%" : "5%"};
`;

export const TextWrapper = styled.div`
    width: 80%;
`;

export const CheckerboardButton = styled(Button)`
    display: ${props => props.display ? "block" : "none"};
`;

export const CheckerboardLink = styled(Link)`
    text-decoration: none;
`;