import styled from "styled-components"
import { ComponentWrapper, Link, Button } from "../Base/basecomponents"
import { BBh4 } from "../Base/fonts"
import { teal } from "../Base/colors"

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  font-family: "Noto Sans", sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
`

export const HeaderLinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin-right: 25px;
  
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-bottom: 2px solid rgba(56, 206, 194, 0);
  
  :hover {
    border-bottom: 2px solid rgba(56, 206, 194, 1);
  }
`

export const HeaderLogo = styled.img`
  width: 170px;
  margin-left: 125px;
`
export const HeaderPage = styled(BBh4)`
  font-size: 1em; 
`

export const HeaderButton = styled(Button)`
  text-transform: uppercase;
  font-size: .83em; 
  
`
export const HeaderContainer = styled.div`
`
