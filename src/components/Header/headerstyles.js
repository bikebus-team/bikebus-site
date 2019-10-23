import styled from "styled-components";
import { ComponentWrapper, Link, Button } from "../Base/basecomponents";

export const HeaderWrapper = styled(ComponentWrapper)``;

export const HeaderLinkGroup = styled.div `
display: flex;
align-items: center;
`;

export const HeaderLink = styled(Link)`
text-decoration: none;
padding: 0 15px;
`;

export const HeaderLogo = styled.img`
width: 300px;
`;

export const HeaderButton = styled(Button)``;