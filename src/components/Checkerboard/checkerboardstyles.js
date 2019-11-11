import styled from "styled-components";
import { darkGreen } from "../Base/colors"
import { Button, Link, PaddedComponentWrapper } from "../Base/basecomponents";

export const CheckerboardWrapper = styled(PaddedComponentWrapper)`
    display: inline-flex;
    flex-flow: row;
    flex-direction: ${props => props.imageLeft ? "row" : "row-reverse"};
    align-items: center;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        flex-direction: column
    }
`;

export const LeftCheckerboardWrapper = styled.div`
    width: 35%
    border: 1px solid #ddd
    
    @media (max-width: 768px) {
        width: 100%
    }
`;

export const RightCheckerboardWrapper = styled.div`
    padding-left: ${props => props.imageLeft ? "10%" : "0%"};
    padding-right: ${props => props.imageLeft ? "0%" : "10%"};
    width: 50%
    
    @media (max-width: 768px) {
        padding-left: 0%
        padding-right: 0%
        width: 100%
    }
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