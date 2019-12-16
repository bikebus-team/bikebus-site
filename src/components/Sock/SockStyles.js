import styled from "styled-components"
import {BBh2, BBp} from "../Base/fonts"
import { darkGreen } from "../Base/colors"
import { Button } from "../Base/basecomponents"
import * as circlesTeal from "../../images/circlesTeal.svg"

export const SockContainer = styled.div`
  background-color: ${darkGreen};
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    background: url('${circlesTeal}');
    background-position: 0 0;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    width: 600px;
    top: -175px;
    left: -175px;
  }
  &:after {
    content: "";
    background: url('${circlesTeal}');
    background-position: 0 0;
    background-repeat: no-repeat;
    height: 100%;
    position: absolute;
    width: 600px;
    top: 175px;
    right: -425px;
  }
`

export const SockContentContainer = styled.div`
  width: 75%;
  color: white;
  overflow-wrap: break-word;
  display: inline-block;
  align-self: center;
  z-index: 100;
`

export const SockButton = styled(Button)`
  background-color: white;
  color: ${darkGreen};
  text-transform: uppercase;
  margin: 20px;
`

export const SockTitle = styled(BBh2)`
  color: white;
`


export const SockText = styled(BBp)`
  color: white;
`
