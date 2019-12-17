import styled from "styled-components"
import { Link } from "../Base/basecomponents"
import { BBh2 } from "../Base/fonts"
import { richBlack } from "../Base/colors"

export const HamburgerContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    z-index:10000;
    
`

export const Bar = styled.div`
    width: 50px;
    height: 3px;
    background-color: ${richBlack};
    margin: 8px 0;
    border-radius: 50px;
`
export const Bar1 = styled.div`
    width: 50px;
    height: 3px;
    background-color: white;
    margin: 8px 0;
    border-radius: 50px;

    -webkit-transform: rotate(-45deg) translate(-6px,8.5px);
    transform: rotate(-45deg) translate(-6px,8.5px);
`
export const Bar2 = styled.div`
    width: 50px;
    height: 3px;
    background-color: white;
    margin: 8px 0;
    border-radius: 50px;

    -webkit-transform: rotate(45deg) translate(1px,-2px);
    transform: rotate(45deg) translate(1px,-2px);
`

export const HamburgerMenu = styled.div`
    display: inline-block;
    cursor: pointer;
    z-index: 10000;
    padding-top: 0;
    padding-bottom: 0;

    
    @media (min-width: 0px) {
      padding-right: 30px;
    }
  
    @media (min-width: 768px) {
        padding-right: 50px;
    }
  
    @media (min-width: 992px) {
        padding-right: 100px;
    }

`

export const MenuContainer = styled.div`
  display: none;
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;

  @media (max-width: 975px) {
    display: flex;
  }
  
  @media (min-width: 0px) {
    padding-left: 0;
  }

  @media (min-width: 768px) {
    padding-left: 0;
  }

  @media (min-width: 992px) {
    padding-left: 0;
  }
`


export const MenuContentContainer = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  position:absolute;
  height: 10000%;
  z-index: 9999;
  background-color: #030406;
  top:0;
  left:0;
  
`
export const HambLinkContainer = styled.div`
  margin-top: 75px;

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
    padding-left: 150px;
  }

`

export const HambHeaderLink = styled(Link)`
  text-decoration: none;
  color: #8b8b8b;
  
  :hover {
    color: white;
  }

`

export const HambHeaderPage = styled(BBh2)`
  // font-size: 1em; 
  color: #8b8b8b;
  :hover {
    color: white;
  }
`