import styled from "styled-components"
import { darkGreen } from "../Base/colors"
import { Button, Link, PaddedComponentWrapper } from "../Base/basecomponents"

export const CheckerboardWrapper = styled(PaddedComponentWrapper)`
  display: inline-flex;
  box-sizing: border-box;
  width: 100%;
  flex-flow: row;
  flex-direction: ${props => (props.imageLeft ? "row" : "row-reverse")};
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const CheckerImage = styled.div`
background-image: url('${(props)=>props.imgUrl}');
height: 100%;
background-size: cover;
background-repeat: no-repeat;
background-position: 50% 50%;
`
export const LeftCheckerboardWrapper = styled.div`
  width: 45%;
  height: 400px;
  border: 1px solid #ddd;

  @media (max-width: 420px) {
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const RightCheckerboardWrapper = styled.div`
  padding-left: ${props => (props.imageLeft ? "10%" : "0%")};
  padding-right: ${props => (props.imageLeft ? "0%" : "10%")};
  width: 50%;

  @media (max-width: 768px) {
    padding-left: 0%;
    padding-right: 0%;
    width: 100%;
  }
`

export const TextWrapper = styled.div``

export const CheckerboardButton = styled(Button)`
  display: ${props => (props.displayVal ? "block" : "none")};
  background: ${darkGreen};
`

export const CheckerboardLink = styled(Link)`
  text-decoration: none;
`
