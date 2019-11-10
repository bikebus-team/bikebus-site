import styled from "styled-components";
import { darkGreen } from "../Base/colors"
import { Button, ComponentWrapper, Link } from "../Base/basecomponents";

export const CheckerboardWrapper = styled(ComponentWrapper)`
    display: inline-flex;
    flex-flow: row;
    flex-direction: ${props => props.imageLeft ? "row" : "row-reverse"};
    margin-left: 10%
    margin-right: 10% 
    align-items: center;
    justify-content: space-between;
`;

export const RightCheckerboardWrapper = styled.div`
    padding-left: ${props => props.imageLeft ? "10%" : "0%"};
    padding-right: ${props => props.imageLeft ? "0%" : "10%"};
`;

export const TextWrapper = styled.div`
`;

export const CheckerboardButton = styled(Button)`
    display: ${props => props.display ? "block" : "none"};
    background: ${darkGreen}
`;

export const CheckerboardLink = styled(Link)`
    text-decoration: none;
`;