import styled from "styled-components"
import { ComponentWrapper, Link, Button } from "../Base/basecomponents"

export const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (min-width: 0px) { 
    padding-left: 30px
    padding-right: 30px;
   }

  @media (min-width: 768px) { 
    padding-left: 50px
    padding-right: 50px;
   }

  @media (min-width: 992px) { 
    padding-left: 100px
    padding-right: 100px;
   }

  @media (min-width: 1200px) { 
    padding-left: 150px
    padding-right: 150px;
   }

  font-family: 'Noto Sans', sans-serif;
  padding-top: 30px;
  padding-bottom: 30px;
`

export const HeaderLinkGroup = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  margin-left: 30px;
`

export const HeaderLogo = styled.img`
  width: 300px;
`

export const HeaderButton = styled(Button)`
  margin-left: 30px;
`
