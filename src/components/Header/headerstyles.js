import styled from "styled-components"
import { ComponentWrapper, Link, Button, PaddedComponentWrapper } from "../Base/basecomponents"
import { BBh4, BBh2 } from "../Base/fonts"
import { teal } from "../Base/colors"

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  font-family: "Noto Sans", sans-serif;
  padding-top: 15px;
  padding-bottom: 15px;
  align-items: center;

  height: auto;
  background-color: white;
  z-index: 10000;
  position: fixed;
  width: 100%;
  top:0;
`

export const LogoWrapper = styled.div`

  @media (min-width: 0px) {
    padding-left: 30px;
  }

  @media (min-width: 768px) {
    padding-left: 50px;
  }

  @media (min-width: 992px) {
    padding-left: 100px;
  }

  @media (min-width: 1200px) {
    padding-left: 125px;
  }
`

export const HamburgerMenuContainer = styled.div`
  display: none;

  @media (max-width: 975px) {
    display: flex;
  }
  
`


export const HeaderLinkGroup = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  justify-content: space-between;
  margin-right: 25px;

  @media (max-width: 975px) {
    display: none
  }
  
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-bottom: 4px solid rgba(56, 206, 194, 0);
  
  :hover {
    border-bottom: 4px solid rgba(56, 206, 194, 1);
  }

`

export const HeaderLogo = styled.img`
  width: 170px;
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
