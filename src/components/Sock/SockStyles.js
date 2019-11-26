import styled from "styled-components"
import {BBh2, BBp} from "../Base/fonts"
import { darkGreen } from "../Base/colors"
import { Button } from "../Base/basecomponents"

export const SockContainer = styled.div`
  background-color: ${(darkGreen)};
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: center;
`

export const SockContentContainer = styled.div`
  width: 75%;
  color: white;
  overflow-wrap: break-word;
  display: inline-block;
  align-self: center;
`

export const SockButton = styled(Button)`
  background-color: white;
  color: ${(darkGreen)};
  text-transform: uppercase;
  margin: 20px;
`

export const SockTitle = styled(BBh2)`

`


export const SockText = styled(BBp)`
`
